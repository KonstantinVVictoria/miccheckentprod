import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import emailjs from "@emailjs/nodejs";
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const payload = req.body;
    const template_params = {
      name: payload.name,
      email: payload.email,
      request: payload.request,
      phone_number: payload.phone_number,
    };
    await emailjs.send(
      process.env.EMAIL_JS_SERVICE_ID as string,
      process.env.EMAIL_JS_BOOKING_REQUEST_TEMPLATE_ID as string,
      template_params,
      {
        publicKey: process.env.EMAIL_JS_SERVICE_PUBLIC_KEY as string,
        privateKey: process.env.EMAIL_JS_SERVICE_PRIVATE_KEY as string,
      }
    );
    await emailjs.send(
      process.env.EMAIL_JS_SERVICE_ID as string,
      process.env.EMAIL_JS_BOOKING_CONFIRMATION_TEMPLATE_ID as string,
      template_params,
      {
        publicKey: process.env.EMAIL_JS_SERVICE_PUBLIC_KEY as string,
        privateKey: process.env.EMAIL_JS_SERVICE_PRIVATE_KEY as string,
      }
    );
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SHEETS_SERVICE_EMAIL,
      key: process.env.GOOGLE_SHEETS_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEETS_PAGE_ID as string,
      serviceAccountAuth
    );
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
    await sheet.addRow(payload);
    res.status(200).json({ message: "Hello from Next.js!" });
  } else {
    // Handle any other HTTP method
  }
}
