import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Cartao_Artigos() {
  return (
    <section className="w-full px-6 py-12">
      {/* Título da seção */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Dicas de Saúde e Bem-Estar
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Descubra conteúdos para melhorar seus hábitos e qualidade de vida
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-lg group">
          <Image
            src="/imagens/acordebem.png"
            alt="Mulher dormindo"
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              O que evitar para melhorar o sono
            </h3>
            <p className="text-sm text-gray-200 mb-4">
              Descubra hábitos que atrapalham seu descanso e como substituí-los.
            </p>
            <button className="px-4 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition">
              Veja mais
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-lg group">
          <Image
            src="/imagens/tomandoagua.jpg"
            alt="Mulher tomando água"
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Como criar hábitos saudáveis
            </h3>
            <p className="text-sm text-gray-200 mb-4">
              Pequenas mudanças diárias que fazem grande diferença na saúde.
            </p>
            <button className="px-4 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition">
              Veja mais
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-lg group">
          <Image
            src="/imagens/forte.jpg"
            alt="Mulher forte"
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              5 benefícios de treino funcional
            </h3>
            <p className="text-sm text-gray-200 mb-4">
              Conheça os impactos positivos dessa prática para o corpo e mente.
            </p>
            <button className="px-4 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition">
              Acesse aqui
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
