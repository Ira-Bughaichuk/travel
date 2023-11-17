import { GallerySlideProps } from "@/utils/types";
import Image from "next/image";


export const GallerySwiperSlide: React.FC<GallerySlideProps> = ({
    isActive, img, alt
  }) => {
  return (
    <div className={`relative right-8 desktop:right-[-12px] w-[415px] desktop:w-[606px] h-[294px] desktop:h-[429px] 
                      ${isActive ? "desktop:right-[-10px]" : "opacity-75"}`}
                    >
                      <Image
                        width={606}
                        height={429}
                        src={img}
                        alt={alt}
                        loading="lazy"
                        sizes="(max-width: 767px) 280px, (max-width: 1279px) 415px, 606px"
                        className="w-[280px] h-[187px] tablet:w-[415px] tablet:h-[294px] desktop:w-[606px] desktop:h-[429px] object-cover"
                      />
                      <div
                        className={`absolute top-0 bottom-0 left-0 right-0 
                          transition-opacity ease-in duration-300  bg-zinc-950/80
                          ${isActive ? "opacity-0" : "opacity-100"}`}>
                        </div>
                    </div>
  )
}
