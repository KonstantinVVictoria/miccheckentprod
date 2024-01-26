import OpenAI from "openai";
import {
  AssistantServiceInterface,
  AssistantDependencies,
  DiscussionDependencies,
  MessageDependencies,
} from "./types";
import fs from "fs";
function AssistantService(config: AssistantServiceInterface) {
  const OpenAIHandler = new OpenAI({
    apiKey: config.open_ai_key,
    ...config.open_ai_config,
  });

  const _interface = {
    new: Assistant(OpenAIHandler),
  };

  return _interface;
}

function Assistant(OpenAIHandler: OpenAI) {
  return async function (AssistantConfig: AssistantDependencies) {
    const { name, identity, context_path } = AssistantConfig;
    const file = await OpenAIHandler.files.create({
      file: fs.createReadStream("knowledge.pdf"),
      purpose: "assistants",
    });

    const assistant = await OpenAIHandler.beta.assistants.create({
      name: name,
      instructions:
        "You are a personal math tutor. Write and run code to answer math questions.",
      tools: [{ type: "retrieval" }],
      model: "gpt-4-1106-preview",
      file_ids: [file.id],
    });
    const dependencies: DiscussionDependencies = {
      client: OpenAIHandler,
      assistant: assistant,
      identity: identity,
    };

    return {
      new_discussion: async () => await DiscussionHandler(dependencies),
    };
  };
}

async function DiscussionHandler(dependencies: DiscussionDependencies) {
  const { client, assistant, identity } = dependencies;
  const thread = await client.beta.threads.create();
  const MessageDependencies: MessageDependencies = {
    client: client,
    thread_id: thread.id,
    assistant: assistant,
    identity: identity,
  };
  const MessageService = await MessageHandler(MessageDependencies);

  return {
    send_message: MessageService.send_message,
  };
}

async function MessageHandler(dependencies: MessageDependencies) {
  const { client, thread_id, assistant, identity } = dependencies;
  const send_message = async (content: string) => {
    const message = await client.beta.threads.messages.create(thread_id, {
      role: "user",
      content: content,
    });
    const run = await client.beta.threads.runs.create(thread_id, {
      assistant_id: assistant.id,
      instructions: identity,
    });
  };
  return {
    send_message: send_message,
  };
}
