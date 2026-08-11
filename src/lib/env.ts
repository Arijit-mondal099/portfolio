import { z } from "zod";

const envValidationSchema = z
  .object({
    SMTP_HOST: z.string().min(1),
    SMTP_PORT: z.coerce.number().int().min(1).max(65535),
    SMTP_USER: z.string().min(1),
    SMTP_PASS: z.string().min(1),
    SMTP_FROM: z.string().min(1),

    INNGEST_DEV: z.coerce.number().optional(),
    INNGEST_EVENT_KEY: z.string().min(1).optional(),
    INNGEST_SIGNING_KEY: z.string().min(1).optional(),

    CONTACT_TO_EMAIL: z.email(),
    NEXT_PUBLIC_SITE_URL: z
      .url()
      .min(1)
      .refine(
        (value) => {
          const url = new URL(value);
          return (
            (url.protocol === "http:" || url.protocol === "https:") &&
            url.search === "" &&
            url.hash === ""
          );
        },
        {
          message: "must be an http(s) URL without a query string or fragment",
        }
      )
      .transform((value) => value.replace(/\/+$/, "")),
  })
  .refine(
    (env) =>
      env.INNGEST_DEV === 1 ||
      (env.INNGEST_EVENT_KEY && env.INNGEST_SIGNING_KEY),
    {
      message:
        "INNGEST_EVENT_KEY and INNGEST_SIGNING_KEY are required when INNGEST_DEV is not set",
    }
  );

const parsed = envValidationSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    "Env validation failed: " +
      parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join(", ")
  );
}

export const env = parsed.data;
