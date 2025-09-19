"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", {
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error("Error during Google sign in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className={cn("text-3xl font-bold text-center")}>
          Entre no SaúdeAki
        </h1>

        <Button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          variant="outline"
          className={cn(
            "w-full lg:w-[512px] h-[46px] rounded-[12px] border-gray-500 dark:border-[#3f3f3f] border-[2px] dark:border-[1px] shadow-sm hover:bg-gray-50 dark:hover:bg-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-white dark:bg-[#2d2d2d] text-gray-700 dark:text-gray-200"
          )}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mr-3 font-bold" />
          ) : (
            <FaGoogle />
          )}
          {isLoading ? (
            <p className="font-semibold">Entrando...</p>
          ) : (
            <p className="font-semibold">Continue com Google</p>
          )}
        </Button>

        <div className="mt-[14px] w-full lg:w-[512px] text-center">
          <p className={cn("text-[#303436] dark:text-gray-400 text-[14px]")}>
            Ao continuar, você concorda com os nossos{" "}
            <a
              href="/terms"
              className="text-blue-600 hover:text-blue-500 underline"
            >
              Termos de Uso
            </a>{" "}
            e{" "}
            <a
              href="/privacy"
              className="text-blue-600 hover:text-blue-500 underline"
            >
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
