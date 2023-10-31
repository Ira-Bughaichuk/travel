import React from "react";
import CareerForm from "@/components/CareerForm";

export default function Career() {
  return (
    <>
      <section
        id="career"
        className="bg-Career bg-cover bg-no-repeat bg-center"
      >
        <div className="text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]">
          <div>
            <div className="mb-6 tablet:mb-3 desktop:mb-6 tablet:flex tablet:flex-row tablet:justify-between tablet:items-center">
              <h2 className="mainTitle">
                <span className="font-medium">Choose</span> US
              </h2>
              <p className="hidden tablet:block w-[179px] tablet:w-[221px] desktop:w-[293px] text tablet:text-[13px]">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
            </div>
            <div className="flex flex-col items-end  gap-y-9 mb-9 tablet:hidden">
              <p className="w-[179px] tablet:w-[221px] desktop:w-[293px] text tablet:text-[13px]">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
              <p className="w-[179px] uppercase text-SM not-italic leading-normal font-extralight desktop:text-LM desktop:leading=[39px]">
                Why us ?
              </p>
            </div>

            <p className="hidden tablet:block tablet:mb-14 desktop:mb-[45px] tablet:text-right tablet:w-[221px] desktop:w-[265px] uppercase text-SM not-italic leading-normal font-extralight desktop:text-LM desktop:leading=[39px]">
              Why us ?
            </p>

            <div className="w-full flex flex-col tablet:flex-row tablet:gap-x-5 desktop:gap-x-6">
              <ul className=" flex flex-col gap-y-4 tablet:gap-y-6">
                <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
                  <p className="text-sm not-italic leading-5 font-normal tablet:text-s desktop:text-base desktop:leading-6">
                    Professional development
                  </p>
                  <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
                    We offer growth opportunities and a creative environment to
                    nurture your talents.
                  </p>
                </li>
                <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
                  <p className="text-sm not-italic leading-5 font-normal tablet:text-s desktop:text-base desktop:leading-6">
                    Teamwork
                  </p>
                  <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
                    Join our close-knit family, where support and inspiration
                    abound.
                  </p>
                </li>
                <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
                  <p className="text-sm not-italic leading-5 font-normal tablet:text-s desktop:text-base desktop:leading-6">
                    Stimulating work environment
                  </p>
                  <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
                    Flexibility and remote options for a comfortable experience.
                  </p>
                </li>
                <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
                  <p className="text-sm not-italic leading-5 font-normal tablet:text-s desktop:text-base desktop:leading-6">
                    Exciting challenges
                  </p>
                  <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
                    Unleash your potential through unforgettable projects
                    showcasing Carpathian beauty.
                  </p>
                </li>
              </ul>

              {/* tablet */}
              <div className="w-full hidden tablet:flex tablet:flex-col tablet:gap-y-8 desktop:gap-y-[14px]">
                <div className="w-full">
                  <p className="tablet:w-[221px] desktop:w-[234px] not-italic font-extralight leading-5 text-sm tablet:text-[13px] desktop:text-base desktop:leading-6">
                    Don't miss your opportunity!
                    <br /> Fill out the form right now and join our team!
                  </p>
                </div>
                <div className="w-full hidden tablet:block">
                  <CareerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile */}
      <div className="block tablet:hidden bg-Career bg-cover bg-no-repeat bg-center pt-[56px] pb-[53px] px-[20px]">
        <div className="flex justify-end">
          <p className="text-primary mb-[42px] w-[179px] not-italic font-extralight leading-5 text-sm tablet:text-[13px] desktop:text-base desktop:leading-6">
            Don't miss your <br /> opportunity! Fill out the form right now and
            join our team!
          </p>
        </div>
        <CareerForm />
      </div>
    </>
  );
}
