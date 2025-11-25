// navbar do index ("/")

"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { titleFont } from "@/fonts/fonts";
import { useRouter } from "next/router";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaUser } from "react-icons/fa";
import { logout } from "@/actions/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogoutButton } from "./auth/logout-button";
import { ExitIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

export default function Navbar() {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  const [isOpen, setIsOpen] = useState(false);
  // const [user, setUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   fetch("/api/me")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data.user || null));

  // }, []);

  // Detecta scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleLogout = async () => {
  //   await fetch("/api/logout", { method: "POST" });
  //   setUser(null);
  // };

  // Corrigido: isAuthenticated é true se o usuário existir
  // const isAuthenticated = !!user;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white shadow-md py-2 backdrop-blur-md border-b border-gray-200"
          : "bg-white/70 backdrop-blur-md py-4"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-3 group transition-all duration-200"
      >
        <Image
          src="/imagens/logo.png"
          alt="Saúde Aki"
          width={scrolled ? 50 : 65}
          height={scrolled ? 50 : 65}
          className="transition-transform duration-200 group-hover:scale-105"
        />
      </Link>

      {/* Links desktop */}
      <div className={cn(titleFont.className, "hidden md:flex gap-10")}>
        <Link
          href="/"
          className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
        >
          Início
        </Link>
        <Link
          href="/card"
          className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
        >
          Treinos
        </Link>
        <Link
          href="/"
          className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
        >
          Artigos
        </Link>
      </div>

      {/* Ações */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="hidden md:flex items-center gap-3">
            {/* Corrigido: Exibe apenas o nome do usuário */}
            <span className="text-gray-700 font-medium mr-2">Olá, {user?.name}</span>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user?.image || ""} />
                  <AvatarFallback className="bg-sky-500">
                    <FaUser className="text-white" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <Link href="/dashboard">
                  <DropdownMenuItem>
                    <HomeIcon className="h-4 w-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                <LogoutButton>
                  <DropdownMenuItem>
                    <ExitIcon className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </LogoutButton>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-transform duration-150 active:scale-95"
              onClick={onClick}
            >
              Sair
            </Button> */}
          </div>
        ) : (
          <Link href="/auth/login" className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-transform duration-150 active:scale-95">
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
              "block h-0.5 w-full bg-gray-800 transition-transform duration-300",
              isOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-full bg-gray-800 transition-opacity duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-full bg-gray-800 transition-transform duration-300",
              isOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-start p-6 gap-6 mt-16 bg-white rounded-xl shadow-md">
          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Início
          </Link>

          <Link
            href="/cartao"
            className="text-gray-700 font-medium hover:text-blue-600 duration-200"
          >
            Treinos
          </Link>

          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Artigos
          </Link>

          {user ? (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full rounded-full py-2 transition-transform duration-150 active:scale-95">
              Sair
            </Button>
          ) : (
            <Link href="/login" className="w-full">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full rounded-full py-2 transition-transform duration-150 active:scale-95">
                Entrar
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Fundo escuro ao abrir menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
