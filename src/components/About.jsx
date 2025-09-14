import React, {useEffect} from 'react'
import profilePic from '../assets/Group 37.png'
import HTMLIcon from '../assets/logos_html-5.svg'
import CSSicon from '../assets/logos_css-3.svg'
import TailwindIcon from '../assets/logos_tailwindcss.svg'
import JSicon from '../assets/skill-icons_javascript.svg'
import ReactIcon from '../assets/vscode-icons_file-type-reactjs.svg'
import TSIcon from '../assets/typescript-icon.svg'
import VueIcon from '../assets/vue-svgrepo-com.svg'
import NuxtIcon from '../assets/nuxt-icon.svg'
import BgImg from '../assets/patternSVG.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BgStyle  = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.9
    
}

const icons = [
    { src: HTMLIcon, alt: 'HTML5' },
    { src: CSSicon, alt: 'CSS3' },
    { src: JSicon, alt: 'JavaScript' },  
    { src: TSIcon, alt: 'TypeScript' },
    { src: ReactIcon, alt: 'React' },
    { src: VueIcon, alt: 'Vue' },
    { src: NuxtIcon, alt: 'Nuxt' },
    { src: TailwindIcon, alt: 'Tailwind' },
  ];



const About = () => {

    useEffect(() => {
    AOS.init({
      duration: 1200, 
      delay: 100, 
      easing: 'ease'
    });
  }, []);

  return (
   <>
    <div data-aos="fade-left" className='relative  sm:mt-[22%] md:mt-[18%] lg:mt-[15%] xl:mt-[12%] overflow-x-hidden overflow-y-hidden'>
   
      <div className='-z-10 h-[740px] sm:h-[850px] md:h-[600px] xl:h-[650px] sm:bg-gradient-to-b from-[#171717cc] via-[#676464b3] to-[#171717cc]'>
        <div className='absolute inset-0 ' style={BgStyle}></div>
      
        <div className='ml-8 sm:ml-16 xl:ml-20 z-10 text-white pt-[100px] sm:pt-24 xl:pt-20 text-[18px] sm:text-[28px] xl:text-3xl   '>
        <div className='absolute'>
             <h1 id='about' className='font-megrim'>BEHIND THE CODE</h1>
            <div className='w-2/3 mt-2 border border-white/80 h-px'></div>
        </div> 
           
           <div className='md:flex items-center justify-between'>
            <p className='pt-14 sm:pt-[72px] md:pt-20 lg:pt-[72px]
            xl:pt-20 text-[13px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[21px]  text-start w-[90%] sm:w-[90%]  md:w-[55%] xl:w-[60%] font-mina leading-loose text-[#BDB9B9]'>I'm a passionate front-end web development student with a solid foundation in HTML, CSS, JavaScript, TypeScript, React, Vue, Nuxt and TailwindCSS. Eager to keep growing, I'm excited to contribute to a team where I can apply my skills and learn from new challenges. My drive for creating visually appealing, user-friendly websites keeps me exploring innovative tools and techniques. Ready to collaborate and make a meaningful impact on projects!</p>

            <div className='flex items-center justify-center sm:block'>
                <img src={profilePic} alt="" className='max-w-[150px]  sm:max-w-[250px] pt-7 sm:pt-10 md:pt-0  sm:ml-[25%] md:ml-0 md:max-w-[250px] lg:max-w-[280px]
                xl:max-w-[350px] mr-8 sm:mr-0
                md:mt-10 md:mr-14 lg:mt-2 xl:mr-20 filter brightness-95 hover:brightness-125 transition duration-500  ' />
            </div>


           </div>

           <div className='mt-7 sm:mt-14 md:mt-5 xl:mt-8 relative'>
                <h1 className='font-megrim text-[15px] sm:text-xl lg:text-2xl  text-white'>MY ARSENAL</h1>

                <div className='absolute'>
                    <div className='mt-4 sm:mt-3   flex gap-4 sm:gap-5 z-20 lg:gap-6 '>
                        {icons.map((icon) => (
                            <img key={icon.alt} src={icon.src} alt={icon.alt}   className={`
    ${icon.alt === 'Tailwind'
      ? 'w-[60px] sm:w-[120px] md:w-[90px] lg:w-[120px]'
      : 'w-[18px] sm:w-[35px] md:w-[25px] lg:w-[40px]'
    }
  `} />
                        ))}
                    </div>

                    <div className=' h-px  border border-white/70 mt-[10px] sm:mt-4 md:mt-5 '></div>
                </div>
                
           </div>
            
        </div>
      </div>
    </div>
   </>
  )
}

export default About