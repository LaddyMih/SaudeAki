"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface DietaDetalheProps {
  params: { id: string };
}

interface Plano {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  refeicoes: { horario: string; nome: string; quantidade: string }[];
}

// Dados simulados
const planos: Plano[] = [
  {
    id: 1,
    titulo: "Plano Emagrecimento",
    descricao: "Focado em redução de gordura com refeições equilibradas.",
    imagem: "/imagens/emagrecimento.png",
    refeicoes: [
      { horario: "Café da manhã", nome: "Ovos mexidos", quantidade: "2 unidades" },
      { horario: "Lanche", nome: "Iogurte natural", quantidade: "200ml" },
      { horario: "Almoço", nome: "Frango grelhado com salada", quantidade: "150g de frango + salada à vontade" },
      { horario: "Lanche da tarde", nome: "Maçã", quantidade: "1 unidade" },
      { horario: "Jantar", nome: "Peixe assado com legumes", quantidade: "150g de peixe + legumes" },
    ],
  },
  {
    id: 2,
    titulo: "Plano Hipertrofia",
    descricao: "Rico em proteínas para ganho de massa muscular.",
    imagem: "/imagens/hipertrofia.png",
    refeicoes: [
      { horario: "Café da manhã", nome: "Omelete com aveia", quantidade: "3 ovos + 30g aveia" },
      { horario: "Lanche", nome: "Whey Protein", quantidade: "30g" },
      { horario: "Almoço", nome: "Frango com arroz integral", quantidade: "150g frango + 100g arroz" },
      { horario: "Lanche da tarde", nome: "Banana com pasta de amendoim", quantidade: "1 unidade + 1 colher" },
      { horario: "Jantar", nome: "Carne vermelha magra com legumes", quantidade: "150g carne + legumes" },
    ],
  },
  {
    id: 3,
    titulo: "Plano Equilíbrio",
    descricao: "Para manter saúde e peso ideal com refeições balanceadas.",
    imagem: "/imagens/equilibrio.png",
    refeicoes: [
      { horario: "Café da manhã", nome: "Pão integral com queijo", quantidade: "2 fatias" },
      { horario: "Lanche", nome: "Frutas sortidas", quantidade: "1 porção" },
      { horario: "Almoço", nome: "Salada + peixe grelhado", quantidade: "150g de peixe + salada" },
      { horario: "Lanche da tarde", nome: "Iogurte", quantidade: "200ml" },
      { horario: "Jantar", nome: "Omelete de vegetais", quantidade: "3 ovos" },
    ],
  },
];

export default function DietaDetalhe(props: DietaDetalheProps) {
  const router = useRouter();

  // Usa React.use() para acessar params
  const params = React.use(props.params);

  // Converte o ID para número para comparar com os dados
  const planoId = Number(params.id);

  const plano = planos.find((p) => p.id === planoId);

  if (!plano) {
    return <p className="text-center mt-10 text-red-500">Nenhum plano encontrado.</p>;
  }

  return (
    <section className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <button onClick={() => router.back()} className="mb-4 text-blue-600 hover:underline">
        &larr; Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4">{plano.titulo}</h1>
      <p className="text-gray-700 mb-6">{plano.descricao}</p>
      <Image src={plano.imagem} alt={plano.titulo} width={800} height={400} className="w-full object-cover rounded-lg mb-6" />

      <h2 className="text-2xl font-semibold mb-4">Refeições</h2>
      <ul className="space-y-3">
        {plano.refeicoes.map((refeicao, index) => (
          <li key={index} className="border p-3 rounded-md shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium">{refeicao.horario}</p>
              <p className="text-gray-600">{refeicao.nome}</p>
            </div>
            <span className="text-gray-800 font-semibold">{refeicao.quantidade}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
