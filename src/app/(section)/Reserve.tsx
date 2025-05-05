import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#F7E0C4] pt-12 md:h-[80vh]">
      {/*mobile screen */}
      <div className="flex flex-col md:hidden">
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-poppins text-3xl font-[400] uppercase text-[#6B4B2B] md:text-4xl">
            RESERVE YOUR TABLE{" "}
          </h1>
          <p className="w-full max-w-[550px] text-center font-inter text-sm font-[300] uppercase tracking-[1.6px] text-[#323232]">
            At Antonita’s, we believe every occasion deserves a touch of
            sweetness and every celebration a cake that speaks from the heart.
            Our bakery specializes in creating delectable, handcrafted cakes
            that are as unique as the moments they celebrate.
          </p>
          <div className="md:pt-4">
            <Button className="rounded-none bg-[#C0A58A] px-7 py-5 text-center font-open_sans text-sm font-[600] uppercase tracking-[2px] text-[#fff] hover:bg-[#e7c9ac]">
              <Link href={"/table-booking"}>Reserve</Link>
            </Button>
          </div>
        </motion.div>
        <div>
          <motion.img
            src={"/images/home/reserve/image.png"}
            width={80}
            height={10}
            alt="image"
            className="h-[450px] w-[350px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
      {/*big screen */}
      <div className="absolute -top-28 left-0 z-50 hidden md:block">
        <motion.img
          src={"/images/home/reserve/image.png"}
          width={80}
          height={10}
          alt="image"
          className="h-[800px] w-[600px]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="absolute bottom-16 right-8 hidden md:block">
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-poppins text-3xl font-[400] uppercase text-[#6B4B2B] md:text-4xl">
            RESERVE YOUR TABLE{" "}
          </h1>
          <p className="w-full max-w-[550px] text-center font-inter text-sm font-[300] uppercase tracking-[1.6px] text-[#323232]">
            At Antonita’s, we believe every occasion deserves a touch of
            sweetness and every celebration a cake that speaks from the heart.
            Our bakery specializes in creating delectable, handcrafted cakes
            that are as unique as the moments they celebrate.
          </p>
          <div className="md:pt-4">
            <Button className="rounded-none bg-[#C0A58A] px-7 py-5 text-center font-open_sans text-sm font-[600] uppercase tracking-[2px] text-[#fff] hover:bg-[#e7c9ac]">
              <Link href={"/table-booking"}>Reserve</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute -left-16 -top-7 z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakes
        </h1>
      </div>
      <div className="absolute -left-20 top-[6%] z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakessug
        </h1>
      </div>
      <div className="absolute -left-24 top-[24%] z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakessugar
        </h1>
      </div>
      <div className="absolute -left-20 top-[26%] z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakessugarcake
        </h1>
      </div>
      <div className="absolute -left-20 top-[28%] z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakessugarcakesuga
        </h1>
      </div>
      <div className="absolute -left-20 top-[30%] z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakessugarcakesugacake
        </h1>
      </div>
      <div className="absolute -left-20 top-[38%] z-20 hidden -rotate-45 flex-col overflow-hidden md:flex">
        <h1 className="font-sofia_sans text-[140px] font-[700] uppercase tracking-[2px] text-[#fff]">
          cakessugarcakesugacakesug
        </h1>
      </div>
    </section>
  );
};

export default Reserve;
