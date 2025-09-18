// middleware.ts - Updated for Google-only authentication
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import authConfig from "@/auth.config";
const { auth } = NextAuth(authConfig);
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

export default auth((req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const response = NextResponse.next();
  response.headers.set("x-current-path", nextUrl.pathname);

  // nextauth endpoints
  if (isApiAuthRoute) {
    return response;
  }

  /* Caso o usuário tentar acessar "/" estando logado, 
    ele vai ser redirecionado para "/dashboard" 
  */
  if (nextUrl.pathname === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  /* Quando o usuário estiver logado e tentar acessar as rotas de autenticação, o código
    redireciona ele automaticamente para a dashboard.
  */
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return response;
  }

  /** Pequena proteção caso o usuário que não estiver logado tente acessar as rotas
    protegidas 
  */ 
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return response;
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};