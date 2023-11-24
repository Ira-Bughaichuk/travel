import Image from "next/image";
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" target='_blank' rel="noopener noreferrer nofollow" role="navigation" aria-label="Main" className="flex gap-[2px] flex-col w-[61px] [h-34px]">
       <Image
         src='/assets/icons/Logo.svg'
         alt="CarpTravel logo"
         width={59}
         height={21}
         className="block w-[59px] h-[21px] desktop:w-[61px] desktop:h-[22px]"
          /> 
    </Link>
  );
}
