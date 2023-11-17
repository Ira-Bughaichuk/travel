export const CareerInfo: React.FC = () => {
  return (
    <ul className=" flex flex-col gap-y-4 tablet:gap-y-6">
      <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
        <p className="text-sm not-italic leading-5 font-normal tablet:text-base desktop:text-lg desktop:leading-6">
          Professional development
        </p>
        <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
          We offer growth opportunities and a creative environment to nurture
          your talents.
        </p>
      </li>
      <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
        <p className="text-sm not-italic leading-5 font-normal tablet:text-base desktop:text-lg desktop:leading-6">
          Teamwork
        </p>
        <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
          Join our close-knit family, where support and inspiration abound.
        </p>
      </li>
      <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
        <p className="text-sm not-italic leading-5 font-normal tablet:text-base desktop:text-lg desktop:leading-6">
          Stimulating work environment
        </p>
        <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
          Flexibility and remote options for a comfortable experience.
        </p>
      </li>
      <li className="w-[171px] tablet:w-[221px] desktop:w-[570px] text-right flex flex-col gap-y-2 desktop:flex-row desktop:justify-end desktop:gap-x-6">
        <p className="text-sm not-italic leading-5 font-normal tablet:text-base desktop:text-lg desktop:leading-6">
          Exciting challenges
        </p>
        <p className="desktop:w-[285px] text-xs not-italic leading-5 font-extralight desktop:leading-6">
          Unleash your potential through unforgettable projects showcasing
          Carpathian beauty.
        </p>
      </li>
    </ul>
  );
};
