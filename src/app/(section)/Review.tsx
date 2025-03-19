"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="md:px-[350px]md:mp-10 relative z-50 flex h-full w-full justify-center bg-[#D0A36C] px-6 2xl:px-[440px]">
      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image
          src={"/images/home/reserve/left.png"}
          width={80}
          height={10}
          alt="image"
          className="h-full w-full"
        />
      </div>
      <div className="absolute bottom-16 right-0 hidden md:block">
        <Image
          src={"/images/home/reserve/right.png"}
          width={80}
          height={10}
          alt="image"
          className="h-full w-full"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-12 md:py-24 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-poppins text-3xl font-[400] uppercase text-[#fff] md:text-4xl">
              listen to hearts{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none"
                  >
                    <div className="flex flex-col gap-6 bg-transparent px-6 pb-4">
                      <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star key={index} className="text-[#fff]" />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="font-cormorant line-clamp-6 max-w-[450px] text-center text-sm font-[500] uppercase text-[#fff] md:px-4 lg:leading-[120%]">
                          {review.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <p className="font-cormorant text-center text-sm font-[600] uppercase leading-[120%] text-[#fff]">
                        Gerrin Tom
                      </p>
                      <p className="font-cormorant text-center text-xs font-[600] uppercase text-[#fff]">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#F7E0C4] text-[#F7E0C4] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#F7E0C4] text-[#F7E0C4] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
