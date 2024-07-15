'use client'
import appScreen from "../assets/images/app-screen.png";
import vsScreen from "../assets/images/portfo.png";
import vsScreen2 from "../assets/images/service.png";

import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const { scrollY } = useViewportScroll();
  const appImageRef = useRef<HTMLDivElement>(null);

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const rotateX = useTransform(scrollY, [0, 300], [15, 0]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Services I Offer</h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-center mt-5 text-xl text-white/70">
" I manage app development with cultivated efficiency, providing a top-class experience."
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            perspective: "800px",
            display: "flex",
            justifyContent: "center", // Center align horizontally
          }}
          ref={appImageRef}
        >
          <Image
            src={vsScreen2}
            alt="The product screenshot"
            className="mt-14"
            layout="intrinsic"
            width={700} // Adjust width for desktop size
            height={300} // Adjust height for desktop size
          />
        </motion.div>
      </div>
    </div>
  );
};
