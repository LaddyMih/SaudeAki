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
        <div className="prose prose-lg text-gray-800 mx-auto">
          <p>
            Criar hábitos saudáveis é essencial para prevenir doenças, melhorar o bem-estar e aumentar a longevidade. 
            Estudos recentes mostram que mudanças consistentes, mesmo pequenas, têm efeitos significativos na saúde física e mental.
          </p>
          <p>
            Dr. João Silva, especialista em medicina preventiva: 
            <em> "Estabelecer metas realistas e alcançáveis é crucial para a formação de hábitos duradouros."</em>
          </p>
        </div>

        {/* Exercício físico */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🏃‍♂️ Exercício físico</h2>
          <p className="text-gray-700">
            A prática regular de atividades físicas reduz o risco de doenças cardiovasculares e metabólicas. 
            Um estudo da <strong>American Heart Association (2022)</strong> indica que 150 minutos de exercício moderado por semana já traz benefícios significativos.
          </p>
          <p className="text-gray-600 italic">
            Dra. Maria Oliveira, nutricionista comportamental: 
            <em> "A consistência é mais importante que a intensidade. Pequenas ações diárias levam a grandes resultados."</em>
          </p>
        </div>

        {/* Alimentação saudável */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🥗 Alimentação equilibrada</h2>
          <p className="text-gray-700">
            Dietas ricas em frutas, vegetais, grãos integrais e proteínas magras ajudam a reduzir o risco de obesidade, hipertensão e diabetes.
            <strong> Harvard School of Public Health (2023)</strong> recomenda priorizar alimentos naturais e evitar processados.
          </p>
          <p className="text-gray-600 italic">
            Dr. Carlos Pereira, nutricionista clínico: 
            <em> "Planejar refeições e manter consistência é mais importante do que seguir dietas radicais."</em>
          </p>
        </div>

        {/* Sono e rotina */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🌙 Sono e rotina</h2>
          <p className="text-gray-700">
            Dormir de 7 a 9 horas por noite é essencial para recuperação física, memória e regulação hormonal.
            Um estudo da <strong>National Sleep Foundation (2023)</strong> mostra que adultos com rotina regular de sono têm menor risco de ansiedade e depressão.
          </p>
        </div>

        {/* Erros comuns */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">⚠️ Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Esperar mudanças rápidas sem consistência</li>
            <li>Focar apenas em dietas radicais ou exercícios intensos</li>
            <li>Ignorar o sono e a hidratação diária</li>
          </ul>
        </div>

        {/* Dicas práticas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">💡 Dicas práticas</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Estabeleça metas pequenas e alcançáveis</li>
            <li>Mantenha um diário de hábitos para acompanhar progresso</li>
            <li>Use lembretes visuais ou aplicativos de saúde</li>
            <li>Busque apoio social, como grupos de caminhada ou desafios</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">✅ Conclusão</h2>
          <p className="text-gray-700">
            Criar hábitos saudáveis exige consistência, paciência e estratégias práticas. 
            Pequenas mudanças na rotina diária podem gerar grandes impactos na saúde e bem-estar ao longo do tempo.
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
