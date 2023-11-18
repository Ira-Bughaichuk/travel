export type NavLink = {
  label:string;
  href:string;
}
export type GalleryItems = {
  image: string,
  alt: string,
  id: string,
}
export type ServicesSliderItem = {
  title: string;
  subTitle: string;
  description:string;
  bgImage: string;
  slideImage: string;
  id: number;
}

export type ConfigFormCareer = {
    fullName: string;
    email: string;
    position: string;
    phone: string;
    messages: string;
    isAgree: boolean;
  };

export type ConfigFormContacts = {
    fullName: string;
    email: string;
    message: string;
  };

// === props ===

export type IButtonNavProps = {
    open: boolean;
    handlerToggle: ()=> void;
  };
export type GalleryNavProps = {
    swiperReady: boolean,
    prevBtnRef: React.RefObject<HTMLButtonElement>,
    nextBtnRef: React.RefObject<HTMLButtonElement>,
}
export type GallerySlideProps = {
    isActive: boolean;
    img: string;
    alt: string;
}

export type INavProps = {
    open: boolean;
    handlerToggle: ()=> void;
  };
export type ServicesSlideProps ={
    src:string;
    index:number;
    subTitle:string;
    title:string;
    description:string;
    srcImg:string;
    handleSlideClick: (arg: number)=>void;
  }