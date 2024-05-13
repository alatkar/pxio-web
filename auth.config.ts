import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import bcrypt from 'bcryptjs';

export default { 
  providers: [
    Credentials({
    async authorize(credentials) {
      const validatedFields = LoginSchema.safeParse(credentials)

      
      if (validatedFields.success) {
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) return user;

      }

      console.log('Invalid credentials');
      return null;
    },
  }),] } satisfies NextAuthConfig

/*
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.indexOf("login") >= 0) return `/rfps`
      else if (url.indexOf("logout") >= 0) return `/login`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return baseUrl

      return baseUrl
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) return true;
      else return false;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
*/