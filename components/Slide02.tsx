"use client";
import { useSwiperSlide } from 'swiper/react';
import Image from 'next/image'
import ServTwo from "../public/assets/images/services-slide02.jpg";

type ISlideProps = {
  itemSlide : {
    title: string;
    subTitle: string;
    description: string;
    //bgImage: string;
    slideImage: string;
    id: number;
  };


}
export default function Slide02({itemSlide }:ISlideProps) {
  //const { isActive: slideIsActive, onClick: slideOnClick } = useSwiperSlide();
// const x= useSwiperSlide();
// console.log("xinf",x);

  // Перевірте, чи цей слайд є активним і обробник події натискання
  const handleSlideClick = () => {
    // Ось ваш власний код обробника події натискання
    // onClick(itemSlide);
    console.log("click");
    
    // Викликайте оригінальний обробник події з useSwiperSlide
    //slideOnClick();
  };
  return (
    <>
    <div className="bg-Services02 bg-cover desktop:bg-center">
    <div className="text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]">
     
      <div className="flex flex-col tablet:flex-row tablet:gap-x-5 ">
        <div className="relative tablet:flex desktop:flex-1 tablet:flex-col tablet:gap-y-10 desktop:gap-y-5 tablet:w-3/5 desktop:w-2/5">
          <h2 className="mainTitle">WE <span className="font-medium">OFFER</span></h2>
          
          <p className="tablet:hidden text-right mb-2 mt-6 not-italic font-thin leading-[1] text-L">02/<span className="text-secondary">05</span></p> 
          <Image src={ServTwo} alt="ATVs Traveling" className=" tablet:h-92 desktop:h-107 h:full object-contain"/>
          <p className="tablet:hidden text-right mb-6 mt-1 text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">{itemSlide.subTitle}</p>
        </div>

        <div className=" desktop:flex-1 tablet:w-2/5 desktop:w-3/5 flex flex-col desktop:flex-row desktop:gap-x-15">

          <div className="flex flex-col mb-[34px]  tablet:mb-[25px] desktop:mb-6  tablet:gap-y-10 desktop:gap-y-5">
            <p className="hidden tablet:block not-italic font-thin leading-[1] text-L tablet:text-xl tablet:leading-[78px] desktop:leading-[1] desktop:text-xxl">02/<span className="text-secondary">05</span></p> 
            <ul className="flex flex-col gap-y-4 desktop:gap-y-6 ">
              
              {"ATVs Traveling" === itemSlide.title  ? 
              (<li className="font-medium flex flex-row items-center gap-x-2 desktop:relative"><span className="block bg-primary rotate-45 w-[6px] h-[6px]"/><span className="slideText desktop:w-[227px]">ATVs Traveling</span><span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">{itemSlide.subTitle}</span></li>)
              :
              (<li  className="slideText"  onClick={handleSlideClick}>ATVs Traveling</li>)}

              {"Rock climbing" === itemSlide.title  ? 
              (<li className="font-medium flex flex-row items-center gap-x-2 desktop:relative"><span className="block bg-primary rotate-45 w-[6px] h-[6px]"/><span className="slideText desktop:w-[227px]">Rock climbing</span><span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">{itemSlide.subTitle}</span></li>)
              :
              (<li  className="slideText"  onClick={handleSlideClick}>Rock climbing</li>)}
              
              {"Hot air ballooning" === itemSlide.title  ? 
              (<li className="font-medium flex flex-row items-center gap-x-2 desktop:relative"><span className="block bg-primary rotate-45 w-[6px] h-[6px]"/><span className="slideText desktop:w-[227px]">Hot air ballooning</span><span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">{itemSlide.subTitle}</span></li>)
              :
              (<li  className="slideText"  onClick={handleSlideClick}>Hot air ballooning</li>)}
              
              {"Skydiving" === itemSlide.title  ? 
              (<li className="font-medium flex flex-row items-center gap-x-2 desktop:relative"><span className="block bg-primary rotate-45 w-[6px] h-[6px]"/><span className="slideText desktop:w-[227px]">Skydiving</span><span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">{itemSlide.subTitle}</span></li>)
              :
              (<li  className="slideText"  onClick={handleSlideClick}>Skydiving</li>)}

              {"Rafting" === itemSlide.title  ? 
              (<li className="font-medium flex flex-row items-center gap-x-2 desktop:relative"><span className="block bg-primary rotate-45 w-[6px] h-[6px]"/><span className="slideText desktop:w-[220px]">Rafting</span><span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">{itemSlide.subTitle}</span></li>)
              :
              (<li  className="slideText"  onClick={handleSlideClick}>Rafting</li>)}
              
              
            </ul>
          </div>

          <div className="desktop:flex desktop:flex-col desktop:self-end">
            <p className="hidden  laptop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">{itemSlide.subTitle}</p>
            <p className="text tablet:text-[13px] tablet:w-[221px] desktop:w-[293px]">{itemSlide.description}</p>
          </div>

        </div>
      
      </div>

     </div>
  </div>

  </>
  )
}
