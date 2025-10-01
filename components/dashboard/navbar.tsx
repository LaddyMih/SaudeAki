"use client";

import { UserButton } from "@/components/dashboard/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounred-xl w-[600px] shadow-sm mt-2 rounded-xl border shadow-sm text-card-foreground">
      <div className="flex gap-x-2">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
