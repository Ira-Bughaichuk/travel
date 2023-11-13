
type IButtonNavProps = {
  open: boolean;
  handlerToggle: ()=> void;
};
export default function ButtonNav({handlerToggle, open}: IButtonNavProps) {
  return (
    <button type="button" onClick={handlerToggle} className='tablet:hidden z-50 relative uppercase  text-primary text-sm font-normal leading-normal tracking-[1.4px]'>
    {open ? <span>Close</span> : <span>MENU</span>}
  </button>
  
  )
}

