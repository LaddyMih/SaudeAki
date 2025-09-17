import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "seusegredo";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const [rows]: any = await db.query("SELECT * FROM Usuario WHERE email = ?", [email]);
  const user = rows[0];
  if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 401 });

  const isValid = await bcrypt.compare(password, user.senha);
  if (!isValid) return NextResponse.json({ error: "Senha inválida" }, { status: 401 });

  const token = jwt.sign({ id: user.id, name: user.nome, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

  const cookie = serialize("token", token, { httpOnly: true, path: "/", maxAge: 7 * 24 * 60 * 60 });

  return NextResponse.json({ ok: true }, { headers: { "Set-Cookie": cookie } });
}
