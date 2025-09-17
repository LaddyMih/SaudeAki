"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { titleFont } from "@/fonts/fonts";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Busca usuário logado
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user || null));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Logo + Texto */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="Saúde Aki" width={50} height={50} />
        <span className="font-bold text-xl text-black hover:text-slate-500 transition-colors duration-200">
          Saúde Aki
        </span>
      </Link>

      {/* Menu desktop */}
      <div className={cn(titleFont.className, "hidden md:flex gap-12")}>
        <Link href="/" className="text-black font-medium hover:text-slate-500 transition-colors duration-200">
          Início
        </Link>
        <Link href="/Cards/card" className="text-black font-medium hover:text-slate-500 transition-colors duration-200">
          Treinos
        </Link>
        <Link href="/" className="text-black font-medium hover:text-slate-500 transition-colors duration-200">
          Artigos
        </Link>
      </div>

      {/* Botão Login / User desktop + Hamburguer mobile */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-3">
            <span className="text-black font-medium">Olá, {user?.name}</span>
            <Button
              onClick={handleLogout}
              className="text-white bg-black px-6 py-2 rounded-md font-medium transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer"
            >
              Sair
            </Button>
          </div>
        ) : (
          <Link href="/login" className="hidden md:block">
            <Button className="text-white bg-black px-6 py-2 rounded-md font-medium transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer">
              Login
            </Button>
          </Link>
        )}

        {/* Hamburguer mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={cn(
              "block h-0.5 w-full bg-black transition-transform duration-300",
              isOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-full bg-black transition-opacity duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-full bg-black transition-transform duration-300",
              isOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Menu mobile deslizante lateral */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-start p-6 gap-6 mt-16">
          <Link href="/" className="text-black font-medium hover:text-slate-500 transition-colors duration-200">
            Início
          </Link>
          <Link href="/Cards/card" className="text-black font-medium hover:text-slate-500 transition-colors duration-200">
            Treinos
          </Link>
          <Link href="/" className="text-black font-medium hover:text-slate-500 transition-colors duration-200">
            Artigos
          </Link>

          {isAuthenticated ? (
            <Button
              onClick={handleLogout}
              className="text-white bg-black px-6 py-2 rounded-md font-medium w-full transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer"
            >
              Sair
            </Button>
          ) : (
            <Link href="/login" className="w-full">
              <Button className="text-white bg-black px-6 py-2 rounded-md font-medium w-full transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Fundo escuro ao abrir menu */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-30" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
