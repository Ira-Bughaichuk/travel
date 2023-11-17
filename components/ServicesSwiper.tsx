"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./slider.css";

import { contextSlider } from "@/utils/Data/ServicesData";
import { ServicesSlide } from "./ServicesSlide";

export default function ServicesSwiper() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index, 500);
    }
  };
 
  return (
    <Swiper
        className="w-full h-full relative"
        ref={swiperRef}
        pagination={{ type: "fraction" }}
        effect={"fade"}
        grabCursor={false}
        slidesPerView={1}
        modules={[EffectFade]}
      >
        {contextSlider.map((itemSlide, index) => (
          <SwiperSlide key={itemSlide.id} className="swiper-slide-gallery">
            <ServicesSlide handleSlideClick={handleSlideClick} src={itemSlide.bgImage} srcImg={itemSlide.slideImage} index={index} subTitle={itemSlide.subTitle} title={itemSlide.title} description={itemSlide.description}/>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

// w-[218px] h-[213px] tablet:w-[463px] tablet:h-[370px] desktop:w-[608px] desktop:h-[434px]"> 
  

 