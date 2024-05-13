import authConfig from "../auth.config"
import NextAuth, { Session } from "next-auth"
import { NextRequest } from 'next/server';
import { publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT } from "@/../routes"

//export const { auth: middleware } = NextAuth(authConfig)
const { auth } = NextAuth(authConfig)

export default auth((req: NextRequest & { auth: Session | null }): Response | void => {
  const {nextUrl} = req;  
  const isLogged = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    
  if (isApiAuthRoute) {
    return// null;
  }

  if (isAuthRoute){
    if (isLogged) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return// null;
  }

  if (!isLogged && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl))
  }

  console.log("ATUL New: ", req.nextUrl.pathname, " Logged in ", isLogged);
  return// null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  //matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

/* 
/// Old version from tutorial

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { auth } from './auth';
import { NextResponse } from 'next/server';


//export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
};

export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl?.pathname !== "/") {
    return NextResponse.redirect(
      new URL(
        `login?callbackUrl=${encodeURIComponent(
          reqUrl?.pathname
        )}`,
        req.url
      )
    );
  }
}); */

