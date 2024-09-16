import React from 'react'
import BgImg from '../assets/patternSVG.svg'
import projItems  from '../projItems'
import ProjCard from './ProjCard'

const BgStyle  = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.9
    
}

const Projects = () => {


  return (
    <>
         <div className='relative h-[2080px] sm:h-[2000px] md:h-[1280px] lg:h-[1200px] xl:h-[850px] z-10'>
            <div className='absolute inset-0 -z-10' style={BgStyle}></div>
           <div className='absolute inset-0 bg-[#494848]/70 z-10'></div>
            <div className='relative z-20 ml-8 sm:ml-16 xl:ml-20 '>
                <div className='absolute mt-[8%] sm:mt-[4%]  md:mt-[2%] '>
                    <h1 className='font-megrim text-white/90 sm:text-2xl md:text-3xl xl:text-4xl' id='work' >MY WORK</h1>
                    <div className='w-[125%] border border-white/80 mt-3 h-px'></div>
                </div>

                <div className='pt-16 grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-4 lg:gap-x-6 gap-y-1 xl:gap-y-0 xl:gap-3 mr-10 sm:mr-14 md:mr-14 xl:mr-10 '>
                    {projItems.map((item) => (
                        <ProjCard key={item.id}  data ={item} />
                    ))}
                </div>
          

            </div>
      </div>
    
    </>
  )
}

export default Projects