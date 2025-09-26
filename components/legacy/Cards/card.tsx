import Image from "next/image";
import Link from "next/link";

export default function Cartao() {
  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      {/* Título da seção */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Nossos Serviços Personalizados
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Descubra soluções que cuidam do seu corpo e mente com excelência
        </p>
      </div>

      {/* Grid dos Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Função para criar cards */}
        {[
          {
            title: "Treino Personalizado",
            text: "Planos de exercícios adaptados para você.",
            img: "/imagens/treino.jpg",
            link: "/treinos",
          },
          {
            title: "Planos Alimentares",
            text: "Dicas de dieta para uma alimentação saudável.",
            img: "/imagens/Alimentação.jpg",
            link: "/planos-alimentares",
          },
          {
            title: "Monitoramento",
            text: "Acompanhe seu progresso e resultados.",
            img: "/imagens/Monitoramento.jpg",
            link: "/monitoramento",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl group cursor-pointer perspective"
          >
            {/* Imagem com parallax e zoom */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 group-hover:translate-y-[-5px]">
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:blur-[0.3px]"
              />
            </div>

            {/* Gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-all duration-700 group-hover:from-black/50"></div>

            {/* Conteúdo do card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white transition-all duration-700 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">
                {card.title}
              </h3>
              <p className="text-sm mb-4 drop-shadow-sm">{card.text}</p>

              {/* Botão com Link */}
              <Link href={card.link}>
                <button className="px-5 py-2 border border-white text-white font-semibold rounded-full backdrop-blur-md bg-white/20 shadow-lg hover:bg-white hover:text-gray-900 transition">
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
