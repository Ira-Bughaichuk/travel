import { CareerForm } from "../components/CareerForm";
import { CareerInfo } from "../components/CareerInfo";




export default function Career() {
  return (
    <>
      <section id="/career" className="bg-Career bg-cover bg-no-repeat bg-center">
        <div className="container-main">
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
              <p className="w-[179px] uppercase text-3xl not-italic leading-normal font-extralight desktop:text-4xl desktop:leading=[39px]">
                Why us ?
              </p>
            </div>

            <p className="hidden tablet:block tablet:mb-14 desktop:mb-[45px] tablet:text-right tablet:w-[221px] desktop:w-[265px] uppercase text-3xl not-italic leading-normal font-extralight desktop:text-4xl desktop:leading=[39px]">
              Why us ?
            </p>

            <div className="w-full flex flex-col tablet:flex-row tablet:gap-x-5 desktop:gap-x-6">
              <CareerInfo />
              {/* tablet */}
              <div className="w-full hidden tablet:flex tablet:flex-col tablet:gap-y-8 desktop:gap-y-[0] desktop:relative">
                <div className="w-full">
                  <p className="tablet:w-[221px] desktop:absolute desktop:top-[-104px] desktop:left-0  desktop:w-[234px] not-italic font-extralight leading-5 text-sm tablet:text-[13px] desktop:text-lg desktop:leading-6">
                    Don`t miss your opportunity!
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
          <p className="text-primary mb-[42px] w-[179px] not-italic font-extralight leading-5 text-sm tablet:text-[13px] desktop:text-lg desktop:leading-6">
            Don`t miss your <br /> opportunity! Fill out the form right now and
            join our team!
          </p>
        </div>
        <CareerForm />
      </div>
    </>
  );
}
