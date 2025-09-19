/**
 * Este arquivo é responsável por permitir ou não o usuário entrar na aplicação.
 */

import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById, getUserByEmail } from "@/data/user";
import { UserRole } from "@prisma/client";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Permite apenas autenticação com o Google
      if (account?.provider !== "google") return false;

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.username = token.username as string;
        session.user.name = token.name;
        session.user.email = token.email ?? "";
        session.user.isOAuth = true; // Sempre "true" para autenticação com Google
      }

      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (!token.sub) return token;

      let existingUser = await getUserById(token.sub);

      if (!existingUser && token.email) {
        existingUser = await getUserByEmail(token.email);
      }

      if (!existingUser && user && account?.provider === "google") {
        // Gera um username aleatório a partir do username da conta do Google do usuário
        const username = generateUsername(
          user.name ?? undefined,
          user.email ?? undefined
        );

        // Cria um novo usuário a partir da conta na Google do próprio usuário
        existingUser = await db.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            username,
            role: "USER",
            emailVerified: new Date(), // Verifica automaticametne para contas feitas com Google
            profileImage: user.image,
          },
        });
      }

      if (existingUser) {
        const existingAccount = await getAccountByUserId(existingUser.id);

        token.isOAuth = !!existingAccount;
        token.name = existingUser.name;
        token.email = existingUser.email;
        token.role = existingUser.role;
        token.username = existingUser.username;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});

// Gerador de username aleatório para contas feitas com Google
function generateUsername(name?: string, email?: string): string {
  // Uses the name if available, removing special characters
  let base = name ? name.toLowerCase().replace(/[^a-z0-9]/g, "") : "";

  // If no name, use the part of the email before "@"
  if (!base && email) {
    base = email
      .split("@")[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
  }

  // If no base from name or email, use "user"
  if (!base) {
    base = "user";
  }

  // Add a random number to increase uniqueness
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${base}${randomNum}`;
}
