import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cartao() {
  const cards = [
    {
      title: "Treino Personalizado",
      text: "Planos de exercícios adaptados ao seu corpo e objetivos.",
      img: "/imagens/treino.jpg",
      link: "/treinos",
    },
    {
      title: "Planos Alimentares",
      text: "Nutrição equilibrada para acompanhar sua evolução.",
      img: "/imagens/Alimentação.jpg",
      link: "/planos-alimentares",
    },
    {
      title: "Monitoramento",
      text: "Acompanhe seu progresso com dados e metas personalizadas.",
      img: "/imagens/Monitoramento.jpg",
      link: "/monitoramento",
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
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    setRotate(prev => ({ ...prev, [index]: { rotateX, rotateY } }));
  };

  const handleMouseLeave = index => {
    setRotate(prev => ({ ...prev, [index]: { rotateX: 0, rotateY: 0 } }));
  };

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-white to-blue-50">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Nossos Serviços Personalizados
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Descubra soluções que cuidam do seu corpo e mente com excelência.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid dos Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group perspective"
            onMouseMove={e => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl bg-white transform transition-transform duration-500"
              style={{
                transform: `rotateX(${rotate[index]?.rotateX || 0}deg) rotateY(${rotate[index]?.rotateY || 0}deg)`,
              }}
            >
              {/* Imagem com overlay */}
              <div className="relative h-[400px] w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    transform: `translateX(${rotate[index]?.rotateY ? rotate[index].rotateY / 5 : 0}px) translateY(${
                      rotate[index]?.rotateX ? -rotate[index].rotateX / 5 : 0
                    }px)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-90 transition-all duration-500"></div>
              </div>

              {/* Conteúdo */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{card.title}</h3>
                <p className="text-sm mb-5 text-gray-100 drop-shadow-md">{card.text}</p>
                <Link href={card.link}>
                  <button className="px-6 py-3 rounded-full font-semibold border border-blue-600 bg-transparent text-white hover:bg-blue-500/80 hover:text-white transition-all duration-300 shadow-md">
                    Saiba mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
