import React from 'react'
import Navbar from './Components/Navbar'
import IntroComponets from './Components/IntroComponets'
import IntroVideo from './Components/IntroVideo'
import CreativityProps from './Components/CreativityProps'
import CustomAi from './Components/CustomAi'
import ScaleVideo from './Components/ScaleVideo'
import LoveCreate from './Components/LoveCreate'
import ProlevelVideo from './Components/ProlevelVideo'
import TrusttedBy from './Components/TrusttedBy'
import Footer from './Components/Footer'

function App() {
  return (
   <>
   
   <div className=" w-screen h-auto flex items-center justify-center flex-col  " >
    <div className=" md:w-[95%] w-[100%] relative " >


<Navbar/>
<IntroComponets/>
<IntroVideo/>
<CreativityProps/>
<CustomAi/>
<ScaleVideo/>
<LoveCreate/>
<ProlevelVideo/>
<TrusttedBy/>
<Footer />






    </div>
   </div>




   </>
  )
}

export default App
