import React from "react";
import userfill from "../assets/user-fill.svg";
import avtarbackgound from "../assets/avtar-backgound.png"
import CreatetivityCard from "./CreatetivityCard";
import avtar1 from "../assets/avtar1.mp4"
import avtar2 from "../assets/avtar2.mp4"
import avtar3 from "../assets/avtar3.mp4"

function CustomAi() {
  return (
    <section className=" mt-10 flex items-center justify-center flex-col ">
      <div className=" flex items-center justify-center flex-col ">
        <h4 className=" uppercase font-bold text-white text-2xl   ">
          Crate custom{" "}
          <span className="text-[rgba(255,211,0,1)]  "> al - avatars </span>
        </h4>

        <p className=" text-center mt-2 w-[90%] text-[10px]  text-white font-light ">
          More content, less time. Create Talking Head videos in seconds with
          your own digital clone.
        </p>



        <div className=" flex items-center justify-center gap-2 text-white  mt-8 ">
          <img src={userfill} alt="icon" className=" w-[20px] " />
          <p> Real Human </p>
        </div>

      </div>



<div className=" mt-10 w-[70%] h-[20%] rounded-md ">
    <img src={avtarbackgound} className=" rounded-md object-fill  " alt="bg" />
</div>




        <div className=" flex items-center justify-center gap-3 text-white  mt-8 ">
          <img src={userfill} alt="icon" className=" w-[15px] " />
          <p  className=" text-[rgba(255,211,0,1)] text-sm " > AI- AVATARS </p>
        </div>




{/* video bg  */}

<div className="mt-5 flex justify-center items-center flex-wrap md:flex-nowrap  " >


        <CreatetivityCard className={" bg-transparent w-[400px] rounded-none "} classNameVideo={" w-[200px] h-[200px] rounded-none "} buttonText={"Add Sumtitle"}  videosSrc={avtar1} />


        <CreatetivityCard className={" bg-transparent w-[400px] rounded-none "} classNameVideo={" w-[200px] h-[200px] rounded-none "} buttonText={"Change Background"}  videosSrc={avtar2} />

        <CreatetivityCard className={" bg-transparent w-[400px] rounded-none "} classNameVideo={" w-[200px] h-[200px] rounded-none "} buttonText={"Ass Musics"}  videosSrc={avtar3} />

</div>





    </section>
  );
}

export default CustomAi;
