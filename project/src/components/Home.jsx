import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className='container text-white flex  sm:text-[10px] flex-row lg:pl-[5%]'>
            <div className='max-w[800px] mt[-96px] w-full h-1/2 mx-auto text-center flex flex-col  
           lg:pt-[15%] md:pt-[18%] sm:text-[10px] lg:py-[20%]'>
                    <h1 className='sm:text-2xl md:text-4xl text-1xl font bold '>FARZANA YESMIN</h1>
                    <p className='text-[#00df9a] md:text-2xl sm:text-[15px] text-[10px] font-bold p-1 '>Software Engineer</p>
                    <div className='md:flex justify-center items-center md:text-4xl text-1xl pt-2'>
                        <p className='sm:text-[15px] text-[12px]'>Also I have knwoledge about  </p>
                        <Typed className='pl-2 sm:text-[12px] text-[12px] text-[#0e9f44ec]'strings={['Content Create', 'Graphics Design', 'Video Edit']} typeSpeed={100} backSpeed={60}  loop/>
                    </div>
                    <div className='flex justify-around '>
                    <button class='bg-[#00df9a] md:w-[200px] sm:w-[200px] rounded-md font-medium my-6 md:mx-auto px-3 md:py-3 sm:py-3 text-black md:text-2xl sm:text-[8px] text-[15px]'>Hire Me</button>
                    </div>
                    

            </div>
            <div class='md:w-[1200px] w-full md:h-1/2 lg:h-1/4 lg:pr-[8%]  sm:h-1/2 lg:h-1/4 sm:pr-0'>
                <img src='../assets/jule.png'/>
            </div>

    </div>
  )
}

export default Home