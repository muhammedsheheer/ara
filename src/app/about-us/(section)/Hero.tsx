import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#fff] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="max-w-[500px] font-poppins text-5xl font-semibold text-[#323232] md:leading-[66px] lg:text-6xl">
                Welcome to Ara A Symphony of Flavors
              </h1>
              <p className="font-manrope font-inter font-normal text-[#323232]">
                At Ara, every dish is a masterpiece, crafted with passion and
                precision. From handpicked ingredients to expertly curated
                recipes, we bring you a dining experience that blends artistry
                with flavor. Whether you’re savoring a signature entrée or
                indulging in a decadent treat, each bite tells a story of
                quality, innovation, and culinary excellence.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/image1.jpeg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
