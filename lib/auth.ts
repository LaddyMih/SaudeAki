import { betterAuth } from "better-auth";
import { prisma } from "@/lib/prisma"; // you need to export your PrismaClient somewhere
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    }
});
