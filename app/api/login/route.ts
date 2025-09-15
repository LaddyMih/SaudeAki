import { NextRequest, NextResponse } from "next/server";

// "Banco de dados" temporário (só para testes)
let users: { email: string; password: string }[] = [];

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email e senha são obrigatórios" },
      { status: 400 }
    );
  }

  const user = users.find(u => u.email === email);

  if (!user) {
    users.push({ email, password });
    return NextResponse.json({ message: "Usuário criado com sucesso" }, { status: 201 });
  } else {
    if (user.password !== password) {
      return NextResponse.json({ message: "Senha incorreta" }, { status: 401 });
    }
    return NextResponse.json({ message: "Login realizado com sucesso" }, { status: 200 });
  }
}