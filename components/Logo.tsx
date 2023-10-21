import Image from 'next/image';
import Link from 'next/link';

import LogoIcon from '/public/assets/icons/logo.svg';

export default function Logo() {
  return (
      <Link href='/' className='flex gap-[2px] flex-col w-[61px] [h-34px]'> 
        <Image src={LogoIcon} alt="CarpTravel" className='flex  w-[59px] h-[21px] desktop:w-[61px] desktop:h-[22px]'/>
        <div className='flex font-Karantina text-primary text-sm not-italic font-normal tracking-[2.59px] text-cap leading-trim leading-both'>CarpTravel</div>
      </Link>
  )
}