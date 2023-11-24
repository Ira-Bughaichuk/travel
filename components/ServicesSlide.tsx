import { ServicesSlideProps } from "@/utils/types";
import Image from "next/image";


export const ServicesSlide: React.FC<ServicesSlideProps> = ({
 src,srcImg, index, subTitle, title, description, handleSlideClick
  }) => {
  return (
    <div style={{
                background: `url(${src}) center/cover no-repeat `,
                height: "100%",}} > 
              <div className="section-main">
                <div className="flex flex-col tablet:flex-row tablet:gap-x-5 ">
                  <div className="tablet:flex desktop:flex-1 tablet:flex-col tablet:gap-y-10 desktop:gap-y-5 tablet:w-3/5 desktop:w-2/5">
                    <h2 className="mainTitle">
                      WE <span className="font-medium">OFFER</span>
                    </h2>
                    <p className="tablet:hidden text-right mb-2 mt-6 not-italic font-thin leading-[1] text-[43px] ">
                      0{index + 1}/<span className="text-secondary">05</span>
                    </p>
                   
                     {/* w-[218px] h-[213px] tablet:w-[463px] tablet:h-[370px] desktop:w-[608px] desktop:h-[434px]"> */}
                      <Image
                        src={srcImg}
                        alt={title}
                        width={213}
                        height={280}
                        loading="lazy"
                        sizes="(max-width: 767px) 280px, (max-width: 1279px) 463px, 607px"
                         className="image-slider"
                        // width={608}
                        // height={434}
                        // sizes="100vw"
                        // style={{
                        //   objectFit: 'cover',
                        //     width: '100%',
                        //      height: 'auto',
                        // }}
                      />
                    <p className="tablet:hidden text-right mb-6 mt-1 text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">
                      {subTitle}
                    </p>
                  </div>

                  <div className=" desktop:flex-1 tablet:w-2/5 desktop:w-3/5 flex flex-col desktop:flex-row desktop:gap-x-15">
                    <div className="flex flex-col mb-[34px]  tablet:mb-[25px] desktop:mb-6  tablet:gap-y-10 desktop:gap-y-5">
                      <p className="hidden tablet:block not-italic font-thin leading-[1] text-[43px] tablet:text-[67px] tablet:leading-[78px] desktop:leading-[1] desktop:text-[98px]">
                        0{index + 1}/<span className="text-secondary">05</span>
                      </p>
                      <ul className="flex flex-col gap-y-4 desktop:gap-y-6 ">
                        {"ATVs Traveling" === title ? (
                          <li className="cursor-pointer font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px] ">
                              ATVs Traveling
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="cursor-pointer slideText text-secondary"
                            onClick={() => handleSlideClick(0)}
                          >
                            ATVs Traveling
                          </li>
                        )}

                        {"Rock climbing" === title ? (
                          <li className="cursor-pointer font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px] ">
                              Rock climbing
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="cursor-pointer slideText text-secondary"
                            onClick={() => handleSlideClick(1)}
                          >
                            Rock climbing
                          </li>
                        )}

                        {"Hot air ballooning" === title ? (
                          <li className="cursor-pointer font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px]">
                              Hot air ballooning
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="cursor-pointer slideText text-secondary"
                            onClick={() => handleSlideClick(2)}
                          >
                            Hot air ballooning
                          </li>
                        )}

                        {"Skydiving" === title ? (
                          <li className="cursor-pointer font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[227px]">
                              Skydiving
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="cursor-pointer slideText text-secondary"
                            onClick={() => handleSlideClick(3)}
                          >
                            Skydiving
                          </li>
                        )}

                        {"Rafting" === title ? (
                          <li className="cursor-pointer font-medium flex flex-row items-center gap-x-2 desktop:relative">
                            <span className="block bg-primary rotate-45 w-[6px] h-[6px]" />
                            <span className="slideText desktop:w-[220px]">
                              Rafting
                            </span>
                            <span className="desktop:absolute desktop:top-0 desktop:left-[304px] desktop:w-[200px] hidden desktop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                              {subTitle}
                            </span>
                          </li>
                        ) : (
                          <li
                            className="cursor-pointer slideText text-secondary"
                            onClick={() => handleSlideClick(4)}
                          >
                            Rafting
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="desktop:flex desktop:flex-col desktop:self-end">
                      <p className="hidden  laptop:block text-xs not-italic font-extralight leading-6 tracking-[2.4px] laptop:mb-[34px]">
                        {subTitle}
                      </p>
                      <p className="text tablet:text-[13px] tablet:w-[221px] desktop:w-[293px]">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
