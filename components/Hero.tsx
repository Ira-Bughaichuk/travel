"use client";

import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="h-full bg-Hero bg-cover bg-center">
      <div className=" flex gap-y-6 flex-col tablet:flex-row tablet:justify-between font-Inter text-primary px-5 tablet:px-[32px] desktop:px-[104px] pt-[105px] pb-[56px] tablet:pt-[122px] tablet:pb-[67px] desktop:pt-[130px] desktop:pb-[110px]">
        {/* Mobile */}
        <div className="flex flex-col items-end tablet:hidden">
          <p className=" text-[37px] leading-normal font-thin tracking-[1.665px] not-italic uppercase ">
            <span className="font-medium">7</span>DAYS
          </p>
          <p className="  leading-normal text-xs font-light  tracking-[9.48px] not-italic">
            JOURNEY
          </p>
        </div>

        <div className="flex gap-y-6 flex-col tablet:justify-between w-[280px] tablet:w-[426px] desktop:w-[616px]">
          <h1 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] not-italic uppercase tablet:text-[67px] tablet:leading-normal tablet:tracking-[-2.68px] desktop:text-[98px] desktop:tracking-[-3.92px]">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="w-[157px] tablet:w-[262px] desktop:w-[608px] text-xxs leading-4 not-italic font-extralight tablet:text-sm tablet:tracking-[1.26] desktop:tracking-[1.44] desktop:text-base desktop:leading-6">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>

        <div className="tablet:w-[230px] desktop:w-[294px]">
          {/* desctop */}
          <div className="hidden tablet:flex tablet:flex-col ">
            <p className=" text-[37px] leading-normal font-thin tracking-[1.665px] not-italic uppercase tablet:text-[67px] tablet:tracking-[8.1px] desktop:text-[98px] desktop:tracking-normal">
              <span className="font-medium">7</span>DAYS
            </p>
            <p className=" tablet:mb-[56px] desktop:mb-[181px] leading-normal text-xs font-light  tracking-[9.48px] not-italic tablet:text-sm tablet:tracking-[25.9px] desktop:tracking-[36.48px]">
              JOURNEY
            </p>
          </div>

          <div>
            <p className="w-[280px] tablet:w-[230px] desktop:w-[294px] mb-[24px] tablet:mb-[28px] text-sm not-italic font-extralight leading-5 tablet:text-base desktop:text-lg desktop:leading-6">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="block text-center w-full border border-dashed  border-primary cursor-pointer bg-bgBtn py-[10px]  hover:bg-secondary duration-500 text-lg not-italic font-bold leading-[48px] tablet:leading-normal tablet:py-[14px] desktop:text-[32px] desktop:py-[16px] uppercase"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
