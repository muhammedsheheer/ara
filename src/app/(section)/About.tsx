import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#F7E0C4] pt-20 md:pt-14">
      <div className="absolute left-0 right-0 top-4 w-full overflow-hidden">
        <p className="font-sofia_sans whitespace-nowrap text-lg font-[400] lowercase tracking-[3px] text-[#323232]">
          &#47;&#47; latte &#47;&#47; Fresh pasta &#47;&#47; cookies &#47;&#47;
          croissants &#47;&#47; latte &#47;&#47; Fresh pasta &#47;&#47; cookies
          &#47;&#47; croissants &#47;&#47; latte &#47;&#47; Fresh pasta pasta
          &#47;&#47; cookies &#47;&#47; croissants &#47;&#47; latte &#47;&#47;
          Fresh pasta croissants &#47;&#47; latte &#47;&#47;
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-4 md:flex-row md:gap-10">
        <div className="flex w-full items-center justify-center bg-[#D0A36C] md:w-[50%]">
          <div className="flex flex-col items-center justify-center gap-4 px-8 py-12 md:px-24 md:py-36">
            <h1 className="font-poppins text-3xl font-[400] uppercase text-[#fff] md:text-4xl">
              the hearts behind
            </h1>
            <p className="w-full max-w-[550px] text-center font-inter text-sm font-[300] uppercase tracking-[1.6px] text-[#fff]">
              At antonietta ’s, we believe every occasion deserves a touch of
              sweetness and every celebration a cake that speaks from the heart.
              Our bakery specializes in creating delectable, handcrafted cakes
              that are as unique as the moments they celebrate. that are as
              unique as the moments they celebrate.
            </p>
            <div className="md:pt-4">
              <Button className="rounded-none bg-[#fff] px-7 py-5 text-center font-open_sans text-sm font-[600] uppercase tracking-[2px] text-[#000] hover:bg-[#C0A58A]">
                <Link href={"/table-booking"}>Reserve</Link>
              </Button>
            </div>
          </div>
        </div>{" "}
        <div className="w-full bg-[#fff] px-4 py-6 md:w-[50%] md:px-14 md:py-14">
          <Image
            src={"/images/home/about/image2.png"}
            width={281}
            height={74}
            alt="image2"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
