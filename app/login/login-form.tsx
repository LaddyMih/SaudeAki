"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMensagem(data.error || "Erro ao logar");
      return;
    }

    setMensagem("Login realizado!");
    router.push("/"); // redireciona para a home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <h1 className="text-3xl font-bold text-center">SaúdeAki</h1>
      <div className="w-[350px] bg-white p-6 rounded shadow">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border px-2 py-1 rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="border px-2 py-1 rounded"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            Entrar
          </button>
        </form>
        {mensagem && <p className="mt-2 text-center text-red-500">{mensagem}</p>}
      </div>
    </div>
  );
}
