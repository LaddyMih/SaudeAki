import bcrypt from "bcryptjs";

async function gerarSenha() {
  const senha = "123456"; // senha em texto
  const hash = await bcrypt.hash(senha, 10); // 10 rounds
  console.log("Hash gerado:", hash);
}

gerarSenha();
