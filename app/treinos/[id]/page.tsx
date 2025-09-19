import Image from "next/image";
import { notFound } from "next/navigation";
import { treinos, Treino, Exercicio } from "../treinos";

interface Props {
  params: { id: string };
}

export default function TreinoDetalhe({ params }: Props) {
  const treino: Treino | undefined = treinos.find(
    (t) => t.id === parseInt(params.id)
  );

  if (!treino) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Nome do treino */}
      <h1 className="text-3xl font-bold mb-4 text-center">{treino.nome}</h1>

      {/* Imagem do treino */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl mb-4">
        <Image
          src={treino.img} // Coloque aqui a imagem do treino
          alt={treino.nome}
          fill
          className="object-cover"
        />
      </div>

      {/* Grupo do treino */}
      <span className="text-indigo-600 font-medium mb-8 block text-center">
        {treino.grupo}
      </span>

      {/* Exercícios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treino.exercicios.map((ex: Exercicio, index) => (
          <div
            key={index}
            className="relative h-[200px] w-full overflow-hidden rounded-2xl shadow-2xl group"
          >
            {/* Imagem do exercício
            <Image src={ex.img} alt={ex.nome} fill className="object-cover" /> */}
            
            {/* Overlay com informações */}
            <div className="absolute inset-0 bg-white flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2 text-black">{ex.nome}</h3>
              <p className="text-sm mb-2 text-black">{ex.descricao}</p>
              <p className="text-sm text-black">
                {ex.series} séries de {ex.repeticoes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
