/**
 * This file is responsible to register the user to the database.
 */

"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserByUsername } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";a

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, username, name, birthYear, birthMonth, birthDay } =
    validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUserEmail = await getUserByEmail(email);

  const existingUsername = await getUserByUsername(username);

  if (existingUserEmail) {
    return { error: "Email already in use." };
  }

  if (existingUsername) {
    return { error: "Username already in use." };
  }

  // Convert the inputs of date of birth to numbers, if they are strings
  const year = typeof birthYear === "string" ? parseInt(birthYear) : birthYear;
  const month =
    typeof birthMonth === "string" ? parseInt(birthMonth) : birthMonth;
  const day = typeof birthDay === "string" ? parseInt(birthDay) : birthDay;

  // Create the object Date to date of birth
  const dateOfBirth = new Date(year, month - 1, day);

  await db.$transaction(async (tx) => {
    // In any case, remove the "const user"
    const user = await tx.user.create({
      data: {
        username,
        name,
        email,
        hashedPassword: hashedPassword,
        dateOfBirth,
        // ...(dateOfBirth instanceof Date && !isNaN(dateOfBirth.getTime()) ? { dateOfBirth } : {}),
      },
    });
    await streamServerClient.upsertUser({
      id: user.id,
      username,
      name: username,
    });
  });

  // Verification Email
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent" };
};
