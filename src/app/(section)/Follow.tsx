import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#ffff] px-4 py-12 md:px-[50px] lg:py-24 2xl:px-[100px]">
      <div className="flex flex-col gap-5">
        <div className="mb-6 flex flex-col items-center justify-center gap-2 md:mb-14">
          <h1 className="font-poppins text-3xl font-[400] uppercase text-[#6B4B2B] md:text-4xl">
            SCROLL OUR STORIES{" "}
          </h1>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-20"
              />
              <Link
                href={""}
                target="_blank"
                className="text-center font-poppins text-lg font-[400] lowercase text-[#D0A36C] lg:text-xl"
              >
                @ara.brasserie
              </Link>
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center lg:w-[25%]">
              {" "}
              <h3 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#D0A36C]">
                Ara SALAD
              </h3>
            </div>
            <div className="w-full lg:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>

            <div className="flex w-full items-center justify-center lg:w-[25%]">
              {" "}
              <h3 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#D0A36C]">
                Ara SALAD
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
