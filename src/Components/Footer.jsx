import React from 'react'
import facebookicon from "../assets/facebookicon.png"
import instaicon from "../assets/instaicon.png"
import youtubeicon from "../assets/youtubeicon.png"
import twittericon from "../assets/twittericon.png"
import logo from "../assets/logo.png"



function Footer() {
  return (
   <>
   
   <footer className='bg-black absolute md:left-[-50px] w-screen rounded-t-[20%] md:rounded-t-[25%] h-auto flex items-center justify-center p-10  '  >
<div className=" flex flex-wrap w-[100%] items-center justify-center text-white gap-5 " > 



<div className=' flex flex-col  gap-5 ' >

     <p className=" text-sm" > Follow Us </p>


     <div className=' flex gap-5 mt-2 ' >
     <a href="/"> <img src={facebookicon} alt="Socalmeadia" className=' w-4 ' /> </a>
     <a href="/"> <img src={instaicon} alt="Socalmeadia" className=' w-4 ' /> </a>
     <a href="/"> <img src={twittericon} alt="Socalmeadia" className=' w-4 ' /> </a>
     <a href="/"> <img src={youtubeicon} alt="Socalmeadia" className=' w-4 ' /> </a>
     </div>




<ul className=" text-[10px] flex flex-col  gap-2 " >
    <li><a href="/"> Terms and conditions </a></li>
    <li><a href="/"> Privacy </a></li>
    <li><a href="/"> Cookies  </a></li>
    <li><a href="/"> Licenes Agreement </a></li>
    <li><a href="/" className=' uppercase ' > Copyright @ 2025 Editaura. </a></li>
</ul>

</div>



<div className=' bg-gray-700 w-[2px] rounded ' ></div>







<div className='flex  flex-col gap-2'>
    <p>Ai Tools</p>
<ul className='text-[10px] flex font-light gap-4 flex-col' >
    <li><a href="/"> Video Edititng </a></li>
    <li><a href="/"> Recordings </a></li>
    <li><a href="/"> Background Remove </a></li>
    <li><a href="/"> Video Edititng </a></li>
    <li><a href="/"> Text Adding </a></li>
</ul>
</div>


<div className='flex  flex-col gap-2'>
    <p>Resources</p>
<ul className='text-[10px] flex font-light gap-4 flex-col' >
    <li><a href="/"> About Us </a></li>
    <li><a href="/"> Recordings </a></li>
    <li><a href="/"> Blogs </a></li>
    <li><a href="/"> Careers </a></li>
    <li><a href="/"> Newsroom </a></li>
</ul>
</div>



<div className='flex  flex-col gap-2'>
    <p>Help center</p>
<ul className='text-[10px] flex font-light gap-4 flex-col' >
    <li><a href="/"> Support center </a></li>
    <li><a href="/"> Contact Us </a></li>
    <li><a href="/"> Refund </a></li>
    <li><a href="/"> Careers </a></li>
    <li><a href="/"> Cancel Subscription </a></li>
</ul>
</div>






<div className=" flex items-center justify-center  mt-10 w-full " >

<a href="/">

<img src={logo} alt="logo"  className=' w-[200px] ' />
</a>
</div>




</div>









   </footer>


   
   </>
  )
}

export default Footer
