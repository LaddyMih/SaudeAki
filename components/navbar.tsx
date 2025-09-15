//  abrir a porta para o next npm run dev
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { titleFont } from "@/fonts/fonts";
export default function Navbar () {
    return (
        // Cabeçalho fixed (fixado)
        <nav className="fixed top-0 left-0 right-0 mx-[0.25rem] bg-white border-2 lg:border-0 lg:bg-white border-solid rounded-lg flex items-center justify-between px-4">
      {/* Esquerda */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-black text-center no-underline font-bold hover:text-slate-500 transition-colors duration-200 ease-in-out"
        >
          Saúde Aki
        </Link>
      </div>

      {/* Centro e fonte */}
      <div className={cn(titleFont.className,"flex justify-center items-center gap-10")}>
        
        <Link href="/" className="text-black text-center no-underline font-bold hover:text-slate-500 transition-colors duration-200 ease-in-out">Início</Link>
        <Link href="/Cards/card" className="text-black text-center no-underline font-bold hover:text-slate-500 transition-colors duration-200 ease-in-out">Treinos</Link>
        <Link href="/" className="text-black text-center no-underline font-bold hover:text-slate-500 transition-colors duration-200 ease-in-out">Artigos</Link>
       
      </div>

      {/* Direita */}
      <div>
        <Link href="/login" passHref>
          <Button
            className={cn(
              "text-white bg-black w-[10rem] font-normal",
              "transition-transform duration-150 ease-in-out active:scale-95 hover:cursor-pointer mt-[10px]"
            )}
          >
            Login
          </Button>
        </Link>
        
      </div>
    </nav>
    )

}