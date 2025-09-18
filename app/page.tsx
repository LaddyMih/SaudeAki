"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Cartao from "@/components/legacy/Cards/card";
import Cartao_Artigos from "@/components/legacy/Cards/cardA";

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
