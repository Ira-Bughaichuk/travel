import React from "react";

export default function Contacts() {
  return (
    <section id="about" className="bg-Contacts bg-cover bg-left desktop:bg-center">
      <div className="text-primary pt-[56px] pb-[53px] px-[20px] tablet:pt-[73px] tablet:pb-[64px] tablet:px-[32px]  desktop:pt-[106px] desktop:pb-[104px] desktop:px-[104px]">
        <h2 className='mainTitle mb-9 tablet:mb-10 desktop:mb-[71px]'> Contact <span className="font-medium">US</span></h2> 
        <div className="">
            <address className="w-full desktop:w-[555px] desktop:gap-y-[120px] flex flex-col laptop:flex-row laptop:gap-x-[90px] laptop:items-top">
              <div className="flex flex-col">
                <div className="flex flex-row items-top gap-x-5 mb-6 maxMobile:justify-end desktop:justify-end desktop:mb-[64px]">
                  <ul>
                    <li className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base"><a href="tel:+380981234567">+38 (098) 12 34 567</a></li>
                    <li className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base"><a href="tel:+380731234567">+38 (073) 12 34 567</a></li>
                  </ul>
                  <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">Phone number</p>
                </div>

                <div className="flex flex-row items-center gap-x-5 maxMobile:mb-6 maxMobile:justify-center desktop:justify-end">
                  <a className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base" href="mailto:support@carptravel.com">support@carptravel.com</a>
                  <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">E-mail</p>
                </div>
              </div>

              <div className="flex flex-row items-top gap-x-5 maxMobile:justify-end maxMobile:mr-5 desktop:text-right desktop:flex-row-reverse">
                <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">Follow us</p>
                <ul>
                  <li><a className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base" href="https://www.facebook.com/">facebook</a></li>
                  <li><a className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base" href="https://www.instagram.com/">instagram</a></li>
                  <li><a className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base" href="https://www.youtube.com/">youtube</a></li>
                  <li><a className="text-sm not-italic font-normal leading-6 tablet:text-s desktop:text-base" href="https://www.tiktok.com/">tiktok</a></li>
                </ul>
              </div>

            </address>
            <form action="#">
              
            </form>
        </div>
      </div>
    </section>
  );
}
