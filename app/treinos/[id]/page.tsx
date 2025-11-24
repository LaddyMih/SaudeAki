"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { treinos, Treino, Exercicio } from "../treinos";

export default function TreinoDetalhe() {
  const router = useRouter();
  const params = useParams();
  const treinoId = parseInt(params.id);
  const treino: Treino | undefined = treinos.find((t) => t.id === treinoId);

  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const concluidos: number[] = JSON.parse(
      localStorage.getItem("treinosConcluidos") || "[]"
    );
    setConcluido(concluidos.includes(treinoId));
  }, [treinoId]);

  const toggleConcluido = () => {
    const concluidos: number[] = JSON.parse(
      localStorage.getItem("treinosConcluidos") || "[]"
    );
    if (concluidos.includes(treinoId)) {
      // se já está concluído, remove
      const novos = concluidos.filter((id) => id !== treinoId);
      localStorage.setItem("treinosConcluidos", JSON.stringify(novos));
      setConcluido(false);
    } else {
      // se não está concluído, adiciona
      concluidos.push(treinoId);
      localStorage.setItem("treinosConcluidos", JSON.stringify(concluidos));
      setConcluido(true);
    }
  };

  if (!treino) return <p>Treino não encontrado.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Botão voltar */}
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        &larr; Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4 text-center">{treino.nome}</h1>

      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl mb-4">
        <Image src={treino.img} alt={treino.nome} fill className="object-cover" />
      </div>

      <span className="text-indigo-600 font-medium mb-8 block text-center">
        {treino.grupo}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {treino.exercicios.map((ex: Exercicio, index) => (
          <div key={index} className="relative h-[200px] w-full overflow-hidden rounded-2xl shadow-2xl p-4 bg-white">
            <h3 className="text-2xl font-semibold mb-2">{ex.nome}</h3>
            <p className="text-sm mb-2">{ex.descricao}</p>
            <p className="text-sm">{ex.series} séries de {ex.repeticoes}</p>
          </div>
        ))}
      </div>

      <button
        onClick={toggleConcluido}
        className={`w-full py-3 rounded-full text-white font-semibold transition ${
          concluido ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {concluido ? "Treino Concluído " : "Marcar como Concluído"}
      </button>
    </div>
  );
}
