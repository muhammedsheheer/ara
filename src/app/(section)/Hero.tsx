"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const text = "ARA";

const Hero: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
      },
    }),
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#fff]"
    >
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 bg-[lightgray] bg-[url('/images/home/hero/bg.png')] bg-cover bg-[50%] bg-no-repeat text-white">
        <h1 className="font-poppins text-9xl font-[400] uppercase text-[#fff] md:text-[250px]">
          {inView &&
            [...text].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
