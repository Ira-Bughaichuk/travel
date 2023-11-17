"use client";

import { useState, useRef, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import { gallery } from '@/utils/Data/GalleryData';
import {GalleryMobile} from './GalleryMobile';
import {GallerySwiperSlide} from './GallerySwiperSlide';
import { GallerySwiperNav } from "./GallerySwiperNav";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./gallery.css";

export default function Gallery() {
  const [swiperReady, setSwiperReady] = useState(false);

  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevBtnRef && nextBtnRef) {
      setSwiperReady(true);
    }
  }, [prevBtnRef, nextBtnRef]);
  return (
    <section id="/gallery" className="w-full  relative z-10 bg-Gallery bg-no-repeat bg-cover bg-center ">
      <div className="container-main">
        <h2 className="mainTitle mb-6 tablet:mb-[65px] tablet:text-center desktop:text-left desktop:mb-[15px]">
          Our<span className="font-medium"> gallery</span>
        </h2>
        <div>
          {/* mobile */}
          <GalleryMobile />

          {/* tablet and desktop */}
          <div className="hidden tablet:block">
            <GallerySwiperNav
            swiperReady={swiperReady}
            prevBtnRef={prevBtnRef}
            nextBtnRef={nextBtnRef}
          />
            <Swiper
               effect={'coverflow'}
               loop
               loopPreventsSliding={false}
               loopedslides={1}
               grabCursor={true}
               wrapperTag="ul"
               centeredSlides={true}
               slidesPerView={2}
               speed={1500}
               coverflowEffect={{
                 rotate: 0,
                 stretch: 0,
                 depth: 200,
                 modifier: 1.32,
                 slideShadows: false,
               }}
               breakpoints={{
                 768: {
                   coverflowEffect: {
                     rotate: 0,
                     stretch: 50,
                     depth: 0,
                     modifier: 1.32,
                     scale: 0.45,
                   },
                 },
                 1280: {
                   coverflowEffect: {
                     rotate: 0,
                     stretch: 120,
                     depth: 0,
                     modifier: 1.32,
                     scale: 0.65,
                   },
                 },
               }}
               navigation={{
                 prevEl: prevBtnRef?.current,
                 nextEl: nextBtnRef?.current,
               }}
               modules={[EffectCoverflow, Navigation]}
              className="h-[294px] desktop:h-[429px] flex justify-center gap-6 relative"
              
            >
              {gallery.map((img) => (
                <SwiperSlide key={img.id} tag="li">
                  {({ isActive }: { isActive: boolean }) => ( <GallerySwiperSlide isActive={isActive} alt={img.alt} img={img.image} /> )} 
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
