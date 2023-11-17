"use client";
import { gallery } from "@/utils/Data/GalleryData";
import Image from "next/image";



export const GalleryMobile: React.FC = ()=> {
  return (
    <ul className="flex flex-col justify-center items-center tablet:hidden">
            {gallery.slice(3).map((img) => (
              <li key={img.id}>
                <Image
                  src={img.image}
                  alt={img.alt}
                  width={280}
                  height={187}
                  className="mt-8 "
                />
              </li>
            ))}
          </ul>
  )
}
