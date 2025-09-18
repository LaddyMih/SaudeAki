/**
 * Este arquivo é responsável por dar um trigger em "middleware.ts"
 */

import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          scope: "openid email profile",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.email = token.email || "";
        session.user.name = token.name;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  events: {
    async signIn({ user, account, profile }) {},
  },
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
} satisfies NextAuthConfig;
