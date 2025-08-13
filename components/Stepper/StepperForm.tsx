"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/Stepper/Stepper";

export default function StepperForm() {
  const [name, setName] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  // Função para calcular o IMC
  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (pesoNum > 0 && alturaNum > 0) {
      return (pesoNum / (alturaNum * alturaNum)).toFixed(2);
    }
    return null;
  };

  const imc = calcularIMC();

  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => console.log("Step:", step)}
      onFinalStepCompleted={() => console.log("Todos os passos concluídos!")}
      backButtonText="Anterior"
      nextButtonText="Próximo"
    >
      <Step>
        <h2>Seja bem-vindo(a)!</h2>
        <p>Vamos começar a montar seu perfil de saúde.</p>
      </Step>

      <Step>
        <h2>Qual o seu nome?</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="border rounded px-2 py-1"
        />
      </Step>

      <Step>
        <h2>Qual o seu peso?</h2>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso"
            className="border rounded px-2 py-1 w-24"
          />
          <span>kg</span>
        </div>
      </Step>

      <Step>
        <h2>Qual a sua altura?</h2>
        <div className="flex items-center gap-2">
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura"
            className="border rounded px-2 py-1 w-24"
          />
          <span>m</span>
        </div>
      </Step>

      <Step>
        <h2>Pronto, {name}!</h2>
        {imc ? (
          <p>Seu IMC é <strong>{imc}</strong>.</p>
        ) : (
          <p>Por favor, preencha peso e altura válidos para calcular o IMC.</p>
        )}
        <p>Obrigado por completar seu perfil.</p>
      </Step>
    </Stepper>
  );
}
