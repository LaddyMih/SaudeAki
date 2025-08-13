import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      
      {/* Título acima do card */}
      <h1 className="text-3xl font-bold text-center">SaúdeAki</h1>

      {/* Card de login */}
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Digite seu email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Seu email" className="border rounded px-2 py-1" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" placeholder="Sua senha" className="border rounded px-2 py-1" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
              Login
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
    

