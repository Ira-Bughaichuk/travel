"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./slider.css";


const contextSlider = [
  {
    title: "ATVs Traveling",
    subTitle: "Feel the adrenaline rush",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    bgImage: "/assets/images/services-desc01.jpg",
    slideImage: "/assets/images/services-slide01.jpg",
    id: 1,
  },
  {
    title: "Rock climbing",
    subTitle: "Destroy your limitations",
    description:
      "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
    bgImage: "/assets/images/services-desc02.jpg",
    slideImage: "/assets/images/services-slide02.jpg",
    id: 2,
  },
  {
    title: "Hot air ballooning",
    subTitle: "Get inspired",
    description:
      "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
    bgImage: "/assets/images/services-desc03.jpg",
    slideImage: "/assets/images/services-slide03.jpg",
    id: 3,
  },
  {
    title: "Skydiving",
    subTitle: "Overcome your fears",
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    bgImage: "/assets/images/services-desc04.jpg",
    slideImage: "/assets/images/services-slide04.jpg",
    id: 4,
  },
  {
    title: "Rafting",
    subTitle: "Trust the flow",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    bgImage: "/assets/images/services-desc05.jpg",
    slideImage: "/assets/images/services-slide05.jpg",
    id: 5,
  },
];

export default function Slider() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index, 500);
    }
  };
  return (
    <>
      <Swiper
        className="w-full h-full relative"
        ref={swiperRef}
        pagination={{ type: "fraction" }}
        effect={"fade"}
        grabCursor={true}
        navigation={true}
        slidesPerView={1}
        modules={[EffectFade]}
      >
        {contextSlider.map((itemSlide, index) => (
          <SwiperSlide key={itemSlide.id} className="swiper-slide-gallery">
            <div
              style={{
                background: `url(${itemSlide.bgImage}) center/cover no-repeat `,
                height: "100%",
              }}
            >
              <div className="text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]">
                <div className="flex flex-col tablet:flex-row tablet:gap-x-5 ">
                  <div className="tablet:flex desktop:flex-1 tablet:flex-col tablet:gap-y-10 desktop:gap-y-5 tablet:w-3/5 desktop:w-2/5">
                    <h2 className="mainTitle">
                      WE <span className="font-medium">OFFER</span>
                    </h2>
                    <p className="tablet:hidden text-right mb-2 mt-6 not-italic font-thin leading-[1] text-L">
                      0{index + 1}/<span className="text-secondary">05</span>
                    </p>
                    <Image
                      src={itemSlide.slideImage}
                      alt="ATVs Traveling"
                      width={280}
                      height={213}
                      className="swiper-slide"
                    />
                    <p className="tablet:hidden text-right mb-6 mt-1 text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">
                      {itemSlide.subTitle}
                    </p>
                  </div>

                  <div className=" desktop:flex-1 tablet:w-2/5 desktop:w-3/5 flex flex-col desktop:flex-row desktop:gap-x-15">
                    <div className="flex flex-col mb-[34px]  tablet:mb-[25px] desktop:mb-6  tablet:gap-y-10 desktop:gap-y-5">
                      <p className="hidden tablet:block not-italic font-thin leading-[1] text-L tablet:text-xl tablet:leading-[78px] desktop:leading-[1] desktop:text-xxl">
                        0{index + 1}/<span className="text-secondary">05</span>
                      </p>
                      <ul className="flex flex-col gap-y-4 desktop:gap-y-6 ">
                        {"ATVs Traveling" === itemSlide.title ? (
                          <li className="font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px]">
                              ATVs Traveling
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {itemSlide.subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="slideText"
                            onClick={() => handleSlideClick(0)}
                          >
                            ATVs Traveling
                          </li>
                        )}

                        {"Rock climbing" === itemSlide.title ? (
                          <li className="font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px]">
                              Rock climbing
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {itemSlide.subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="slideText"
                            onClick={() => handleSlideClick(1)}
                          >
                            Rock climbing
                          </li>
                        )}

                        {"Hot air ballooning" === itemSlide.title ? (
                          <li className="font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px]">
                              Hot air ballooning
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {itemSlide.subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="slideText"
                            onClick={() => handleSlideClick(2)}
                          >
                            Hot air ballooning
                          </li>
                        )}

                        {"Skydiving" === itemSlide.title ? (
                          <li className="font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px]">
                              Skydiving
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {itemSlide.subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="slideText"
                            onClick={() => handleSlideClick(3)}
                          >
                            Skydiving
                          </li>
                        )}

                        {"Rafting" === itemSlide.title ? (
                          <li className="font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[220px]">
                              Rafting
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {itemSlide.subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="slideText"
                            onClick={() => handleSlideClick(4)}
                          >
                            Rafting
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="desktop:flex desktop:flex-col desktop:self-end">
                      <p className="hidden  laptop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">
                        {itemSlide.subTitle}
                      </p>
                      <p className="text tablet:text-[13px] tablet:w-[221px] desktop:w-[293px]">
                        {itemSlide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
