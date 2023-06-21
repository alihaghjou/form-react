import {z} from "zod"
export const zod = z.object({
    email: z.string().email({ message: "Enter a valid Email" }),
    firstName: z
      .string()
      .min(2, { message: "Must contain at least 2 character" }),
    lastName: z.string().min(2, { message: "Must contain at least 2 character" }),
    password: z
      .string()
      .min(8, { message: "Must contain at least 8 character" })
      .regex(/[a-z]/, { message: "Must Contain a Lowercase" })
      .regex(/[A-Z]/, { message: "Must Contain an UpperCase" })
      .regex(/[0-9]/, { message: "Must Contain a Number" }),
  });
export type FormData = z.infer<typeof zod>