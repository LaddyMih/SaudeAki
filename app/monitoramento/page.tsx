"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { treinos as treinosIniciais, Treino } from "@/app/treinos/treinos";

export default function MonitoramentoPage() {
  const [treinosFeitos, setTreinosFeitos] = useState<number[]>([]);
  const [treinos, setTreinos] = useState<Treino[]>([]);

  useEffect(() => {
    const concluidos = JSON.parse(localStorage.getItem("treinosConcluidos") || "[]");
    setTreinosFeitos(concluidos);
    setTreinos(treinosIniciais);

    // Escutar evento de treino concluído
    const handleTreinoConcluido = (event: any) => {
      const treinoId: number = event.detail;
      setTreinosFeitos((prev) => [...prev, treinoId]);
    };

    window.addEventListener("treinoConcluido", handleTreinoConcluido);

    return () => {
      window.removeEventListener("treinoConcluido", handleTreinoConcluido);
    };
  }, []);

  const totalTreinos = treinos.length;
  const feitos = treinosFeitos.length;
  const naoFeitos = totalTreinos - feitos;

  const data = [
    { name: "Feitos", value: feitos },
    { name: "Não feitos", value: naoFeitos },
  ];

  const COLORS = ["#0486F0", "#bdbdbd"];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition"
      >
        &larr; Voltar
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">Monitoramento</h1>

      <div className="flex justify-center mb-10">
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Treinos feitos:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treinos.filter((t) => treinosFeitos.includes(t.id)).map((t) => (
            <li key={t.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2">{t.nome}</h3>
              <p className="text-sm text-gray-600">{t.grupo}</p>
            </li>
          ))}
          {feitos === 0 && <p className="text-gray-500 col-span-full">Nenhum treino feito ainda.</p>}
        </ul>
      </div>
    </div>
  );
}
