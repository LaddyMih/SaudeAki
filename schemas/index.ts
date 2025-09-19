import * as z from "zod";

import { UserRole } from "@prisma/client";

const requiredString = z.string().trim().min(1, "Required");

const isAdult = (birthYear: number, birthMonth: number, birthDay: number) => {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

  // Calculates the age
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occured yet this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 18;
};

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password is required",
  }),
});

export const TwoFactorSchema = z.object({
  code: z
    .string()
    .length(6, {
      message: "2FA code is required",
    })
    .regex(/^\d{6}$/, {
      message: "Code must contain only numbers",
    }),
});

export const ExtendedLoginSchema = LoginSchema.extend({
  code: TwoFactorSchema.shape.code.optional(),
});

export const RegisterSchema = z
  .object({
    email: requiredString.email("Invalid email address"),
    password: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
    username: requiredString
      .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ allowed.")
      .max(20, "Must be at most 20 characters"),
    name: requiredString
      .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ allowed.")
      .max(20, "Must be at most 20 characters"),
    birthMonth: z.string().min(1, "Month is required"),
    birthDay: z
      .string()
      .min(1, "Day is required")
      .or(z.number().min(1, "Day is required")),
    birthYear: z
      .string()
      .min(1, "Year is required")
      .or(z.number().min(1900, "Year is required")),
  })
  .refine(
    (data) => {
      // Convert the number if it's a string
      const month =
        typeof data.birthMonth === "string"
          ? parseInt(data.birthMonth)
          : data.birthMonth;
      const day =
        typeof data.birthDay === "string"
          ? parseInt(data.birthDay)
          : data.birthDay;
      const year =
        typeof data.birthYear === "string"
          ? parseInt(data.birthYear)
          : data.birthYear;

      // Verifies if the date is valid
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    },
    {
      message: "Invalid date of birth",
      path: ["birthDay"],
    }
  )
  .refine(
    (data) => {
      // Convert the number if it's a string
      const month =
        typeof data.birthMonth === "string"
          ? parseInt(data.birthMonth)
          : data.birthMonth;
      const day =
        typeof data.birthDay === "string"
          ? parseInt(data.birthDay)
          : data.birthDay;
      const year =
        typeof data.birthYear === "string"
          ? parseInt(data.birthYear)
          : data.birthYear;

      // Verifies if the user is an adult
      return isAdult(year, month, day);
    },
    {
      message: "You must be at least 18 years old",
      path: ["birthYear"],
    }
  );

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Minimun 8 characters required",
    }),
    confirmPassword: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const SettingsSchema = z
  .object({
    name: z.optional(z.string().min(1)),
    username: z.optional(z.string().min(3)),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    hashedPassword: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.hashedPassword && !data.newPassword) return false;
      return true;
    },
    {
      message: "New password is required.",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.hashedPassword) return false;
      return true;
    },
    {
      message: "Password is required.",
      path: ["password"],
    }
  );

export const changeUsernameSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .transform((val) => val.toLowerCase()),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const changeEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
  currentPassword: z.string().min(1, "Current password is required"),
});

export const deleteAccountSchema = z.object({
  confirmationText: z
    .string()
    .min(1, "Please type 'DELETE' to confirm")
    .refine((val) => val === "DELETE", "Please type 'DELETE' exactly"),
  currentPassword: z.string().min(1, "Current password is required"),
});

export const twoFactorSchema = z.object({
  isTwoFactorEnabled: z.boolean(),
  currentPassword: z.string().min(1, "Current password is required"),
});

export type ChangeUsernameValues = z.infer<typeof changeUsernameSchema>;
export type ChangePasswordValues = z.infer<typeof changePasswordSchema>;
export type ChangeEmailValues = z.infer<typeof changeEmailSchema>;
export type DeleteAccountValues = z.infer<typeof deleteAccountSchema>;
export type TwoFactorValues = z.infer<typeof twoFactorSchema>;

export const createPostSchema = z.object({
  body: requiredString,
  mediaIds: z.array(z.string()).max(5, "Cannot have more than 5 attachments"),
});

export const updateUserProfileSchema = z.object({
  name: requiredString,
  bio: z.string().max(1000, "Must be at most 1000 characters"),
});

export type updateUserProfileValues = z.infer<typeof updateUserProfileSchema>;

export const createCommentSchema = z.object({
  postId: z.string().trim().min(1, "Post ID is required"),
  body: z.string().trim().min(1, "Comment body is required"),
  parentId: z.string().optional(), // For threaded replies
});

export type CreateCommentValues = z.infer<typeof createCommentSchema>;

export const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  birthMonth: z.string().min(1, "Month is required"),
  birthDay: z.string().min(1, "Day is required"),
  birthYear: z.string().min(4, "Year is required"),
});

export const step2Schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const ExtendedLoginWithContextSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
  userAgent: z.optional(z.string()),
  ipAddress: z.optional(z.string()),
  location: z.optional(z.string()),
  timestamp: z.optional(z.string()),
});

export const UserMetadataSchema = z.object({
  id: z.string().min(1),
  profileImage: z.string().url().optional().nullable(),
  bannerImage: z.string().url().optional().nullable(),
});

export const bookmarkedQuerySchema = z.object({
  cursor: z.string().trim().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(10),
});

export const createReplySchema = z.object({
  body: z
    .string()
    .min(1, "Reply content is required")
    .max(280, "Reply too long"),
  mediaIds: z.array(z.string()).optional().default([]),
  parentId: z.string(),
});
