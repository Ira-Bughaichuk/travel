
'use client';
import { animateScroll } from "react-scroll"

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) as HTMLDivElement;

    if (section) {
        const sectionTop = section.offsetTop;
        animateScroll.scrollTo(sectionTop, {
            duration: 300,
            smooth: "easeOutCubic",
        })
    }
}

export const ButtonHero: React.FC = () => {
    const handleButtonClick = () => {
        scrollToSection('/contacts');
      };
  return (
    <button
      type="button"
      className="hero-btn relative mx-auto block text-center w-full  cursor-pointer bg-bgBtn py-[3px]  hover:bg-secondary duration-500  ease-in text-lg not-italic font-bold leading-[48px] tablet:leading-normal tablet:py-[11px] desktop:text-[32px] desktop:py-[12px] uppercase"
      onClick={handleButtonClick}
    >
      Join now
    </button>
  )
}
