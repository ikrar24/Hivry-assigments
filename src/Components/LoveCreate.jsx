import React from 'react'
import LoveCreate1 from "../assets/LoveCreate1.png"
import LoveCreate2 from "../assets/LoveCreate2.png"
import LoveCreate3 from "../assets/LoveCreate3.png"
import avtarArrow from "../assets/avtarArrow.svg"


function LoveCreate() {
  return (
   <section className=" flex items-center justify-center mt-5 flex-col " >
                <h6 className=" text-3xl text-center font-bold text-white uppercase ">
                      Loved by creators. <br />
Loved by the Fortune <span className=" text-yellow-400 " >500</span>
                </h6>



<div className=" mt-10 flex gap-3 items-center justify-center flex-wrap md:flex-nowrap " >


        <div className=" w-[300px] h-[200px]  " >
              <img src={LoveCreate1} alt="" className=" object-fill w-full h-full " />
        </div>

        <div className=" w-[300px] h-[200px]  " >
              <img src={LoveCreate2} alt="" className=" object-fill w-full h-full " />
        </div>

        <div className=" w-[300px] h-[200px]  " >
              <img src={LoveCreate3} alt="" className=" object-fill w-full h-full " />
        </div>



</div>

<div className=" flex gap-3 mt-4  border p-2 rounded-lg " >
<button className=" text-yellow-400 " >
         View More 
</button>
<img src={avtarArrow} alt="arrow" />
</div>




   </section>
  )
}

export default LoveCreate
