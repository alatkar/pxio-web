
// Version 3: Directly from Authjs.dev and as per this code from Antonio https://www.youtube.com/watch?v=1MTyCvS05V4
import NextAuth,  { type DefaultSession } from "next-auth"
import authConfig from "@/../auth.config";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prismaDb } from "@/lib/db";
import { getUserById } from "@/data/user";
import { $Enums, UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole
    } & DefaultSession["user"]
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({ 
  adapter: PrismaAdapter(prismaDb),
  session: {strategy: "jwt"},
  callbacks: {
    async jwt({token}) {
      console.log(token)
      if (!token.sub) return token; //Not logged

      const curUser = await getUserById(token.sub)
      if (!curUser) return token; //No user 
      token.role = curUser.role;
      
      return token;
    },
    async signIn({user}) {
      const curUser = await getUserById(user.id as string)

      // Disable login if no email verified
      //if (!curUser || !curUser.emailVerified) {
      //  return false;
      //}

      return true;
    },
    async session({token, session}) {
      // Every session to have user id
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session
    },
    async redirect({url, baseUrl}) {
      return baseUrl;
    },
  },
  ...authConfig,
})

/*
//// Second version from the tutorial

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from 'next-auth/providers/credentials';
import { User } from "@/lib/dataModel";
import { sql } from "@vercel/postgres";
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import authConfig from "./auth.config";

//import { PrismaClient } from "@prisma/client"
//import {PrismaAdapter} from "@auth/prisma-adapter"

//const prisma = new PrismaClient()

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  //adapter: PrismaAdapter(prisma),
  //...authConfig,
  providers: [GitHub, Google,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;

            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) return user;
          }

          console.log('Invalid credentials');
          return null;
      },
    }),
  ],
})

/*
//// First version from the tutorial

import NextAuth from 'next-auth';
import Google from "next-auth/providers/google"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/lib/dataModel';
import bcrypt from 'bcrypt';

// Need this file because.. bcrypt relies on Node.js APIs not available in Next.js Middleware

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;

            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) return user;
          }

          console.log('Invalid credentials');
          return null;
      },
    }),
  ],
});*/