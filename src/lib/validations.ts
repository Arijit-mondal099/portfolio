import { z } from "zod";

/**
 * Contact form schema — shared by the client form (react-hook-form resolver)
 * and the server route, so validation rules stay in one place.
 */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
