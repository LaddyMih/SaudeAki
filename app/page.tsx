"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Cartao from "@/app/Cards/card";
import Cartao_Artigos from "@/app/Cards/cardA";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cartao/>
      <Cartao_Artigos/>
    </div>
  );
}
