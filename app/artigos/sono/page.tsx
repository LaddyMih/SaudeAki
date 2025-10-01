"use client";

import Link from "next/link";

export default function ArtigoMelhorarSono() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Faixa cinza com título */}
      <section className="w-full bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            O que evitar para melhorar o sono
          </h1>
          <p className="mt-4 text-gray-200 text-lg md:text-xl">
            Descubra hábitos que atrapalham seu descanso e como substituí-los
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-12">
        {/* Introdução */}
        <div className="prose prose-lg text-gray-800 mx-auto">
          <p>
            Dormir bem é fundamental para a saúde física e mental. A privação de sono está associada
            a aumento do risco de doenças cardíacas, diabetes, obesidade e declínio cognitivo.
            Um estudo da <strong>National Sleep Foundation (2023)</strong> mostrou que adultos que dormem
            menos de 6 horas por noite têm maior probabilidade de apresentar hipertensão e estresse crônico.
          </p>
          <p>
            Dra. Ana Costa, especialista em medicina do sono, afirma: 
            <em> "Uma rotina regular e um ambiente tranquilo são fundamentais para garantir uma noite de sono reparadora."</em>
          </p>
        </div>

        {/* Hábitos que atrapalham */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🚫 Hábitos que prejudicam o sono</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uso excessivo de telas antes de dormir (celular, TV, computador)</li>
            <li>Consumo de cafeína ou bebidas estimulantes à noite</li>
            <li>Refeições pesadas próximas à hora de dormir</li>
            <li>Exposição a luz intensa ou barulho no ambiente</li>
            <li>Irregularidade nos horários de sono</li>
          </ul>
          <p className="text-gray-600 italic">
            Fonte: <strong>National Sleep Foundation, 2023</strong>
          </p>
        </div>

        {/* Como substituir */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">🌙 Como substituir hábitos ruins</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Estabeleça uma rotina regular de sono, incluindo fins de semana</li>
            <li>Desconecte-se de telas pelo menos 60 minutos antes de dormir</li>
            <li>Opte por refeições leves à noite</li>
            <li>Crie um ambiente escuro, silencioso e fresco</li>
            <li>Pratique técnicas de relaxamento, como meditação ou respiração profunda</li>
          </ul>
          <p className="text-gray-600 italic">
            Dra. Mariana Silva, especialista em medicina do sono: 
            <em> "Pequenas mudanças na rotina podem melhorar a qualidade do sono em poucas semanas."</em>
          </p>
        </div>

        {/* Erros comuns */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">⚠️ Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Acreditar que é possível “compensar” o sono perdido nos finais de semana</li>
            <li>Tomar café ou bebidas energéticas à noite para recuperar disposição</li>
            <li>Expor-se à luz intensa antes de dormir</li>
          </ul>
        </div>

        {/* Curiosidades / Recursos extras */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">💡 Curiosidades</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Ouvir música relaxante por 15 minutos pode melhorar a qualidade do sono.</li>
            <li>Temperatura ideal para dormir: 18-22°C.</li>
            <li>A luz azul dos dispositivos eletrônicos reduz a produção de melatonina em até 30%.</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">✅ Conclusão</h2>
          <p className="text-gray-700">
            Criar um ambiente propício e evitar hábitos prejudiciais é a chave para uma boa noite de sono.
            A implementação de pequenas mudanças pode trazer grandes benefícios para a saúde física e mental.
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
