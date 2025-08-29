
import { z } from "zod"


export const UserRegistrationSchema = z.object({
    type: z.string().min(1, { message: "Type is required" }),
    fullname: z.string().min(4, { message: "Your Full Name must be at least 4 characters long" }),
    email: z
        .string()
        .email({ message: "Incorrect email format" })
        .refine(
            (val) =>
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+@.+\..+$/.test(val),
            {
                message: "Email must include a letter, number, and special character before @",
            }
        ),
    confirmEmail: z.string().email({ message: "Incorrect email format" }),
    password: z
        .string()
        .min(8, { message: "Your password must be at least 8 characters long" })
        .max(64, { message: "Your password must be less than 64 characters" }),
    confirmPassword: z.string(),
    otp: z.string().length(6, { message: "OTP must be 6 digits" }),
})
    .refine((data) => data.email === data.confirmEmail, {
        message: "Emails do not match",
        path: ["confirmEmail"],
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })

export type UserRegistrationProps = z.infer<typeof UserRegistrationSchema>



export const UserLoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(64, { message: "Your password must be less than 64 characters" }),
});

export type UserLoginProps = z.infer<typeof UserLoginSchema>;

