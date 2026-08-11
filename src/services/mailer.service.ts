import { ContactInput } from "@/lib/validations";
import nodemailer from "nodemailer";
import { env } from "@/lib/env";

function getTransporter() {
  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });
}

export async function sendEmail(
  data: ContactInput
): Promise<nodemailer.SentMessageInfo> {
  const transporter = getTransporter();
  const info = await transporter.sendMail({
    from: env.SMTP_FROM,
    to: env.CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    text: data.message,
  });

  return info;
}
