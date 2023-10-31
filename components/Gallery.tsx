"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./gallery.css";

const gallery = [
  {
    image: "/assets/images/gallery-slide1.jpg",
    alt: "slide1",
    id: "1",
  },
  {
    image: "/assets/images/gallery-slide2.jpg",
    alt: "slide2",
    id: "2",
  },
  {
    image: "/assets/images/gallery-slide3.jpg",
    alt: "slide3",
    id: "3",
  },
  {
    image: "/assets/images/gallery-slide1.jpg",
    alt: "slide4",
    id: "4",
  },
  {
    image: "/assets/images/gallery-slide2.jpg",
    alt: "slide5",
    id: "5",
  },
  {
    image: "/assets/images/gallery-slide3.jpg",
    alt: "slide6",
    id: "6",
  },
];

const carouselSettings = {
  spaceBetween: 20,
  modules: [EffectCoverflow, Navigation, A11y],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { clickable: true },
  grabCursor: true,
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  effect: "coverflow",
  loopPreventsSliding: false,
  loopedslides: 1,
  wrapperTag: "ul",
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1.32,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 0,
        modifier: 1.32,
        scale: 0.45,
      },
    },
    1440: {
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 0,
        modifier: 1.32,
        scale: 0.65,
      },
    },
  },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-Gallery bg-no-repeat bg-cover bg-center text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]"
    >
      <h2 className="mainTitle mb-6 tablet:mb-[65px] tablet:text-center desktop:text-left desktop:mb-[15px]">
        Our<span className="font-medium"> gallery</span>
      </h2>
      <div>
        <ul className="flex flex-col justify-center items-center tablet:hidden">
          {gallery.slice(3).map((img) => (
            <li key={img.id}>
              <Image
                src={img.image}
                alt={img.alt}
                width={280}
                height={187}
                className="mt-8 "
              />
            </li>
          ))}
        </ul>
        <div className="hidden tablet:block tablet:relative">
          <Swiper
            {...carouselSettings}
            className="h-[294px] desktop:h-[429px] flex justify-center gap-6 relative"
          >
            {gallery.map((img) => (
              <SwiperSlide key={img.id} tag="li">
                {({ isActive }) => (
                  <div
                    className={`relative right-8 desktop:right-[-12px] w-[415px] desktop:w-[606px] h-[294px] desktop:h-[429px] 
      ${isActive ? "desktop:right-[-10px]" : "opacity-75"}`}
                  >
                    <Image
                      width={606}
                      height={429}
                      src={img.image}
                      alt={img.alt}
                      loading="lazy"
                      sizes="(max-width: 767px) 280px, (max-width: 1279px) 415px, 606px"
                      className="w-[280px] h-[187px] tablet:w-[415px] tablet:h-[294px] desktop:w-[606px] desktop:h-[429px] object-cover"
                    />
                    <div
                      className={`absolute top-0 bottom-0 left-0 right-0 
            transition-opacity ease-in duration-300  bg-zinc-950/80
            ${isActive ? "opacity-0" : "opacity-100"}`}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev">BACK</button>
          <button className="swiper-button-next">NEXT</button>
        </div>
      </div>
    </section>
  );
}
