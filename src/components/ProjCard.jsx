import React from 'react'

const ProjCard = ({data}) => {
  return (
    <>
          <div className="bg-transparent  border-[#666666] border-[2px] rounded-sm p-4 w-full  md:max-w-[400px] lg:max-w-[450px] xl:max-w-[420px]  mt-12 xl:mt-16 shadow-lg hover:scale-105 transition">
      <div className="pb-2 mb-4  ">
        <h1 className="text-white/90 text-[16px] sm:text-lg font-semibold font-mina">{data.title}</h1>
        <div className='-mx-4 border border-[#666666] md:max-w-[109.5%] lg:w-[108%] xl:w-[108.5%] mt-2 '></div>
      </div>
      
      
      <div className="mb-8 h-[100px] sm:h-[80px] md:h-[150px] lg:h-[120px]">
        <p className="text-[#c7c1c1] text-sm  sm:text-[16px] font-mina">{data.description}</p>
      </div>

      <div className="flex space-x-4 border-t border-[#666666] -mx-4 md:w-[109%] lg:w-[108%] xl:w-[108.5%] pl-4 font-poiret [40px]  ">
        <a href={data.demoLink} target='_blank' rel="noopener noreferrer">
           <button className="border border-[#666666] text-[#BDB9B9] py-1 px-3 rounded-sm mt-4 hover:bg-gray-500 hover:text-white transition">
          Live Demo
        </button>
        </a>
       
       <a href={data.gitLink}>
             <button className="border border-[#666666] text-[#BDB9B9] py-1 px-3 rounded-s mt-4 hover:bg-gray-500 hover:text-white transition">
          View Code
        </button>
       </a>
     
      </div>
    </div>
    </>
  )
}

export default ProjCard