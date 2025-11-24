"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cartao_Artigos() {
  const artigos = [
    {
      title: "O que evitar para melhorar o sono",
      text: "Descubra hábitos que atrapalham seu descanso e como substituí-los.",
      img: "/imagens/acordebem.png",
      link: "/artigos/sono",
    },
    {
      title: "Como criar hábitos saudáveis",
      text: "Pequenas mudanças diárias que fazem grande diferença na saúde.",
      img: "/imagens/tomandoagua.jpg",
      link: "/artigos/habitos-saudaveis",
    },
    {
      title: "5 benefícios de treino funcional",
      text: "Conheça os impactos positivos dessa prática para o corpo e mente.",
      img: "/imagens/forte.jpg",
      link: "/artigos/treino-funcional",
    },
  ];

  const [rotate, setRotate] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;
    setRotate(prev => ({ ...prev, [index]: { rotateX, rotateY } }));
  };

  const handleMouseLeave = index => {
    setRotate(prev => ({ ...prev, [index]: { rotateX: 0, rotateY: 0 } }));
  };

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Dicas de Saúde e Bem-Estar
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Descubra conteúdos para melhorar seus hábitos e qualidade de vida
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {artigos.map((artigo, index) => (
          <div
            key={index}
            className="relative group perspective h-[450px] w-full rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500"
            onMouseMove={e => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transform: `rotateX(${rotate[index]?.rotateX || 0}deg) rotateY(${rotate[index]?.rotateY || 0}deg)`,
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={artigo.img}
                alt={artigo.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{
                  transform: `translateX(${rotate[index]?.rotateY ? rotate[index].rotateY / 5 : 0}px) translateY(${
                    rotate[index]?.rotateX ? -rotate[index].rotateX / 5 : 0
                  }px)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-all duration-500"></div>
            </div>

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{artigo.title}</h3>
              <p className="text-sm mb-4 drop-shadow-md">{artigo.text}</p>
              <Link href={artigo.link}>
                <button className="relative px-4 py-2 rounded-full font-semibold border border-blue-600 bg-transparent text-white overflow-hidden transition-all duration-300 shadow-md hover:text-white">
                  <span className="relative z-10">Veja mais</span>
                  <span className="absolute inset-0 bg-blue-500/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-full"></span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
