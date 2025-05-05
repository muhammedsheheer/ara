import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-white pt-12 md:pt-24">
      <div className="flex flex-col md:flex-row">
        <div className="relative flex w-full flex-col bg-[#D0A36C] pb-14 md:w-1/2">
          <div className="absolute bottom-0 md:left-20 md:right-20">
            <motion.img
              src="/images/home/menu/cockie.png"
              width={281}
              height={74}
              alt="menu image"
              className="h-full w-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <Image
            src="/images/home/menu/first.png"
            width={281}
            height={74}
            alt="menu image"
            className="h-full w-full md:h-[150px]"
          />
          <Image
            src="/images/home/menu/first.png"
            width={281}
            height={74}
            alt="menu image"
            className="h-full w-full md:h-[150px]"
          />
          <Image
            src="/images/home/menu/first.png"
            width={281}
            height={74}
            alt="menu image"
            className="h-full w-full md:h-[150px]"
          />

          <Image
            src="/images/home/menu/last.png"
            width={281}
            height={74}
            alt="menu image"
            className="h-full w-full md:h-[150px]"
          />
        </div>
        <motion.div
          className="flex w-full flex-col gap-6 px-4 py-8 md:w-1/2 md:px-32 md:py-24"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="font-poppins text-3xl font-[400] uppercase text-[#6B4B2B] md:text-4xl">
              the MENU{" "}
            </h1>
          </div>
          <div className="flex flex-col items-center gap-6 md:items-start md:gap-10 md:pb-4 md:pt-4">
            {[
              {
                name: "Roasted lamb rump",
                price: "£25",
                desc: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
              },
              {
                name: "Pan seared sea bass",
                price: "£38",
                desc: "Saffron and mussel’s broth, new potatoes, edamame beans",
              },
              {
                name: "King prawns and lobster",
                price: "£38",
                desc: "Creamy saffron, sauce Vierge",
              },
              {
                name: "Beef burger meal",
                price: "£32",
                desc: "Classic greek salad, barrel aged feta cheese, bread",
              },
              {
                name: "Roasted lamb rump",
                price: "£25",
                desc: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
              },
            ].map((item, index) => (
              <div key={index} className="flex w-full flex-col gap-1">
                <div className="flex w-full items-center justify-between">
                  <span className="font-open_sans text-base font-normal uppercase tracking-[2px] text-[#323232] md:text-lg">
                    {item.name}
                  </span>
                  <div className="mx-2 flex-1 border-b border-[#323232]"></div>
                  <span className="font-inter text-base font-normal uppercase tracking-[0.57px] text-[#323232] md:text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="font-inter text-sm font-light text-[rgba(0,0,0,0.60)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/menu">
              <Button className="rounded-none bg-[#C0A58A] px-12 py-6 font-open_sans text-xs font-semibold uppercase tracking-[2px] text-white hover:bg-[#e7c9ac]">
                Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
