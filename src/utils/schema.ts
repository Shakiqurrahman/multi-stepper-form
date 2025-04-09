import { z } from "zod";

export const FormDataSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phoneNumber: z
      .string({ required_error: "Phone number is required." })
      .min(10, "Phone number must be at least 10 digits"),
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),

    // zod doesn't exist or work properly on the minLength or min char in number, that's why i am using string here

    zipCode: z.string().min(5, "Zip code must be at least 5 digits"),
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
