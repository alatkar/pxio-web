'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  User,
  Organization,
  Rfp
} from './dataModel';
//import { formatCurrency } from './utils';
import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';

export async function login(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log(formData);

    await signIn('credentials', formData, { redirectTo: "/rfps" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}