import { ContactInput } from "@/lib/validations";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
  throw new Error("Oops mailer env not provided");
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendEmail(data: ContactInput): Promise<void> {
  await transporter.sendMail({
    from: SMTP_FROM,
    to: CONTACT_TO_EMAIL ?? SMTP_FROM,
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    text: data.message,
  });
}
