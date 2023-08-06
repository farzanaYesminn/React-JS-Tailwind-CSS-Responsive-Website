import React from 'react'
import {BiLogoHtml5} from 'react-icons/bi';
import {DiCss3, DiJavascript} from 'react-icons/di';
import {FaBootstrap, FaReact} from 'react-icons/fa';
import {BiLogoTailwindCss, BiLogoMongodb} from 'react-icons/bi';


const Skills = () => {
  return (
    <>
    <h1>Skills</h1>
    <div className='container bg-white grid gap-x-8 gap-y-8 grid-cols-4 '>
        <div >
            <BiLogoHtml5 className='h-20 w-20'/>
        </div>
        <div>
            <DiCss3 className='h-20 w-20'/>
        </div>
        <div>
            <FaBootstrap className='h-20 w-20'/>
        </div>
        <div>
            <BiLogoTailwindCss className='h-20 w-20'/>
        </div>
        <div>
            <DiJavascript className='h-20 w-20'/>
        </div>
        <div>
            <FaReact className='h-20 w-20'/>
        </div>
        <div>
            <BiLogoMongodb className='h-20 w-20'/>
        </div>
        <div>
            <FaReact className='h-20 w-20'/>
        </div>
    </div>

    </>
  )
}

export default Skills