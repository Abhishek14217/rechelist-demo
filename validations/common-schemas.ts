import { z } from "zod";

//-----------------NEWSLETTER SUBSCRIPTION SCHEMA-------------------
export const newsSubscriptionSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Invalid Email" }),
});

export type TNewsSubscriptionSchema = z.infer<typeof newsSubscriptionSchema>;
