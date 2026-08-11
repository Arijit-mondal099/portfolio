import { z } from "zod";

const envValidationSchema = z
  .object({
    SMTP_HOST: z.string().min(1),
    SMTP_PORT: z.coerce.number(),
    SMTP_USER: z.string().min(1),
    SMTP_PASS: z.string().min(1),
    SMTP_FROM: z.string().min(1),

    INNGEST_DEV: z.coerce.number().optional(),
    INNGEST_EVENT_KEY: z.string().min(1).optional(),
    INNGEST_SIGNING_KEY: z.string().min(1).optional(),

    CONTACT_TO_EMAIL: z.string().min(1),
    NEXT_PUBLIC_SITE_URL: z.string().min(1),
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
