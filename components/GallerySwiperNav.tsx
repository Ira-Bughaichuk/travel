import { GalleryNavProps } from "@/utils/types";

export const GallerySwiperNav: React.FC<GalleryNavProps> = ({
    swiperReady, prevBtnRef, nextBtnRef }) => {
    return (
      <div
        className={`hidden tablet:px-[38px] tablet:w-[704px] tablet:absolute tablet:bottom-[81px] tablet:z-20 
        tablet:flex tablet:justify-between tablet:text-[33px] tablet:font-thin tablet:leading-[33px]
          ${swiperReady ? 'opacity-100' : 'opacity-0'}
          desktop:bottom-0
          transition-opacity ease-in duration-300`}
      >
        <button
          type="button"
          className="desktop:absolute desktop:left-0 desktop:bottom-0 uppercase desktop:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
          ref={prevBtnRef}
        >
          Back
        </button>
        <button
          type="button"
          className="desktop:absolute desktop:-right-[95px]  desktop:bottom-0 uppercase desktop:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
          ref={nextBtnRef}
        >
          Next
        </button>
      </div>
    );
  };