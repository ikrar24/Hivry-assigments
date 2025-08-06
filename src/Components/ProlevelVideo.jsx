import React from 'react'
import dowloadingImg from "../assets/dowloadingImg.png"
import moblieBg from "../assets/moblieBg.png"
import arrow from "../assets/arrow.svg"

function ProlevelVideo() {
  return (
  <section className=" flex items-center justify-center mt-5 flex-col w-full " >

<div className=" w-[90%] flex items-center justify-center flex-col gap-5 " >


               <h6 className=" text-center font-bold text-white text-2xl " >
                    <span className=' text-yellow-400 ' >
                        PRO-LEVEL VIDEO, 
                    </span>
                    <br /> IN YOUR POCKET
               </h6>




<div className=" mt-10 flex items-center justify-center flex-wrap gap-3 " >

<div className=" flex items-center justify-center flex-col   w-1/2 gap-3 " >
       <p className=" text-center text-sm text-white font-light " >
            Your phone is the ultimate video editor. Record, edit, and publish pro-level video with <span className=" text-yellow-400 " >
               EditAura </span>  Captions App.
       </p>
 
 <img src={dowloadingImg} alt="downloadingIamge" className=" w-[80%]" />
     

<div className=" flex gap-2 text-white font-extralight border p-2 rounded-md " >
     <button> download The app  </button>
<img src={arrow} alt="icon" />
</div>

</div>



<div className=' sideImage w-[250px] ' >
        <img src={moblieBg} alt="img" />
</div>
</div>





</div>

<p className=" text-white font-bold uppercase w-1/2 text-center mt-4 text-lg " >Videos so good they'll think you've outsourced them.</p>

  </section>
  )
}

export default ProlevelVideo
