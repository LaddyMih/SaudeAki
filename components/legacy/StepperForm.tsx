"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/Stepper/Stepper";

export default function StepperForm() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");

  // Função para calcular o IMC
  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Se altura for digitada em centímetros (ex: 170), converte para metros
    const alturaMetros = alturaNum > 10 ? alturaNum / 100 : alturaNum;

    if (!isNaN(pesoNum) && !isNaN(alturaMetros) && pesoNum > 0 && alturaMetros > 0) {
      return (pesoNum / (alturaMetros * alturaMetros)).toFixed(2);
    }
    return "";
  };

  // Função para classificar o IMC
  const classificarIMC = (imc: string) => {
    if (!imc) return "";
    const valor = parseFloat(imc);
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
        <h2>Qual sua idade?</h2>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Digite sua idade"
          className="border rounded px-2 py-1 w-24"
        />
      </Step>

      <Step>
        <h2>Qual o seu peso?</h2>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso em kg"
          className="border rounded px-2 py-1 w-24"
        />
      </Step>

      <Step>
        <h2>Qual a sua altura?</h2>
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura (ex: 1.70 ou 170)"
          className="border rounded px-2 py-1 w-24"
        />
      </Step>

      <Step>
        <h2>Qual o seu objetivo?</h2>
        <select
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        >
          <option value="" disabled>Selecione seu objetivo</option>
          <option value="perder_peso">Perder peso</option>
          <option value="ganhar_musculo">Ganhar músculo</option>
          <option value="manter_peso">Manter peso</option>
          <option value="melhorar_condicao">Melhorar condicionamento físico</option>
          <option value="reduzir_estresse">Reduzir estresse</option>
          <option value="melhorar_saude">Melhorar saúde geral</option>
        </select>
      </Step>

      <Step>
        <h2>Cadastro</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
          className="border rounded px-2 py-1 w-full mb-2"
        />
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Cidade"
          className="border rounded px-2 py-1 w-full mb-2"
        />
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
          className="border rounded px-2 py-1 w-full"
        />
      </Step>

      <Step>
        <h2>Pronto, {name}!</h2>
        {imc ? (
          <>
            <p>Seu IMC é <strong>{imc}</strong>.</p>
            <p>Classificação: <strong>{classificarIMC(imc)}</strong></p>
          </>
        ) : (
          <p>Preencha peso e altura válidos para calcular o IMC.</p>
        )}
        <p>Obrigado por completar seu perfil.</p>
      </Step>
    </Stepper>
  );
}
