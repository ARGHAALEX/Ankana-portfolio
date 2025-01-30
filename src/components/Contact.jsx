import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-10 text-center text-6xl'> Get in <span className='text-neutral-400'>Touch</span></motion.h1>
      <motion.div
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:100}}
         transition={{duration:1.5}}
      className='text-center tracking-tighter'>
         <p className='my-4'>{CONTACT.address}</p>
         <p className='my-4'>{CONTACT.phoneNo}</p>
         <a href="#" className='border-b underline decoration-pink-500'>{CONTACT.email}</a>
      </motion.div>
      </div>
  )
}

export default Contact