import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#fff] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#fff]">
        <h2 className="text-center font-poppins text-5xl text-[#323232] md:left-[15%] md:text-8xl">
          The Ara
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#fff] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-poppins text-5xl text-[#323232] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-inter font-light leading-[160%] text-[#323232] md:text-start">
              What began as a vision—to redefine the dining experience has
              evolved into Ara, a culinary destination where flavors come to
              life. Founded with a deep passion for excellence, Ara was born
              from a desire to craft dishes that are more than just meals—they
              are experiences.
              <br />
              From our humble beginnings to becoming a haven for food lovers,
              our commitment to quality, innovation, and hospitality has never
              wavered. Every ingredient is hand-selected, every dish is prepared
              with precision, and every bite is a celebration of taste.
              <br />
              At Ara, we don’t just serve food—we create unforgettable moments.
              As we continue to grow, our mission remains the same: to blend
              artistry with flavor and offer an extraordinary dining experience
              like no other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
