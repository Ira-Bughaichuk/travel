'use client';
import { useState } from "react";

import Nav from "./Nav";
import ButtonNav from './ButtonNav';
import Logo from "./Logo";

export default function Header() {
  let [open,setOpen]=useState<boolean>(false);
  const handlerToggle =()=>{
    setOpen(prev=>!prev)
}
  return (
    <div className="container mx-auto">
      <div className="flex  items-center justify-between py-[36px] px-[20px] md:w-auto w-full tablet:py-[25px] tablet:px-[32px] desktop:py-[24px] desktop:px-[104px] ">  
        <Logo />      
        <Nav open={open} handlerToggle={handlerToggle}/>
        <ButtonNav open={open} handlerToggle={handlerToggle} />
     </div>
    </div>
  )
}
