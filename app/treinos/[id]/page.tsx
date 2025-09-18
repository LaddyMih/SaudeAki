import Image from "next/image";
import { notFound } from "next/navigation";
import { treinos, Treino, Exercicio } from "../treinos";

interface Props {
  params: { id: string };
}

export default function TreinoDetalhe({ params }: Props) {
  const treino: Treino | undefined = treinos.find(t => t.id === parseInt(params.id));
  if (!treino) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{treino.nome}</h1>
      <span className="text-indigo-600 font-medium mb-8 block text-center">{treino.grupo}</span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treino.exercicios.map((ex: Exercicio, index) => (
          <div key={index} className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl group">
            <Image src={ex.img} alt={ex.nome} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{ex.nome}</h3>
              <p className="text-sm mb-2">{ex.descricao}</p>
              <p className="text-sm">{ex.series} séries de {ex.repeticoes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
