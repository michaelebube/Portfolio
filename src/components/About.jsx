import React from 'react'
import profilePic from '../assets/Group 37.png'
import HTMLIcon from '../assets/logos_html-5.svg'
import CSSicon from '../assets/logos_css-3.SVG'
import ReactIcon from '../assets/logos_tailwindcss.svg'
import JSicon from '../assets/skill-icons_javascript.svg'
import TailwindIcon from '../assets/vscode-icons_file-type-reactjs.svg'
import BgImg from '../assets/patternSVG.svg'

const BgStyle  = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.9
    
}


const About = () => {

    

  return (
   <>
    <div className='relative  sm:mt-[22%] md:mt-[18%] lg:mt-[15%] xl:mt-[12%] overflow-x-hidden overflow-y-hidden'>
   
      <div className='-z-10 sm:h-[850px] md:h-[600px] xl:h-[650px] bg-gradient-to-b from-[#171717cc] via-[#676464b3] to-[#171717cc]'>
        <div className='absolute inset-0 ' style={BgStyle}></div>
      
        <div className='ml-16 xl:ml-20 z-10 text-white pt-24 xl:pt-20 text-[28px] xl:text-3xl   '>
        <div className='absolute'>
             <h1 id='about' className='font-megrim'>BEHIND THE CODE</h1>
            <div className='w-2/3 mt-2 border border-white/80 h-px'></div>
        </div> 
           
           <div className='md:flex items-center justify-between'>
            <p className='sm:pt-[72px] md:pt-20 lg:pt-[72px]
            xl:pt-4 sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[21px]  text-start sm:w-[90%]  md:w-[55%] xl:w-[60%] font-mina leading-loose text-[#BDB9B9]'>I'm a passionate front-end web development student with a solid foundation in HTML, CSS, JavaScript, ReactJS, and TailwindCSS. Eager to keep growing, I'm excited to contribute to a team where I can apply my skills and learn from new challenges. My drive for creating visually appealing, user-friendly websites keeps me exploring innovative tools and techniques. Ready to collaborate and make a meaningful impact on projects!</p>

            <div>
                <img src={profilePic} alt="" className='sm:max-w-[250px] sm:pt-10 md:pt-0  sm:ml-[25%] md:ml-0 md:max-w-[250px] lg:max-w-[280px]
                xl:max-w-[350px]
                md:mt-10 md:mr-14 lg:mt-2 xl:mr-20  ' />
            </div>


           </div>

           <div className='sm:mt-14 md:mt-5 xl:-mt-8'>
                <h1 className='font-megrim text-xl lg:text-2xl  text-white'>MY ARSENAL</h1>

                <div className='absolute'>
                    <div className='mt-3  flex gap-5 z-20 lg:gap-6 '>
                        <img src={HTMLIcon} alt="" className='md:w-[25px] lg:w-[40px] sm:w-[35px]' />
                        <img src={CSSicon} alt="" className='md:w-[25px] lg:w-[40px] sm:w-[35px]' />
                        <img src={JSicon} alt="" className='lg:w-[40px] md:w-[25px] sm:w-[35px]' />
                        <img src={ReactIcon} alt="" className='lg:w-[120px] md:w-[90px] ' />
                        <img src={TailwindIcon} alt="" className='lg:w-[40px] md:w-[25px] sm:w-[35px]' />
                    </div>

                    <div className=' h-px  border border-white/70 sm:mt-4 md:mt-5 '></div>
                </div>
                
           </div>
            
        </div>
      </div>
    </div>
   </>
  )
}

export default About