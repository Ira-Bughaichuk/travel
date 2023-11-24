'use client';

import { useState } from "react";

import ButtonNav from "../../components/ButtonNav";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";


export default function Header() {
  let [open,setOpen] = useState<boolean>(false);

  const handlerToggle =()=>{
    setOpen(prev=>!prev);
    const body = document.body;
    const isOverflowHidden = body.style.overflow === 'hidden';
    body.style.overflow = isOverflowHidden ? 'visible' : 'hidden';
  }

  return (
    <header className="absolute left-0 top-0 bg-transparent w-full">
        <div className="flex  items-center justify-between mx-auto max-w-screen-xs
            tablet:max-w-screen-tablet tablet:w-[768px]
            desktop:max-w-screen-desktop desktop:w-[1280px]  py-[36px] px-[20px] md:w-auto w-full tablet:py-[25px] tablet:px-[32px] desktop:py-[24px] desktop:px-[104px] ">  
          <Logo />      
          <Nav open={open} handlerToggle={handlerToggle}/>
          <ButtonNav open={open} handlerToggle={handlerToggle} />
      </div>
    </header>
  )
}
