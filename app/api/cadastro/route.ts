import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Aqui você pode salvar no banco (ex: Prisma, MongoDB, MySQL etc.)
    console.log("Dados recebidos:", body);

    return NextResponse.json(
      { message: "Cadastro realizado com sucesso!", user: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao processar cadastro" },
      { status: 500 }
    );
  }
}
