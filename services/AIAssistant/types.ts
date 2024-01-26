import OpenAI from "openai";

export type AssistantServiceInterface = {
  open_ai_key: string;
  open_ai_config?: object;
};

export type AssistantDependencies = {
  identity: string;
  context_path: string;
  name: string;
};
export type DiscussionDependencies = {
  client: OpenAI;
  assistant: OpenAI.Beta.Assistants.Assistant;
  identity: string;
};

export type MessageDependencies = {
  client: OpenAI;
  thread_id: string;
  assistant: OpenAI.Beta.Assistants.Assistant;
  identity: string;
};
export default AssistantDependencies;
