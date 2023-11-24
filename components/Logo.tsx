import Image from "next/image";
import Link from "next/link"
import logoImg from '../public/assets/icons/Logo.svg';
export default function Logo() {
  return (
    <Link href="/" target='_blank' rel="noopener noreferrer nofollow" role="navigation" aria-label="Main" className="flex gap-[2px] flex-col w-[61px] [h-34px]">
       <Image
         src={logoImg}
         alt="CarpTravel logo"
         className="block w-[59px] h-[21px] desktop:w-[61px] desktop:h-[22px]"
          /> 
    </Link>
  );
}
