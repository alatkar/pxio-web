"use server"

import * as z from "zod"
import bcrypt from 'bcryptjs';
import { RegisterSchema } from "@/schemas"

import { prismaDb } from "@/lib/db";
import { getUserByEmail } from "../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values)
  const validatedFields = RegisterSchema.safeParse(values)

  if(!validatedFields.success) {
    return { error: "Invalid fields!"};
  }

  const {name, password, email} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!"}
  }

  const orgId = "a745b8ef-1bae-4563-ab04-b47dc4a6d695";
  const defaultOrg = await prismaDb.organization.findUnique({
    where: { 
      id: orgId
    }
  })
  
  if (!defaultOrg) {
    const org= await prismaDb.organization.create({
      data: {
        id: "a745b8ef-1bae-4563-ab04-b47dc4a6d695",
        name: "Phoenix iO",
        description: "Ultimate Project Execution"
      }
    })
  }


  await prismaDb.user.create({
    data: {
      name,
      email,        
      password: hashedPassword,
      org_id: orgId,
    }
  })

  // Send verification token email

  return { success: "Account created Successfully! Email sent!"};
}