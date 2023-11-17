

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

// props

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