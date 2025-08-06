import React from "react";
import textbg from "../assets/textbg.svg"

function IntroComponets() {
  return (
    <>
    <section className=" relative w-full flex items-center justify-center mt-6 flex-col " >
      <div className=" flex-col md:gap-5 gap-3 flex items-center justify-center " >
        <h1 className="hedding-font  text-center uppercase text-white font-bold  text-xl md:text-5xl sm:text-4xl " >
              create pro level 
        </h1>
        <h2 className=" hedding-font text-center uppercase text-white font-bold  text-xl md:text-5xl z-50 sm:text-3xl " > videos in the <span className=" text-yellow-400  " >
           blink of ai </span>  </h2>
      </div>
      <img src={textbg} alt="textbackground" className=" absolute md:flex top-[55%] sm:flex md:top-[42%] md:right-[24%] right-[20%] z-0 w-[27%] md:w-[23.5%] hidden sm:right-[17%] sm:w-[30%] " />






    </section>
<p className="hedding-font  text-center md:mt-5 sm:mt-5 mt-2 md:text-[12px] text-[8px] text-white  font-normal  " >
    Bring <span className=" text-yellow-400 " > AI-Powered </span>  efficiency and simplicity to your everyday editing
</p>

    </>
  );
}

export default IntroComponets;
