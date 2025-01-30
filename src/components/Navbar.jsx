import React from 'react';
 // Make sure to create a CSS file for styling
import logo from '../assets/KevinRushLogo.png';
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion"

const Navbar = () => {
   return (
      <motion.nav 
      whileInView={{opacity:1, y:1}}
       initial={{opacity:1, y:-100}}
       transition={{duration:0.7}}
      className="mb-10 
 flex items-center justify-between py-6">
         <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt=""  className='mx-2 w-10'/>
         </div>
         <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

        <button><a href="https://in.linkedin.com/"><CiLinkedin /></a></button> 
        <button><a href="https://x.com/?lang=en"> <FaXTwitter /></a></button>       
       <button><a href="https://github.com/ANKANAARGHA"><FaGithubAlt /></a></button>  
        <button><a href=""><SiLeetcode /></a></button> 
         </div>
      </motion.nav>
   );
};

export default Navbar;