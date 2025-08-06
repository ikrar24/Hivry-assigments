import React from "react";
import VideosCard from "./VideosCard";
import avtarArrow from "../assets/avtarArrow.svg";

function CreatetivityCard({
  spanPara,
  para,
  className,
  videosSrc,
  classNameVideo,
  buttonText,
}) {
  return (
    <>
    <section className=" flex flex-col " >
      <div
        className={` ${className} cardBox flex items-center justify-center flex-col p-3 rounded-xl bg-black text-[10px] text-white `}
      >
        <div className={`videoCard  `}>
          <VideosCard
            videosSrc={videosSrc}
            className={` {${classNameVideo} bg-transparent 
          
            ` 
          }
          videoClassName={" rounded-lg "}
          />
        </div>

        <p className=" w-[50%]  font-light text-center mt-5 ">
          {para}
          <span className=" text-[rgba(255,211,0,1)]  "> {spanPara}</span>
        </p>
      </div>



      <div className="flex items-center justify-center mt-2 bg text-[rgba(255,211,0,1)]    gap-2  w-full  ">

<div className=" bg-transparent border flex items-center justify-center text-sm p-2 rounded-lg gap-3 " >

        <button className="  "> {buttonText} </button>
        <div>
          {" "}
          <img src={avtarArrow} alt="arrow" className=" w-[20px] " />{" "}
        </div>


      </div>
      </div>
</section>



    </>




  );
}

export default CreatetivityCard;
