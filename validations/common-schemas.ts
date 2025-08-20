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

//-----------------CONTACT US SCHEMA-------------------
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Invalid Email" }),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
  city: z.string(),
  message: z.string(),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;

//-----------------CAREER FORM SCHEMA-------------------
export const careerFormSchema = z.object({
  emailCareer: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid Email" }),
});

export type TCareerFormSchema = z.infer<typeof careerFormSchema>;
