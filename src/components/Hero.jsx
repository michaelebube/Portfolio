import React from 'react'
import BgIllustration from '../assets/Group 3.png'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-scroll';



const Hero = () => {
    const handleDownload = () => {
   
    window.open("/Michael_Resume.pdf", "_blank");
  };

  return (
  <>
    <div className='relative z-10 '>
           <div className='relative top-[30px] left-8 sm:top-[30px] sm:left-16 xl:top-10 xl:left-20'>
    <div className='relative'>
        <div id='top'  className='absolute '>
            <h1  className='text-[12px] opacity-50 sm:opacity-100 font-megrim text-white/90 sm:text-lg md:text-xl lg:text-2xl'>
                MICHAEL-<span className='text-white font-extrabold'>E</span>BUBE
            </h1>
            <div className='opacity-50 sm:opacity-100 h-[1px] border mt-1 border-white/70 w-full '></div>
            <div className='opacity-50 sm:opacity-100 h-[1px] border mt-1 border-white/70 w-1/2'></div>
        </div>

        <div className='font-marko text-white mt-[25%] sm:mt-[22%] md:mt-[19%] lg:mt-[15%] xl:mt-[10%] inline-block'>
            
            <h1 className='text-3xl sm:text-4xl md:text-[45px] lg:text-5xl xl:text-6xl'>
                Hello!
            </h1>
            <div className='h-px border w-[95%] mt-[7px] ml-1 md:mt-[2px] border-white/60'></div>
        </div>

        <div className='relative mt-4 sm:mt-6'>
            <h2 className='font-marko text-[#666666] text-[22px] sm:text-xl md:text-[28px] lg:text-3xl xl:text-[40px]'>MY NAME IS MICHAEL <br /><span className='block  xl:pt-2 xl:mt-0' >
               EBUBE</span></h2>
               <div className='block sm:hidden absolute h-px w-[24%] border mt-[8px] border-white/60'></div>
        </div>

        <div className='hidden fade-down relative mt-6 sm:flex sm:flex-col space-y-[14px] xl:space-y-4 sm:text-[16px] md:text-lg xl:text-2xl text-[#BDB9B9] font-mina'>
            <div className='-ml-1 border border-[#666666] sm:w-[24%] md:w-[28%] lg:w-[26%] ' ></div>
            <Link to="about" smooth={true} offset={-105} >
                 <div className='flex group w-[25%] items-center gap-[10px] hover:cursor-pointer'>
                
                <h3 className='group-hover:text-white '>Behind the Code</h3>
                <FaArrowRight className='w-3 group-hover:text-white group-hover:translate-x-1' />
            </div>
            </Link>
        <Link to="work" smooth={true} offset={-18} >
            <div className='flex w-[25%] group items-center gap-[10px] hover:cursor-pointer'>
                <h3 className='group-hover:text-white'>My Work</h3>
                <FaArrowRight className='w-3 group-hover:text-white group-hover:translate-x-1' />
            </div>
        </Link>   
             
        <Link to="contact" smooth={true} offset={50}>
            <div className='flex w-[25%] group items-center gap-[10px] hover:cursor-pointer'>
                <h3 className='group-hover:text-white'>Get in Touch</h3>
                <FaArrowRight className='w-3 group-hover:text-white group-hover:translate-x-1' />
            </div>
        </Link>
            
             <div className='flex w-[25%] group items-center gap-[10px] hover:cursor-pointer'>
                <h3 className='group-hover:text-white'   onClick={handleDownload}>My Résumé</h3>
                <FaArrowRight className='w-3 group-hover:text-white group-hover:translate-x-1'  onClick={handleDownload} />
            </div>
            <div className='-ml-1  border border-[#666666] sm:w-[44%] md:w-[44%] lg:w-[40%]  xl:w-[38%]' ></div>
            <div className='absolute sm:-top-[31%] md:-top-[30%] xl:-top-[31%]  -rotate-custom35 border-[#666666] border h-[150%] sm:right-[69%] md:right-[68%] lg:right-[69%] xl:right-[70%] '></div>

            
            
        </div>
    </div>
</div>


            <div className='absolute top-[30px] right-10 xl:right-20 z-10 font-megrim text-white opacity-50 sm:opacity-100 text-[7px] sm:text-xs md:text-[15px] '>
                <h1>JUNIOR FRONT-END <br />  <span className='block text-right'>DEVELOPER</span></h1>
                <div className='h-px border border-white/70'></div>
            </div>



        
       
         <div className='absolute sm:-top-2 sm:-right-1 md:right-0 md:-top-4  xl:-top-4 sm:max-w-[360px]  md:max-w-[390px]  lg:max-w-[500px] xl:max-w-xl overflow-x-hidden sm:block hidden'>
                <img src= {BgIllustration} alt="" className='xl:w-[950px] md:h-[650px] xl:h-[675px] sm:h-[620px] ' />
            </div>
    </div>
  </>
  )
}

export default Hero