import React, {useState} from 'react'
import BgImg from '../assets/patternSVG.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const BgStyle  = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1
    
}

const Contact = () => {

    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {

    if (!formData.name || !formData.email || !formData.message) {
    alert('Please fill out all fields.');
    return; // Stop submission if validation fails
  }

  e.preventDefault();
  const response = await fetch('https://getform.io/f/awngoplb', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    console.log('Form submitted successfully');
     setFormData({
      name: '',
      email: '',
      message: ''
    });
  } else {
    console.error('Form submission error');
  }
};

  return (
   <>
    <div className='sm:pb-24 md:h-screen xl:pb-14  relative '>
        <div className='absolute inset-0 -z-20' style={BgStyle}></div>
           <div className='absolute inset-0 bg-[#494848]/10 z-10'></div>

           <div className='px-[80px] sm:pt-[70px] md:pt-[65px] xl:px-[120px] z-20  '>
                <div id='contact' className='flex justify-between -mt-2'>
                    <h1 className='font-megrim text-white/90 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>GET IN TOUCH</h1>
                     <h1 className='font-megrim text-white/90 sm:text-sm md:text-sm lg:text-[16px] xl:text-lg md:mr-4 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-1'>
                MICHAEL-<span className='text-white font-extrabold'>E</span>BUBE
                </h1>
                

                </div>
                <div className='border border-[#666666] md:ml-1 mt-4  md:w-[97.5%] xl:w-[98.5%] '></div>

            <div className='sm:mt-10 md:mt-10  flex flex-col items-center md:-ml-8 md:space-y-2 xl:mt-12 '>
                <h1 className='font-mina font-bold text-[#BDB9B9] sm:text-lg md:text-[22px] lg:text-2xl xl:text-3xl ' >Send me a message!</h1>

                <h3 className='text-center font-mina text-[#BDB9B9]/90 sm:text-[16px] md:text-lg sm:w-[400px]  w-[450px] xl:w-[500px] xl:text-xl  '>Have a question, proposal, or just want to say hello? Feel free to reach out!</h3>
            
            </div>  

            <div className='sm:mt-[75px] md:mt-[70px] xl:mt-[60px]'>
                <form  onSubmit={handleSubmit} className='relative z-30'>
    <div className='flex justify-between'>
        <div className='flex flex-col gap-y-1'>
             <label htmlFor='name' className='font-mina sm:text-[14px] md:text-[16px] text-[#484848]  lg:text-lg xl:text-xl'>
        Your Name  </label>
        <input
        id='name'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
        className='bg-transparent border-b border-[#666666] py-2 sm:w-[200px] md:w-[270px] lg:w-[350px]   xl:w-[480px] placeholder:text-gray-400 focus:border-[#D9D9D9] focus:outline-none  text-white/90 sm:placeholder:text-[16px] lg:placeholder:text-lg !important' autoComplete="off"/>

     
        </div>
       
    

    <div className='flex flex-col gap-y-1' >
        <label htmlFor='email' className='font-mina text-[#484848] sm:text-[14px] md:text-[16px] lg:text-lg xl:text-xl'>

        Email Address</label>
        <input
         id='email'
          type="email"
          name="email"
          value={formData.email}
          placeholder='Enter your email address'
          onChange={handleChange}
          className='bg-transparent border-b border-[#666666] py-2 sm:w-[200px] md:w-[270px] lg:w-[350px] xl:w-[480px] placeholder:text-gray-400 focus:border-[#D9D9D9] focus:outline-none  text-white/90 sm:placeholder:text-[16px] lg:placeholder:text-lg !important'
          autoComplete="off"
        />
  
    </div>
      
    </div>
      
   <div className='sm:mt-16 md:mt-12 flex flex-col lg:gap-1'>
        <label  htmlFor="message" className='font-mina text-[#484848] lg:text-lg'>
        Your Message
          </label>
        <textarea
        id='message'
          name="message"
          value={formData.message}
          onChange={handleChange}  
          placeholder="Hi there! Kindly share any internship opportunities, questions, or ideas. I'm excited to explore how I can contribute!"
          className='bg-transparent border-b border-[#666666] py-2 w-full placeholder:text-[16px] focus:border-[#D9D9D9] focus:outline-none  placeholder:text-gray-400 text-white/90 sm:placeholder:text-[16px] lg:placeholder:text-lg xl:placeholder:text-xl !important '
          autoComplete="off"
        />
    
   </div>
     
      <button type="submit" className='sm:mt-7 md:mt-10 border sm:p-2  md:p-[10px] xl:p-3 w-full sm:text-[16px] md:text-lg xl:text-xl font-megrim text-[#D9D9D9] hover:bg-white/80  hover:text-black hover:font-semibold cursor-pointer'>LET'S GO</button> 
    </form>  
            </div>

            <div className='relative z-30 flex space-x-5 mt-7 items-center justify-center '>
                 <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub  className="text-gray-500 hover:text-black transition-colors duration-300 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" />
      </a>
      <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-500 hover:text-blue-600 transition-colors duration-300  sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" />
      </a>
            </div>
            


                

           </div>

    </div>
   </>
  )
}

export default Contact