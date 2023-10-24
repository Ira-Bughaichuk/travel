import Image from 'next/image'
import ServTwo from "../public/assets/images/services-slide02.jpg";

export default function Slide02() {
  return (
    <>
    <div className="bg-Services02 bg-cover desktop:bg-center">
    <div className="text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]">
     
      <div className="flex flex-col tablet:flex-row tablet:gap-x-5 ">
        <div className="tablet:flex desktop:flex-1 tablet:flex-col tablet:gap-y-10 desktop:gap-y-5 tablet:w-3/5 desktop:w-2/5">
          <h2 className="mainTitle">WE <span className="font-medium">OFFER</span></h2>
          <p className="tablet:hidden text-right mb-2 mt-6 not-italic font-thin leading-[1] text-L">02/<span className="text-secondary">05</span></p> 
          <Image src={ServTwo} alt="ATVs Traveling" className="tablet:h-92 desktop:h-107 h:full object-contain"/>
          <p className="tablet:hidden text-right mb-6 mt-1 text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">Feel the adrenaline rush</p>
        </div>

        <div className=" desktop:flex-1 tablet:w-2/5 desktop:w-3/5 flex flex-col desktop:flex-row desktop:gap-x-15">

          <div className="flex flex-col mb-[34px]  tablet:mb-[25px] desktop:mb-6  tablet:gap-y-10 desktop:gap-y-5">
            <p className="hidden tablet:block not-italic font-thin leading-[1] text-L tablet:text-xl tablet:leading-[78px] desktop:leading-[1] desktop:text-xxl">02/<span className="text-secondary">05</span></p> 
            <ul className="flex flex-col gap-y-4 desktop:gap-y-6 uppercase not-italic font-extralight text-slS leading-[17px] tablet:text-slM tablet:leading-[18px] desktop:text-slL desktop:leading-6">
              <li>ATVs Traveling</li>
              <li className="font-medium flex flex-row items-center gap-x-2"><span className="block bg-primary rotate-45 w-[6px] h-[6px]"/><span className="desktop:w-[220px]">Rock climbing</span></li>
              <li>Rock climbing</li>
              <li>Hot air ballooning</li>
              <li>Skydiving</li>
              <li>Rafting</li>
            </ul>
          </div>

          <div className="desktop:flex desktop:flex-col desktop:self-end">
            <p className="hidden tablet:block text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">Feel the adrenaline rush</p>
            <p className="text tablet:text-[13px] tablet:w-[221px] desktop:w-[293px]">Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.</p>
          </div>

        </div>
      
      </div>

     </div>
  </div>

  </>
  )
}
