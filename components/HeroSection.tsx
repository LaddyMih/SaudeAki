import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div>
    <section className="flex flex-col items-center justify-center min-h-screen pt-[120px]">
      <h1 className="text-4xl font-bold text-center mb-4">
        Bem-vindo ao Saúde Aki
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Aqui você encontra treinos, artigos e dicas para melhorar sua saúde.
      </p>
    
    
    <Link href="/cadastro" passHref>
          <Button
            className={cn(
              "text-white bg-black w-[10rem] font-normal",
              "transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer mt-[10px]"
            )}
          >
            Comece Agora
          </Button>
        </Link>
        </section>
        </div>
    
  );
}
