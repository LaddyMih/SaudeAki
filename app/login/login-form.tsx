"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState(""); // para mostrar a resposta da API

  // Função que envia os dados para a API
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // impede que a página recarregue

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: senha }),
    });

    const data = await res.json();
    setMensagem(data.message); // mostra a mensagem dentro do card
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <h1 className="text-3xl font-bold text-center">SaúdeAki</h1>

      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Digite seu email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Seu email"
                  className="border rounded px-2 py-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  type="password"
                  placeholder="Sua senha"
                  className="border rounded px-2 py-1"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
              Login
            </button>
          </form>

          {/* Aqui mostramos a mensagem da API */}
          {mensagem && <p className="mt-4 text-center text-green-600">{mensagem}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
