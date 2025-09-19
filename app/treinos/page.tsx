"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { treinos as treinosIniciais, Treino, Exercicio } from "./treinos";

export default function TreinosPage() {
  const [treinos, setTreinos] = useState<Treino[]>(treinosIniciais);

  const excluirTreino = (id: number) => {
    setTreinos(treinos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Treinos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treinos.map((treino) => (
          <div
            key={treino.id}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Link para detalhes do treino */}
            <Link href={`/treinos/${treino.id}`} className="block">
              <div className="relative h-48 w-full cursor-pointer ">
                {/* Imagem do treino */}
                <Image
                  src={treino.img}
                  alt={treino.nome}
                  fill
                  className="object-cover"
                />
                {/* Overlay com nome */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-semibold text-xl">
                  {treino.nome}
                </div>
              </div>
            </Link>

            <div className="p-4">
              <span className="text-sm text-gray-600 mb-2 block">
                {treino.grupo}
              </span>

              <div className="grid grid-cols-1 gap-2">
                {treino.exercicios.map((ex: Exercicio, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounded overflow-hidden">
                      {/* Imagem do exercício
                      <Image
                        src={ex.img}
                        alt={ex.nome}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <span className="text-sm">{ex.nome}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => excluirTreino(treino.id)}
                className="mt-4 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full w-full"
              >
                <Trash2 size={16} /> Excluir Treino
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
