import { emit } from "process"
import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
      message: "Email is required",      
  }),
  password: z.string().min(6, {
    message: "Password should be atleast 6 character(s) long"
  })
})


export const RegisterSchema = z.object({
  email: z.string().email({
      message: "Business Email is required",      
  }),
  password: z.string().min(6, {
    message: "Password should be atleast 6 character(s) long"
  }),
  name: z.string().min(1, {message: "Name is required"}),
  company: z.string().min(1, {message: "Your Company/Business/Firm name is required"}),
})