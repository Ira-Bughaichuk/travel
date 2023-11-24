import Image from "next/image";
import Link from "next/link"
import LogoIcon from "@/public/assets/icons/Logo.svg";
 //className="flex w-[59px] h-[21px] desktop:w-[61px] desktop:h-[22px]"
export default function Logo() {
  return (
    <Link href="/" target='_blank' rel="noopener noreferrer nofollow" role="navigation" aria-label="Main" className="flex gap-[2px] flex-col w-[61px] [h-34px]">
      <Image 
         src='../public/assets/icons/Logo.svg'
         alt="CarpTravel logo"
         width={61}
         height={22}
          />
    </Link>
  );
}
