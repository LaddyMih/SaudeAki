// navbar da dashboard

"use client";

import { UserButton } from "@/components/dashboard/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounred-xl w-[600px] shadow-sm">
            <div className="flex gap-x-2">
            <Button asChild variant={pathname === "/server" ? "default" : "outline"}>
                    <Link href="/server">Server</Link>

                </Button>
                <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
                    <Link href="/">Ínicio</Link>

                </Button>
                <Button asChild variant={pathname === "/client" ? "default" : "outline"}>
                    <Link href="/dashboard">Editar Perfil</Link>
                </Button>
                <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
                    <Link href="/admin">Admin</Link>

                </Button>
            </div>
            <UserButton />
        </nav>
    );
}
