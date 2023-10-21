// 'use client';
// import { Dispatch, SetStateAction} from "react";

type IButtonNavProps = {
  open: boolean;
  // setOpen: Dispatch<SetStateAction<boolean>>
  handlerToggle: ()=> void;
};
export default function ButtonNav({handlerToggle, open}: IButtonNavProps) {
  return (
    <button onClick={handlerToggle} className='tablet:hidden z-50 relative  text-primary text-sm font-normal leading-normal tracking-[1.4px]'>
    {open ? <span>Close</span> : <span>Open</span>}
  </button>
  
  )
}

// export default function ButtonNav({setOpen, open}: IButtonNavProps) {
//   return (
//     <button onClick={()=>setOpen(!open)} className='tablet:hidden z-50 relative  text-primary text-sm font-normal leading-normal tracking-[1.4px]'>
//     {open ? <span>Close</span> : <span>Open</span>}
//   </button>
  
//   )
// }
