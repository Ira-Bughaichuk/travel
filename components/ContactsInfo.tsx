export const ContactsInfo: React.FC = () => {
  return (
    <address className=" flex flex-col desktop:gap-y-[120px] laptop:flex-row laptop:gap-x-[90px] laptop:items-top">
      <div className="flex flex-col  desktop:pl-[107px]">
        <div className="flex flex-row items-top gap-x-5 mb-6 maxMobile:justify-end desktop:justify-end desktop:mb-[64px]">
          <ul className="laptop:w-[221px] laptop:text-right">
            <li className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg">
              <a href="tel:+380981234567">+38 (098) 12 34 567</a>
            </li>
            <li className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg">
              <a href="tel:+380731234567">+38 (073) 12 34 567</a>
            </li>
          </ul>
          <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">
            Phone number
          </p>
        </div>

        <div className="flex flex-row items-center gap-x-5 maxMobile:mb-6 maxMobile:justify-center desktop:justify-end">
          <a className="active-link laptop:w-[221px] laptop:text-right text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
            href="mailto:support@carptravel.com"
          >support@carptravel.com
          </a>
          <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">
            E-mail
          </p>
        </div>
      </div>

      <div className="flex flex-row items-top gap-x-5 maxMobile:justify-end maxMobile:mr-5 desktop:text-right desktop:flex-row-reverse">
        <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">
          Follow us
        </p>
        <ul>
          <li>
            <a className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
              href="https://www.facebook.com/" > facebook
            </a>
          </li>
          <li>
            <a className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
              href="https://www.instagram.com/"> instagram
            </a>
          </li>
          <li>
            <a className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
              href="https://www.youtube.com/" > youtube
            </a>
          </li>
          <li>
            <a className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
              href="https://www.tiktok.com/">tiktok
            </a>
          </li>
        </ul>
      </div>
    </address>
  );
};
