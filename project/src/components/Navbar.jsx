import React, { useState } from 'react';
import {BiMenu} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
    const[nav,setnav] = useState(false)
    
    const handleNav = () => {
      setnav(!nav) 
    }

  return (
    <div className='flex justify-between items-center h-24 max-width-[1240px] text-white mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[rgb(0,223,154)]'>PORTFOLIO</h1> 
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Education</li>
            <li className='p-4'>Skills</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <BiMenu size={30}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-600': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] px-4 py-8'>PORTFOLIO</h1> 
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Education</li>
            <li className='p-4 border-b border-gray-600'>Skills</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
