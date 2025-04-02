"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#fff] px-4 pt-2 lg:px-8">
      <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/home/hero/logof.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <h6 className="font-open_sans text-sm font-[700] uppercase tracking-[1.96] text-[#323232]">
                  cONTACT
                </h6>
                <div className="flex flex-col items-center md:items-start">
                  <span>
                    <Link
                      className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
                      target="_blank"
                      href={"https://g.co/kgs/eRnt7dX"}
                    >
                      3 Moncrieffe St, Bolton BL3 <br /> 6AU, United Kingdom
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
                      href={"tel:+07429939565"}
                    >
                      07429 939565
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
                      href={"mailto:moorishl@yahoo.com"}
                    >
                      moorishl@yahoo.com{" "}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4 md:pt-6">
                <Link href={""} target="_blank">
                  <Icons.instagram className="text-[#323232]" />
                </Link>
                <Link href={"https://g.co/kgs/eRnt7dX"} target="_blank">
                  <Icons.google className="text-[#323232]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.facebook className="text-[#323232]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-10 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
              >
                Menu
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
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
                href={"/table-booking"}
                className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-4">
            <h6 className="font-open_sans text-sm font-[700] uppercase tracking-[1.96] text-[#323232] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]">
                  Tuesday
                </span>
                <span className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]">
                  8 AM - 6 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]">
                  Wednesday - Sunday{" "}
                </span>
                <span className="font-open_sans text-xs font-[400] uppercase tracking-[1.6px] text-[#323232]">
                  9 AM - 6 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link
              className="font-open_sans text-xs font-[400] lowercase tracking-[1px] text-[#323131]"
              href={"https://foodo.ai/"}
              target="_blank"
            >
              Powerd by foodo
            </Link>
            <p className="pb-6 font-open_sans text-xs font-[400] lowercase tracking-[1px] text-[#323131]">
              © 2024 Ara ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
