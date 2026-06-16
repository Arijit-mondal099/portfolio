import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations";

/**
 * POST /api/contact
 *
 * Validates the submission with the shared schema and emails it via Resend.
 * Requires `RESEND_API_KEY`; `CONTACT_TO_EMAIL` overrides the recipient.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    // Use a verified domain in production; onboarding@resend.dev works for tests.
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? "arijitm717@gmail.com",
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
