"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface PlanoCardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  onClick: () => void;
}

export default function PlanoCard({ titulo, descricao, imagem, onClick }: PlanoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group relative border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
    >
      {/* Imagem com efeito escurecido no hover */}
      <div className="relative w-full h-56">
        <Image
          src={imagem}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {titulo}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{descricao}</p>

        <button
          onClick={onClick}
          className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Ver Plano
        </button>
      </div>
    </motion.div>
  );
}
