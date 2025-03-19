import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fff]">
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 bg-[lightgray] bg-[url('/images/home/hero/bg.png')] bg-cover bg-[50%] bg-no-repeat text-white">
        <h1 className="font-poppins text-9xl font-[400] uppercase text-[#fff] md:text-[250px]">
          ARA
        </h1>
      </div>
    </section>
  );
};

export default Hero;
