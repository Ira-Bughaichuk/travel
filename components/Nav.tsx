import { navLinks } from "@/utils/Data/navLinks";
import { IButtonNavProps } from "@/utils/types";
import { Link } from "react-scroll";



export default function Nav({ open, handlerToggle }: IButtonNavProps) {
  return (
    <nav
      className={`font-Inter tablet:flex  maxMobile:justify-center maxMobile:fixed  maxMobile:z-50 maxMobile:w-full maxMobile:pt-[20px] maxMobile:top-0 maxMobile:bottom-0  maxMobile:overflow-y-auto 
    maxMobile:duration-500  ${open ? "left-0" : "left-[-100%]"} maxMobile:bg-bgNav maxMobile:backdrop-blur-xl flex flex-col gap-y-12  text-primary text-lg not-italic font-normal tracking-[1.8px] tablet:flex-row tablet:gap-x-6 tablet:text-sm tablet:tracking-[1.4px] desktop:gap-x-14 `}
    >
      {/* mobile */}
      {navLinks.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className="flex maxMobile:justify-center tablet:hidden cursor-pointer duration-500 hover:decoration-2 focus:decoration-2 focus:underline hover:underline" 
          onClick={handlerToggle}
        >
          {item.label}
        </Link>
      ))}

      {/* tablet and desktop*/}
      {navLinks.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className="hidden tablet:inline-block cursor-pointer duration-500 hover:decoration-2 focus:decoration-2 focus:underline hover:underline" 
        >
          {item.label}
        </Link>
      ))}
      
    </nav>
  );
}

