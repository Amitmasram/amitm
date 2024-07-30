'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import LinkIcon from '../assets/images/external-link.png';
import GithubIcon from '../assets/images/githubl.png';

export const Feature = ({ title, description, image, github }: { title: string, description: string, image: StaticImageData, github: string }) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.x);
      offsetY.set(e.clientY - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex justify-center items-center rounded-lg mx-auto" style={{ height: '240px', width: '240px' }}>
        <Image src={image} alt={title} className="object-cover rounded-lg" style={{ height: '100%', width: '100%' }} />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image src={GithubIcon} alt="GitHub" width={24} height={24} />
        </a>
        {/* Placeholder for the Link icon, you can add the link URL when you have it */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src={LinkIcon} alt="Link" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};
