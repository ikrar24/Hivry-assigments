import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"
import VideosCard from './VideosCard'

function IntroVideo() {
  return (
    <>
    <section className=" mt-10 flex items-center justify-center flex-col " >



{/* video card */}

<div className=' flex items-center justify-center md:flex-nowrap flex-wrap gap-4 ' >

<VideosCard videosSrc={video1}/>
<VideosCard videosSrc={video2}/>
<VideosCard videosSrc={video3}/>
</div>




{/* button  */}

<div className=" flex gap-3 mt-5 md:flex-nowrap flex-wrap "  >
    <button className=" pt-3 pb-3 pl-8 pr-8 rounded-xl bg-[rgba(255,211,0,1)] " > Try text to vido </button>
    <button className=" pt-3 pb-3 pl-8 pr-8 rounded-xl bg-[rgba(255,211,0,1)] " > Start free trail  </button>
</div>




    </section>
    </>
  )
}

export default IntroVideo
