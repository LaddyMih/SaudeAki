import { authClient } from "@/lib/auth-client";

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await authClient.signUp.email(
    {
      email,
      password,
      name,
      callbackURL: "/dashboard",
    },
    {
      onRequest: () => {
        console.log("Signing up...");
      },
      onSuccess: () => {
        window.location.href = "/dashboard";
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    }
  );

  return { data, error };
}
    