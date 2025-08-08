import React, { lazy } from 'react'

function VideosCard({videosSrc , className, videoClassName}) {
  return (
    <div className="VideoBox gap-5 flex md:flex-nowrap flex-wrap justify-center items-center">
     
     
      <div className={` ${className} videoCard bg-slate-500 w-[330px] h-[300px] rounded-3xl flex items-center justify-center overflow-hidden`}>
        <video
          src={videosSrc}
          className={`w-full h-full object-cover rounded-3xl ${videoClassName} `}
          autoPlay
          onLoad={lazy}
          loop
          muted
        ></video>
      </div>
     
    </div>
  )
}

export default VideosCard
