"use client";

import Link from "next/link";

export default function ArtigoHabitosSaudaveis() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Faixa cinza com título */}
      <section className="w-full bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Como criar hábitos saudáveis
          </h1>
          <p className="mt-4 text-gray-200 text-lg md:text-xl">
            Pequenas mudanças diárias que fazem grande diferença na saúde
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-12">
        {/* Introdução */}
        <div className="prose prose-lg text-gray-800 mx-auto">
          <p>
            Criar hábitos saudáveis é essencial para melhorar a qualidade de vida e prevenir doenças.
            Estudos da <strong>World Health Organization (WHO, 2023)</strong> indicam que mudanças simples
            nos hábitos diários podem reduzir significativamente o risco de doenças crônicas.
          </p>
          <p>
            Dr. João Silva, especialista em medicina preventiva: 
            <em> "Estabelecer metas realistas e alcançáveis é crucial para a formação de hábitos duradouros."</em>
          </p>
        </div>

        {/* Exercícios físicos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🏃‍♂️ Exercícios físicos</h2>
          <p className="text-gray-700">
            A prática regular de atividades físicas melhora a força, flexibilidade, humor e reduz o risco de doenças crônicas.
            Um estudo publicado no <strong>Journal of Sports Medicine (2022)</strong> mostrou que 30 minutos de exercício
            diário já trazem benefícios significativos.
          </p>
        </div>

        {/* Alimentação equilibrada */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🥗 Alimentação equilibrada</h2>
          <p className="text-gray-700">
            Dietas ricas em frutas, vegetais, proteínas magras e grãos integrais ajudam a manter o peso saudável,
            fortalecer o sistema imunológico e prevenir doenças. Dra. Maria Oliveira, nutricionista comportamental:
            <em> "A consistência é mais importante que a intensidade. Pequenas ações diárias levam a grandes resultados."</em>
          </p>
        </div>

        {/* Sono adequado */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🌙 Sono adequado</h2>
          <p className="text-gray-700">
            Dormir entre 7 a 9 horas por noite melhora a recuperação física, desempenho cognitivo e saúde mental.
            Um estudo da <strong>National Sleep Foundation (2023)</strong> mostrou que sono insuficiente aumenta o risco de obesidade e estresse.
          </p>
        </div>

        {/* Erros comuns */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">⚠️ Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Achar que grandes mudanças rápidas funcionam melhor que ajustes graduais</li>
            <li>Ignorar sinais de cansaço e exaustão</li>
            <li>Não planejar ou registrar hábitos para manter consistência</li>
          </ul>
        </div>

        {/* Curiosidades */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">💡 Curiosidades</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Estudos mostram que criar hábitos na mesma hora do dia aumenta a adesão em até 50%</li>
            <li>Aplicativos de acompanhamento podem melhorar a motivação e consistência</li>
            <li>Ter apoio social reforça os hábitos saudáveis</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">✅ Conclusão</h2>
          <p className="text-gray-700">
            Pequenas mudanças consistentes em exercícios, alimentação e sono trazem benefícios duradouros.
            Estabelecer metas realistas, monitorar progresso e contar com apoio social aumenta a chance de sucesso.
          </p>
        </div>

        {/* Botão voltar */}
        <div className="flex justify-center mt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
