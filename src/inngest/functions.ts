import { ContactInput } from "@/lib/validations";
import { sendEmail } from "@/services/mailer.service";
import { inngest } from "./client";

export const SEND_EMAIL_ID = "send-email" as const;
export const SEND_EMAIL_EVENT = "app/email.send" as const;

export const sendEmailProcess = inngest.createFunction(
  {
    id: SEND_EMAIL_ID,
    name: "Send email function",
    description:
      "Sends the contact form notification email to the site owner when an app/email.send event is triggered.",
    triggers: { event: SEND_EMAIL_EVENT },
    concurrency: {
      limit: 5,
    },
  },
  async ({ event, step }) => {
    const result = await step.run("send-email", async () => {
      return await sendEmail(event.data as ContactInput);
    });

    return {
      message: `Email sended successfully, EventId: ${event.data.id}`,
      result,
    };
  }
);
