'use client'

import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import messageImage from '../assets/images/message.png';
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from "react";


export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress}= useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  

  
   const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
       
     
       <motion.div
       style={{translateY}}
       >
        <Image src={messageImage} alt="" className="absolute -top-[120px] right-[calc(100%+24px)] "/>
       </motion.div>
        <h2 className=" font-bold text-5xl tracking-tighter sm:text-6xl">
        Contact Me Now
        </h2>
        <p className="text-xl text-white/70 mt-5" >
        Let’s collaborate on your next project for app development, backend services, and tech solutions.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="Enter your email" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"/>

          <button className="bg-white text-black h-12 rounded-lg font-bold px-5 border hover:border-purple-500">
  Send Email
</button>

          
          
        </form>
        </div>
      </div>
  );
};

export default CallToAction;