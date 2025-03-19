import Image from "next/image";
import React from "react";

const Products: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7E0C4]">
      <div className="relative z-50 flex h-full w-full flex-col gap-10 px-4 pt-12 md:flex-row md:px-20 md:pt-36">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10">
          <div className="flex flex-col">
            <h1 className="font-sofia_sans text-8xl font-[700] uppercase tracking-[2px] text-[#C0A58A] md:text-[140px]">
              cakescupcakescupccakes
            </h1>
            <h1 className="font-sofia_sans text-8xl font-[700] uppercase tracking-[2px] text-[#C0A58A] md:text-[140px]">
              cakescupcakescupccakes
            </h1>
            <h1 className="font-sofia_sans text-8xl font-[700] uppercase tracking-[2px] text-[#C0A58A] md:text-[140px]">
              cakescupcakescupccakes
            </h1>
            <h1 className="font-sofia_sans text-8xl font-[700] uppercase tracking-[2px] text-[#C0A58A] md:text-[140px]">
              cakescupcakescupccakes
            </h1>
            <h1 className="font-sofia_sans text-8xl font-[700] uppercase tracking-[2px] text-[#C0A58A] md:text-[140px]">
              cakescupcakescupccakes
            </h1>
          </div>
        </div>
        <div className="z-50 flex w-full flex-col items-center justify-center gap-4 bg-[#fff] px-8 pb-8 pt-8 md:w-[33%] md:px-12 md:pb-20 md:pt-12">
          <Image
            src={"/images/home/products/image1.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full"
          />
          <h1 className="font-open_sans text-lg font-[400] uppercase text-[#323232] md:text-xl md:tracking-[7px]">
            breads
          </h1>
        </div>
        <div className="z-50 flex w-full flex-col items-center justify-center gap-4 bg-[#fff] px-8 pb-8 pt-8 md:w-[33%] md:px-12 md:pb-20 md:pt-12">
          <Image
            src={"/images/home/products/image2.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full"
          />
          <h1 className="font-open_sans text-lg font-[400] uppercase text-[#323232] md:text-xl md:tracking-[7px]">
            breads
          </h1>
        </div>
        <div className="z-50 flex w-full flex-col items-center justify-center gap-4 bg-[#fff] px-8 pb-8 pt-8 md:w-[33%] md:px-12 md:pb-20 md:pt-12">
          <Image
            src={"/images/home/products/image3.png"}
            width={281}
            height={74}
            alt="image"
            className="h-auto w-full"
          />
          <h1 className="font-open_sans text-lg font-[400] uppercase text-[#323232] md:text-xl md:tracking-[7px]">
            breads
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Products;
