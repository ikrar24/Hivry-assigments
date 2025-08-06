import React from 'react'
import CreativityVideo1 from '../assets/CreativityVideo1.mp4'
import CreativityVideo2 from '../assets/CreativityVideo2.mp4'
import CreativityVideo3 from '../assets/CreativityVideo3.mp4'
import CreatetivityCard from './CreatetivityCard'


function CreativityProps() {
  return (
   <>
   
   <section className=" mt-10 flex-col flex items-center justify-center text-white text-2xl font-bold heading-font  sm:text-3xl text-center ">
              <div>
                      <h3 className=" text-[rgba(255,211,0,1)] uppercase " >
                          When Creativity Pops out
                        </h3>          
              </div>

              <p className=" text-sm text-gray-400 " >Various Styles, Countless Assets</p>
      
   </section>
   





<section className=" flex items-center justify-center flex-wrap md:flex-nowrap gap-3 mt-10  " >



 <CreatetivityCard videosSrc={CreativityVideo1}
para={"Make more Videos faster, with high quality"} 
spanPara={"AI Avatars"} buttonText={"Explore More"} />

        
 <CreatetivityCard videosSrc={CreativityVideo2}
para={"Make more Videos faster, with high quality"} 
spanPara={"AI Avatars"} buttonText={"Explore More"} />

 <CreatetivityCard videosSrc={CreativityVideo3}
para={"Make more Videos faster, with high quality"} 
spanPara={"AI Avatars"}  buttonText={"Explore More"} />



</section>






   </>
  )
}

export default CreativityProps
