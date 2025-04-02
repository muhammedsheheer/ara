"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const logoSrc =
  //   pathname === "/"
  //     ? "/images/home/hero/logo.png"
  //     : "/images/home/hero/logof.png";

  const logoSrc =
    pathname === "/"
      ? "/images/home/hero/logo.png"
      : pathname === "/menu"
        ? "/images/home/hero/logo.png"
        : "/images/home/hero/logof.png";

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-2 md:pt-4`,
        pathname === "/" ? "bg-transparent" : "pt-1 md:pt-2",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-12">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={logoSrc}
                width={281}
                height={74}
                alt="logo"
                className="w-28"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-8">
            <Link
              href={"/"}
              className={`font-open_sans text-xs font-[400] uppercase tracking-[1.6px] ${
                pathname === "/menu" ? "text-[#fff]" : "text-[#323232]"
              }`}
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={`font-open_sans text-xs font-[400] uppercase tracking-[1.6px] ${
                pathname === "/menu" ? "text-[#fff]" : "text-[#323232]"
              }`}
            >
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className={`font-open_sans text-xs font-[400] uppercase tracking-[1.6px] ${
                pathname === "/menu" ? "text-[#fff]" : "text-[#323232]"
              }`}
            >
              About
            </Link>

            {/* <Link
              href={""}
              className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
            >
              Products
            </Link> */}
            <Link
              href={"/contact"}
              className={`font-open_sans text-xs font-[400] uppercase tracking-[1.6px] ${
                pathname === "/menu" ? "text-[#fff]" : "text-[#323232]"
              }`}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-end justify-end">
            <Link href={"/table-booking"}>
              <Button
                className={
                  pathname === "/"
                    ? "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2px] text-[#000] hover:bg-[#C0A58A] hover:text-[#fff]"
                    : "rounded-none border border-[#000] bg-[#000] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2px] text-[#fff] hover:bg-[#C0A58A] hover:text-[#fff]"
                }
              >
                Reserve
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={logoSrc}
                width={281}
                height={74}
                alt="logo"
                className="w-24"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#000]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
