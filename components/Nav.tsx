
import { Link } from 'react-scroll';

type INavProps = {
  open: boolean;
};

export default function Nav({open}:INavProps) {
  const navLinks = [
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Career", href: "career" },
    { label: "Gallery", href: "gallery" },
    { label: "Contacts", href: "contacts" },
  ];
  return(
    <nav className={`font-Inter tablet:flex  maxMobile:justify-center maxMobile:fixed maxMobile:w-full maxMobile:pt-[20px] maxMobile:top-0 maxMobile:bottom-0  maxMobile:overflow-y-auto 
    maxMobile:duration-500  ${open ? "left-0" : "left-[-100%]"} maxMobile:bg-bgNav maxMobile:backdrop-blur-xl flex flex-col gap-y-12  text-primary text-base not-italic font-normal tracking-[1.8px] tablet:flex-row tablet:gap-x-6 tablet:text-sm tablet:tracking-[1.4px] desktop:gap-x-14 `} >
    {navLinks.map((item)=> (<Link key={item.label} to={item.href} spy={true} smooth={true} offset={100} duration={500} className='cursor-pointer flex maxMobile:justify-center tablet:inline-block hover:text-secondary duration-500'>{item.label}</Link>))}
    </nav>
  )
}
