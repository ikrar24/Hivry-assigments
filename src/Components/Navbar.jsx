import React , { useState } from 'react'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx";

function Navbar() {
const [ ToggleBar, setToggleBar] = useState(true);

const handleToggle = ()=>{
  setToggleBar((prev)=>!prev);
}

  return (
    <nav className=" flex items-center  justify-between w-full p-5 text-white font-medium relative " >

        {/* logo    */}
        <ul  > <li> <a href="/"> <img src={logo} alt="logo" className=' md:w-[90px] w-[70px]  '  /> </a> </li> </ul>

{/* lists  */}



<ul className={` ${ToggleBar?"flex":"hidden"} items-center justify-center gap-10 md:gap-5 md:text-[18px] text-sm md:relative absolute backdrop-blur-sm  md:w-auto md:flex-row flex-col md:top-0 top-[100%] md:right-0 right-0 md:bg-transparent md:h-auto h-[50vh] w-[40%]   z-[1000] bg-white text-black md:text-white `} >
    <li><a href="/"> Home </a></li>
    <li><a href="/"> AI Tools </a></li>
    <li><a href="/"> Testimonials </a></li>
    <li><a href="/"> Blog </a></li>
    <li><a href="/"> Pricing </a></li>
</ul>



{/* buttons  */}

<ul className=" flex items-center justify-center gap-2 md:text-[18px] text-sm mr-4 " >
    <button className=" border p-1 pl-2 pr-2 rounded " > Log in </button>
    <button className="  p-1 pl-2 pr-2 rounded bg-[rgba(255,211,0,1)] text-black " > Sign up </button>
</ul>



{
  ToggleBar?<RxCross1  className=" md:hidden flex cursor-pointer text-2xl " onClick={handleToggle} />:
<FaBars className=" md:hidden flex cursor-pointer text-2xl " onClick={handleToggle} />
}






    </nav>
  )
}

export default Navbar
