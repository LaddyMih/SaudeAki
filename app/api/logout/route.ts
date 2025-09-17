import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("token", "", { maxAge: -1, path: "/" });
  return NextResponse.json({ ok: true }, { headers: { "Set-Cookie": cookie } });
}
