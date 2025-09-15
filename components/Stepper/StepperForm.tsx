"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/Stepper/Stepper";

export default function StepperForm() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
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

  // Função para classificar o IMC
  const classificarIMC = (imc: number | null) => {
    if (!imc) return "";
    const valor = parseFloat(imc.toString());
    if (valor < 18.5) return "Abaixo do peso";
    if (valor >= 18.5 && valor < 25) return "Peso normal";
    if (valor >= 25 && valor < 30) return "Sobrepeso";
    if (valor >= 30) return "Obesidade";
    return "";
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
      {/* Boas-vindas */}
      <Step>
        <h2>Seja bem-vindo(a)!</h2>
        <p>Vamos começar a montar seu perfil de saúde.</p>
      </Step>

      {/* Nome */}
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

      {/* Idade */}
      <Step>
        <h2>Qual sua idade?</h2>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite sua idade"
            className="border rounded px-2 py-1 w-24"
          />
          <span>anos</span>
        </div>
      </Step>

      {/* Peso */}
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

      {/* Altura */}
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

      {/* Objetivo */}
      <Step>
        <h2>Qual o seu objetivo?</h2>
        <select className="border rounded px-2 py-1 w-full" defaultValue="">
          <option value="" disabled>
            Selecione seu objetivo
          </option>
          <option value="perder_peso">Perder peso</option>
          <option value="ganhar_musculo">Ganhar músculo</option>
          <option value="manter_peso">Manter peso</option>
          <option value="melhorar_condicao">Melhorar condicionamento físico</option>
          <option value="reduzir_estresse">Reduzir estresse</option>
          <option value="melhorar_saude">Melhorar saúde geral</option>
        </select>
      </Step>

      {/* Cadastro */}
      <Step>
        <h2>Cadastro</h2>
        <input
          type="email"
          placeholder="Seu email"
          className="border rounded px-2 py-1 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Cidade"
          className="border rounded px-2 py-1 w-full mb-2"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="border rounded px-2 py-1 w-full"
        />
      </Step>

      {/* IMC */}
      <Step>
        <h2>Pronto, {name}!</h2>
        {imc ? (
          <>
            <p>
              Seu IMC é <strong>{imc}</strong>.
            </p>
            <p>
              Classificação: <strong>{classificarIMC(imc)}</strong>
            </p>
          </>
        ) : (
          <p>Por favor, preencha peso e altura válidos para calcular o IMC.</p>
        )}
        <p>Obrigado por completar seu perfil.</p>
      </Step>
    </Stepper>
  );
}
