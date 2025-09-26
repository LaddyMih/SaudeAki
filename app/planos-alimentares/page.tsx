"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PlanoCard from "@/components/PlanoCard";

interface Plano {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

const planosIniciais: Plano[] = [
  { id: 1, titulo: "Plano Emagrecimento", descricao: "Focado em redução de gordura.", imagem: "/planos/emagrecimento.jpg" },
  { id: 2, titulo: "Plano Hipertrofia", descricao: "Rico em proteínas para ganho de massa.", imagem: "/planos/hipertrofia.jpg" },
  { id: 3, titulo: "Plano Equilíbrio", descricao: "Para manter saúde e peso ideal.", imagem: "/planos/equilibrio.jpg" },
];

export default function PlanosAlimentares() {
  const router = useRouter();
  const [planos] = useState<Plano[]>(planosIniciais);

  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Planos Alimentares</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planos.map((plano) => (
          <PlanoCard
            key={plano.id}
            titulo={plano.titulo}
            descricao={plano.descricao}
            imagem={plano.imagem}
            onClick={() => router.push(`/planos-alimentares/${plano.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
