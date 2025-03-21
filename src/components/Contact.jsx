import React, {useState, useEffect} from 'react'
import BgImg from '../assets/patternSVG.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


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

     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
     const [showErrorMessage, setShowErrorMessage] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
    alert('Please fill out all fields.');
    return; 
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(formData.email)) {
  alert('Please enter a valid email address.');
  return;
}


  
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

     
    setShowSuccessMessage(true);

             
    setTimeout(() => {
          setShowSuccessMessage(false);
    }, 6000);

  } else {
    console.error('Form submission error');
    setShowErrorMessage(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setTimeout(() => {
          setShowErrorMessage(false);
    }, 6000);
  }
};

 useEffect(() => {
    AOS.init({
      duration: 1200, 
      delay: 100, 
      easing: 'ease'
    });
  }, []);

  return (
   <>
    <div data-aos="fade-down" className='h-[850px] sm:max-h-screen sm:pb-24 md:max-h-[720px] xl:max-h-screen xl:pb-14  relative '>
        <div className='absolute inset-0 -z-20' style={BgStyle}></div>
           <div className='absolute inset-0 bg-[#494848]/10 z-10'></div>

           <div className='px-14 sm:px-[80px] pt-[10%] sm:pt-[70px] md:pt-[65px] xl:px-[120px] z-20  '>
                <div id='contact' className='flex justify-center  sm:ml-0   sm:justify-between -mt-2 z-30'>
                    <h1 className='font-megrim text-white/90 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>GET IN TOUCH</h1>
                    <Link to ="top" smooth= {true} offset = {-40} className='cursor-pointer z-30'>
                      <h1 className='hidden sm:block font-megrim text-white/90 sm:text-sm md:text-sm lg:text-[16px] xl:text-lg md:mr-4 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-1  '>
                MICHAEL-<span className='text-white font-extrabold'>E</span>BUBE
                </h1>
                    </Link>
                     
                

                </div>
                <div className='hidden sm:block border border-[#666666] md:ml-1 mt-4  md:w-[97.5%] xl:w-[98.5%] '></div>

            <div className='mt-3 sm:mt-10 md:mt-10  flex flex-col items-center md:-ml-8 md:space-y-2 xl:mt-12 '>
                <h1 className='font-mina font-bold text-[#BDB9B9] text-lg sm:text-lg md:text-[22px] lg:text-2xl xl:text-3xl ' >Send me a message!</h1>

                  <div className=' sm:hidden w-[150%] h-px border mt-5'></div>

                <h3 className='mt-10 sm:mt-0 text-center font-mina text-[#BDB9B9]/90 text-[16px] sm:text-[16px] md:text-lg w-[300px] sm:w-[400px]   xl:w-[500px] xl:text-xl  '>Have a question, proposal, or just want to say hello? Feel free to reach out!</h3>

                  <div className=' sm:hidden w-[150%] mt-7 h-px border top-[28%]'>

           </div>
         
            
            </div>  

            <div className=' mt-14 sm:mt-[75px] md:mt-[70px] xl:mt-[60px] -ml-4 sm:-ml-0 -mr-4 sm:w-auto'>
                <form  onSubmit={handleSubmit} className='relative z-30'>
    <div className='space-y-8 sm:space-y-0 sm:flex justify-between'>
        <div className='border sm:border-none flex flex-col gap-y-1 '>
             <label htmlFor='name' className='font-mina text-sm pt-3 pl-4 sm:pt-0 sm:pl-0 sm:text-[14px] md:text-[16px] text-[#484848]  lg:text-lg xl:text-xl'>
        Your Name  </label>
        <div className='sm:hidden mt-1  border h-px border-white/40'></div>
        <input
        id='name'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
        className='bg-transparent border-b border-[#666666] py-2 sm:w-[200px] md:w-[270px] lg:w-[350px]   xl:w-[480px] placeholder:text-gray-400 focus:border-[#D9D9D9] focus:outline-none  text-white/90 pb-3 pl-4 sm:pt-0 sm:pl-0 sm:placeholder:text-[16px] lg:placeholder:text-lg !important' autoComplete="off"/>

     
        </div>
       
    

    <div className='border sm:border-none flex flex-col gap-y-1' >
        <label htmlFor='email' className='font-mina text-sm pt-3 pl-4 sm:pt-0 sm:pl-0 sm:text-[14px] md:text-[16px] text-[#484848]  lg:text-lg xl:text-xl'>

        Email Address</label>
        <div className='sm:hidden mt-1  border h-px border-white/40'></div>
        <input
         id='email'
          type="email"
          name="email"
          value={formData.email}
          placeholder='Enter your email address'
          onChange={handleChange}
          className='bg-transparent border-b border-[#666666] py-2 sm:w-[200px] md:w-[270px] lg:w-[350px]   xl:w-[480px] placeholder:text-gray-400 focus:border-[#D9D9D9] focus:outline-none  text-white/90 pt-3 pl-4 sm:pt-0 sm:pl-0 sm:placeholder:text-[16px] lg:placeholder:text-lg !important'
          autoComplete="off"
        />
  
    </div>
      
    </div>
      
   <div className='mt-8 sm:mt-16 md:mt-12 flex flex-col lg:gap-1 border sm:border-none'>
        <label  htmlFor="message" className='font-mina pt-3 pl-4 sm:pt-0 sm:pl-0 text-sm text-[#484848] lg:text-lg'>
        Your Message
          </label>
          <div className='sm:hidden mt-2 mb-2  border h-px border-white/40'></div>
        <textarea
        id='message'
          name="message"
          value={formData.message}
          onChange={handleChange}  
          placeholder="Hi there! Kindly share any internship opportunities, questions, or ideas. I'm excited to explore how I can contribute!"
          className='bg-transparent border-b border-[#666666] py-2 w-full placeholder:text-[16px] focus:border-[#D9D9D9] focus:outline-none  placeholder:text-gray-400 text-white/90 placeholder:text-sm sm:placeholder:text-[16px] lg:placeholder:text-lg xl:placeholder:text-xl !important pb-10 sm:pb-0 px-4 sm:px-0 '
          autoComplete="off"
        />
    
   </div>
     
      <button type="submit" className='mt-8 sm:mt-7 md:mt-10 border p-1 sm:p-2  md:p-[10px] xl:p-3 w-full text-sm sm:text-[16px] md:text-lg xl:text-xl font-megrim text-[#D9D9D9] hover:bg-white/80  hover:text-black hover:font-semibold cursor-pointer'>LET'S GO</button> 
    </form>  
            </div>

            <div className='relative z-30 flex space-x-5 mt-7 mb-2 items-center justify-center '>
                 <a href="https://github.com/michaelebube" target="_blank" rel="noopener noreferrer">
        <FaGithub  className="text-gray-500 hover:text-black transition-colors duration-300 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" />
      </a>
      <a href="https://www.linkedin.com/in/michael-ebube-113ab82a7/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-500 hover:text-blue-600 transition-colors duration-300 w-6 h-6  sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" />
      </a>
            </div>

      {showSuccessMessage ? <div className='mb-3 mt-2 w-full'> 
        <div class=" mt-1 alert alert-outline alert-success alert-[#666666] flex items-center gap-5 w-full " role="alert">
  <span class="icon-[tabler--circle-check] size-6"></span>
  <p>Sent! Thanks for reaching out.
  </p>
</div>
      </div> : " "
}

      {showErrorMessage ? <div>
        <div class="alert alert-soft alert-error" role="alert">
  Oops! It seems there was an unexpected error. Please try again later.
</div>
      </div> :  "" }


                

           </div>


           

    </div>
   </>
  )
}

export default Contact