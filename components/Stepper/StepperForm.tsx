"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/Stepper/Stepper";

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (!isNaN(pesoNum) && !isNaN(alturaNum) && pesoNum > 0 && alturaNum > 0) {
      return (pesoNum / (alturaNum * alturaNum)).toFixed(2);
    }
    return null;
  };

  const classificarIMC = (imc: number | null) => {
    if (!imc) return "";
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 25) return "Peso normal";
    if (imc >= 25 && imc < 30) return "Sobrepeso";
    if (imc >= 30) return "Obesidade";
    return "";
  };

  const imc = calcularIMC();

  // Valida o passo atual
  const isStepValid = (step: number) => {
    switch (step) {
      case 2: return name.trim() !== "";
      case 3: return idade !== "" && parseInt(idade) > 0;
      case 4: return peso !== "" && parseFloat(peso) > 0;
      case 5: return altura !== "" && parseFloat(altura) > 0;
      case 6: return objetivo !== "";
      case 7: 
        return (
          email.trim() !== "" &&
          /\S+@\S+\.\S+/.test(email) &&
          cidade.trim() !== "" &&
          telefone.trim() !== ""
        );
      default: return true;
    }
  };

  // Mostra alert se tentar avançar sem preencher
  const handleNextStep = () => {
    if (isStepValid(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("Por favor, preencha os dados corretamente antes de continuar.");
    }
  };

  return (
    <Stepper
      initialStep={1}
      onStepChange={setCurrentStep}
      backButtonText="Anterior"
      nextButtonText="Próximo"
      nextButtonProps={{
        disabled: !isStepValid(currentStep),
        className: `duration-350 flex items-center justify-center rounded-full py-1.5 px-3.5 font-medium tracking-tight text-white transition ${
          !isStepValid(currentStep)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 active:bg-green-700"
        }`,
      }}
      canProceed={isStepValid}
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
          placeholder="Digite seu peso"
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
          placeholder="Digite sua altura"
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
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-2 py-1 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          className="border rounded px-2 py-1 w-full mb-2"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </Step>

      <Step>
        <h2>Pronto, {name}!</h2>
        {imc ? (
          <>
            <p>Seu IMC é <strong>{imc}</strong>.</p>
            <p>Classificação: <strong>{classificarIMC(parseFloat(imc))}</strong></p>
          </>
        ) : (
          <p>Preencha peso e altura válidos para calcular o IMC.</p>
        )}
        <p>Obrigado por completar seu perfil.</p>
      </Step>
    </Stepper>
  );
}
