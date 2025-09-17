import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { parse } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "seusegredo";

export async function GET(req: NextRequest) {
  const cookies = parse(req.headers.get("cookie") || "");
  const token = cookies.token;

  if (!token) return NextResponse.json({ user: null });

  try {
    const user = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
