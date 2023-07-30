import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className='container text-white flex  sm:text-[10px]'>
            <div className='max-w[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col  
           pt-[10%] sm:text-[10px] justify-left'>
                    <h1 className='md:text-6xl sm:text-4xl md:text-6xl font bold md:py-6'>FARZANA YESMIN</h1>
                    <p className='text-[#00df9a] md:text-4xl  text-2xl font-bold p-1 '>Software Engineer</p>
                    <div className='md:flex justify-center items-center md:text-4xl pt-2'>
                        <p className='sm:text-[15px]'>Also I have knwoledge about  </p>
                        <Typed className='pl-2 sm:text-[15px] text-[#0e9f44ec]'strings={['Content Create', 'Graphics Design', 'Video Edit']} typeSpeed={100} backSpeed={60}  loop/>
                    </div>
                    <div className='flex justify-around '>
                    <button class='bg-[#00df9a] md:w-[200px] sm:w-[150px] rounded-md font-medium my-6 mx-auto px-0 md:py-3 sm:py-2 text-black md:text-2xl sm:text-[15px]'>Hire Me</button>
                    </div>
                    

            </div>
            <div class='lg:w-[750px] w-full h-1/2 '>
                <img src='../assets/jule.png'/>
            </div>

    </div>
  )
}

export default Home