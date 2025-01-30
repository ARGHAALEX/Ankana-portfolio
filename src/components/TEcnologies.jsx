import React from 'react'
import{RiReactjsLine} from 'react-icons/ri';
import { SiKalilinux } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { animate, motion } from "framer-motion"


const iconVariants = (duration) =>({
   initial:{y:-10},
   animate:{
      y:[10,-10],
      transition:{
         duration: duration,
         ease:"linear",
         repeat:Infinity,
         repeatType:"reverse",
      },
   },
})


const TEcnologies = () => {
  return (
    <div className='borber-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}

      className='my-20 text-center text-4xl'>Tech<span className='text-neutral-400'>nologies</span></motion.h1>
      <motion.div whileInView={{opacity:1 , x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-10'>
         <motion.div 
         variants={iconVariants(2.5)}
         initial = "initial"
         animate="animate"
         className='rounded-2xl border-2 border-neutral-500  p-4'>
            <RiReactjsLine className='text-7xl text-blue-500' />
         </motion.div>
         <motion.div 
          variants={iconVariants(1.9)}
          initial = "initial"
          animate="animate"
         className='rounded-2xl border-2 border-neutral-500  p-4'>
            <SiKalilinux  className='text-7xl text-purple-500' />
         </motion.div>
         <motion.div 
          variants={iconVariants(2.5)}
          initial = "initial"
          animate="animate"
         className='rounded-2xl border-2 border-neutral-500  p-4'>
            <SiGnubash className='text-7xl text-blue-100' />
         </motion.div>
         <motion.div
          variants={iconVariants(4.5)}
          initial = "initial"
          animate="animate"
          className='rounded-2xl border-2 border-neutral-500  p-4'>
            <SiMysql className='text-7xl text-orange-500' />
         </motion.div>
         <motion.div
          variants={iconVariants(2.5)}
          initial = "initial"
          animate="animate"
          className='rounded-2xl border-2 border-neutral-500  p-4'>
            <RiTailwindCssFill  className='text-7xl text-blue-400' />
         </motion.div>
      </motion.div>
    </div>
  )
}

export default TEcnologies