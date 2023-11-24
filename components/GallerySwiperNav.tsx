import { GalleryNavProps } from "@/utils/types";

export const GallerySwiperNav: React.FC<GalleryNavProps> = ({
    swiperReady, prevBtnRef, nextBtnRef }) => {
    return (
      <div
        className={`hidden tablet:px-[38px] tablet:w-[704px] tablet:absolute tablet:bottom-[81px] tablet:z-20 
        tablet:flex tablet:justify-between tablet:text-[33px] tablet:font-thin tablet:leading-[33px]
          ${swiperReady ? 'opacity-100' : 'opacity-0'}
            desktop:bottom-[104px]
          transition-opacity ease-in duration-300`}
      >
        <button
          type="button"
          className="desktop:relative desktop:left-[120px] uppercase desktop:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
          ref={prevBtnRef}
        >
          Back
        </button>
        <button
          type="button"
          className="desktop:relative desktop:right-[240px] uppercase desktop:opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300"
          ref={nextBtnRef}
        >
          Next
        </button>
      </div>
    );
  };