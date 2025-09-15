// Criando os cards da página inicial
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { titleFont } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Cartao() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {/* Card 1 */}
      <Card className="relative h-150 w-100 flex flex-col justify-center items-center text-white overflow-hidden bg-transparent transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:backdrop-blur-sm">
        <Image
          src="/imagens/treino.jpg"
          alt="Treine como nunca"
          fill
          className="absolute inset-0 object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 -z-10"></div>

        {/* Conteúdo centralizado */}
        <div className="flex flex-col items-center justify-center text-center z-10">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-center text-2xl">
              Treino personalizado
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Planos de exercícios adaptados para você
          </CardContent>
        </div>
      </Card>

      {/* Card 2 */}
      <Card className="relative h-150 w-100 flex flex-col justify-center items-center text-white overflow-hidden bg-transparent transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:backdrop-blur-sm">
        <Image
          src="/imagens/Alimentação.jpg"
          alt="Planos alimentares"
          fill
          className="absolute inset-0 object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 -z-10"></div>

        <div className="flex flex-col items-center justify-center text-center z-10">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-center text-2xl">
              Planos alimentares
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Dicas de dieta para uma alimentação saudável
          </CardContent>
        </div>
      </Card>

      {/* Card 3 */}
      <Card className="relative h-150 w-100 flex flex-col justify-center items-center text-white overflow-hidden bg-transparent transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:backdrop-blur-sm">
        <Image
          src="/imagens/Monitoramento.jpg"
          alt="Monitoramento"
          fill
          className="absolute inset-0 object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 -z-10"></div>

        <div className="flex flex-col items-center justify-center text-center z-10">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-center text-2xl">
              Monitoramento
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Acompanhe seu progresso e resultados
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

