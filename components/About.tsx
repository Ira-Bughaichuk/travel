import React from "react";

export default function About() {
  return (
    <section
      id="/about"
      className="bg-About bg-cover bg-no-repeat bg-left desktop:bg-center"
    >
      <div className="text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]">
        <div className="flex flex-col laptop:justify-between tablet:flex-row tablet:gap-x-[76px] desktop:gap-x-6">
          <div className="laptop:flex laptop:flex-col laptop:justify-between">
            <h2 className="mainTitle mb-2 block">
              WHO <span className="font-medium">WE ARE</span>
            </h2>
            <div className="hidden desktop:hidden laptop:block w-[180px] tablet:w-[221px] desktop:w-[297px]">
              <p className="text-sm not-italic uppercase font-normal tablet:text-base desktop:text-lg desktop:leading-6">
                <span>From vacationers</span>
                <span className="block text-right">to active travelers</span>
              </p>
              <p className="text-sm not-italic font-extralight leading-5 tracking-[-0.14px] tablet:text-base tablet:tracking-[0.32px] desktop:tracking-[2.16px] desktop:text-lg desktop:leading-6">
                we have a tour for everyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[180px] gap-y-5 tablet:gap-y-4 tablet:w-[220px] desktop:gap-y-6 desktop:w-[292px]">
            <p className="text">
              <span className="font-normal">A team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="text">
              <span className="font-normal">We believe</span> that nature has
              the power to inspire, strengthen character and provide new
              perspectives. Therefore, each of our tours is aimed at unlocking
              your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
        </div>

        <div className="flex laptop:justify-end flex-col mt-10 gap-y-10 tablet:flex-row desktop:mt-[172px] desktop:flex-row-reverse desktop:justify-between desktop:align-center">
          <div className="flex justify-end">
            <div className="laptop:hidden w-[180px] tablet:w-[221px] desktop:w-[297px]">
              <p className="text-sm not-italic uppercase font-normal tablet:text-base desktop:text-lg desktop:leading-6">
                <span>From vacationers</span>
                <span className="block text-right">to active travelers</span>
              </p>
              <p className="text-sm not-italic font-extralight leading-5 tracking-[-0.14px] tablet:text-base tablet:tracking-[0.32px] desktop:tracking-[2.16px] desktop:text-lg desktop:leading-6">
                we have a tour for everyone.
              </p>
            </div>
          </div>
          <p className="text xs:w-[480px] tablet:w-[463px] desktop:w-[605px]">
            <span className="font-normal">We use methods</span> that are
            time-tested and proven. Our expert guides with in-depth knowledge of
            the Carpathian landscapes lead you safely through the mysteries of
            these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
