"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Cartao from "@/app/Cards/card";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cartao/>
    </div>
  );
}
