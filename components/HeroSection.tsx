"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { dia: "Seg", valor: 60 },
  { dia: "Ter", valor: 68 },
  { dia: "Qua", valor: 72 },
  { dia: "Qui", valor: 75 },
  { dia: "Sex", valor: 80 },
  { dia: "Sáb", valor: 82 },
  { dia: "Dom", valor: 85 },
];

export default function HeroSection() {
  const [nome, setNome] = useState<string | null>(null);

  useEffect(() => {
    // Pega o nome do usuário do localStorage
    const usuario = localStorage.getItem("usuarioNome");
    if (usuario) setNome(usuario);
  }, []);

  const estaLogado = !!nome;

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen text-center lg:text-left px-6 lg:px-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-[100px]">
      {/* Fundo decorativo suave */}
      <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10"></div>

      {/* Conteúdo de texto */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Bem-vindo{nome ? `, ${nome}` : ""} ao <span className="text-blue-600">Saúde Aki</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Encontre treinos, artigos e dicas para transformar sua saúde e bem-estar.
        </p>

        <Link href={estaLogado ? "/monitoramento" : "/login"} passHref>
          <Button
            className={cn(
              "text-white bg-blue-600 hover:bg-blue-700 font-semibold text-lg px-8 py-6 rounded-full shadow-md",
              "transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            )}
          >
            {estaLogado ? "Ir para Dashboard" : "Comece Agora"}
          </Button>
        </Link>
      </div>

      {/* Gráfico ilustrativo */}
      <div className="relative z-10 w-full lg:w-[45%] h-[300px] mt-10 lg:mt-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="dia" stroke="#94A3B8" />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="valor"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ fill: "#2563EB", r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
