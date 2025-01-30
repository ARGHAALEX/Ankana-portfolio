import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/profile.png"
import { motion } from "framer-motion"

const container =(delay)=>({
   hidden:{x:-100 ,opacity:0},
   visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5  ,delay:delay}
   },
})

const Hero = () => {
return (
   <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center'>
          <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start h-full'>
               <motion.h1 initial={{x:-100 , opacity:0}} animate={{x:100,opacity:1}} transition={{duration:0.5,delay:2}} className='pb-16 text-6xl font-thin tracking-tight  lg:text-8xl lg:ml-4'>Ankana Dey</motion.h1>
               <motion.span initial={{x:-100 , opacity:0}} animate={{x:100,opacity:1}} transition={{duration:0.5,delay:3}}  className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent lg:ml-4'>Cyber Security Engineer</motion.span>
               <motion.p initial={{x:-100 , opacity:0}} animate={{x:100,opacity:1}} transition={{duration:0.5,delay:3.5}}  className='my-2 max-w-xl py-6 font-light tracking-tighter lg:ml-4'>{HERO_CONTENT}</motion.p>
          </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
               <motion.img initial={{x:100,opacity:0}} 
               animate={{x:0 , opacity:1}}
               transition={ {duration:1 , delay:2}}
                src={profilePic} alt="" className='rounded-2xl w-[50%]' />
          </div>
          </div>
      </div>
   </div>
)
}

export default Hero