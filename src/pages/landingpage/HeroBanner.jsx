import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel as BannerCarousel,
  CarouselContent as BannerCarouselContent,
  CarouselItem as BannerCarouselItem,
  CarouselNext as BannerCarouselNext,
  CarouselPrevious as BannerCarouselPrevious,
} from "@/components/ui/banner-carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { CTAButton } from "@/components/CTAButton";

const HeroBanner = () => {
  const banners = [
    {
      bgimage: "/images/frontpage/Banner-bg-2.jpg",
      title: "Gear Collection",
      description:
        "Discover our curated selection of premium golf gear and accessories. From clubs to apparel, we have everything you need to elevate your game.",
      image: "/images/products/FK3-White.png",
      link: "/products",
    },
    {
      bgimage: "/images/frontpage/Banner-bg-1.jpg",
      title: "Our Story",
      description:
        "At Golf Time, we blend tradition with passion, crafting each swing into a masterpiece. Learn more about our journey, our commitment, and our love for the game.",
      image: "/images/GolfTimeLogo.png",
      link: "/about",
    },
    {
      bgimage: "/images/frontpage/Banner-bg-3.jpg",
      title: "Event Updates",
      description:
        "Stay updated on the latest in the world of golf with Golf Time. From exciting tournaments to exclusive events, there's always something happening. Join us and be part of the action.",
      image: "/images/events/MMCL.jpg",
      link: "/events",
    },
  ];

  return (
    <BannerCarousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
        Fade({}),
      ]}
    >
      <BannerCarouselContent>
        {banners.map((banner, index) => (
          <BannerCarouselItem
            key={index}
            style={{ backgroundImage: `url(${banner.bgimage})` }}
            className="bg-cover bg-center"
          >
            <div className="container flex flex-wrap w-full h-full md:p-2 justify-center content-center text-pretty bg-transparent px-5 py-10 ">
              <div className="container text-shadow w-full md:w-1/2 flex flex-wrap content-center text-white lg:justify-start order-2 md:order-1 my-5 md:ps-20 md:pe-0">
                <span className="text-center md:text-start text-2xl md:text-xl lg:text-5xl font-bold my-1 md:my-1 w-full">
                  {banner.title}
                </span>
                <p className="text-base md:text-sm md:leading-7 my-1 text-center md:text-start">
                  {banner.description}
                </p>
                <div className="flex w-full justify-center md:justify-start py-5">
                  <CTAButton toLink={banner.link} label={"learn more"} />
                </div>
              </div>
              <div className="container w-full md:w-1/3 md:p-0 flex flex-wrap content-center justify-center xl:justify-end order-1 xl:order-2">
                <img
                  src={banner.image}
                  alt="Brand Logo"
                  className="w-full max-w-[500px] lg:max-w-auto"
                />
              </div>
            </div>
          </BannerCarouselItem>
        ))}
      </BannerCarouselContent>
      <BannerCarouselPrevious />
      <BannerCarouselNext />
    </BannerCarousel>
  );
};

export default HeroBanner;
