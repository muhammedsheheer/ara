import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff] pb-8 pt-12 md:pt-24">
      <div className="flex flex-col gap-0 pt-4 md:flex-row">
        <motion.div
          className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-poppins text-3xl font-[400] uppercase text-[#6B4B2B] md:text-4xl">
            the hearts behind
          </h1>
          <p className="w-full max-w-[550px] text-center font-inter text-sm font-[300] uppercase tracking-[1.6px] text-[#817263]">
            At antonietta ’s, we believe every occasion deserves a touch of
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
        <div className="relative flex w-full flex-col md:w-1/2">
          <div className="absolute bottom-2 right-4 md:right-[7%]">
            <div className="relative h-[400px] w-[350px] bg-[#fff] md:h-[550px] md:w-[600px]">
              <div className="absolute -top-24 left-4 right-4 md:left-20 md:right-20">
                <motion.img
                  src={"/images/home/story/cacke.png"}
                  width={281}
                  height={74}
                  alt="cacke"
                  className="h-full w-full md:h-[570px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
          <h1 className="font-sofia_sans text-7xl font-[700] uppercase tracking-[1px] text-[#D0A36C]">
            cakescupcakescupcakeCup
          </h1>
        </div>{" "}
      </div>
    </section>
  );
};

export default Story;
