import React from "react";
import VideosCard from "./VideosCard";
import ScaleVideo1 from "../assets/ScaleVideo1.mp4"
import ScaleVideo2 from "../assets/ScaleVideo2.mp4"
import ScaleVideo3 from "../assets/ScaleVideo3.mp4"
import ScaleVideo4 from "../assets/ScaleVideo4.mp4"

function ScaleVideo() {
  return (
    <>
      <section className="flex  items-center flex-col justify-center mt-10  " >

        <div className=" flex items-center justify-center flex-col gap-3  w-[70%]  " >

        <h5 className=" text-3xl text-white font-bold " >
          SCALE <span className=" text-[rgba(255,211,0,1)] " > VIDEOS </span > ACROSS <span className="text-[rgba(255,211,0,1)]" > TEAMS </span>
        </h5>
        <p className=" text-center text-[rgba(255,255,255,1)] font-light text-[9px] " >
          Empower your team to easily create on-brand content with Custom
          Templates and Brand Kit. Ensure quality through simple feedback and
          review flows.
        </p>




<div className=" mt-4  flex items-center justify-center flex-wrap gap-4 " >

<VideosCard className={"  w-[200px] h-[250px] "} videosSrc={ScaleVideo1} />
<VideosCard className={"  w-[200px] h-[250px] "} videosSrc={ScaleVideo2} />
<VideosCard className={"  w-[200px] h-[250px] "} videosSrc={ScaleVideo4} />
<VideosCard className={"  w-[200px] h-[250px] "} videosSrc={ScaleVideo4} />


</div>













        </div>


      </section>
    </>
  );
}

export default ScaleVideo;
