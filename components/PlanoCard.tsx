"use client";
import Image from "next/image";

interface PlanoCardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  onClick: () => void;
}

export default function PlanoCard({ titulo, descricao, imagem, onClick }: PlanoCardProps) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image src={imagem} alt={titulo} width={400} height={250} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descricao}</p>
        <button
          onClick={onClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Ver Plano
        </button>
      </div>
    </div>
  );
}
