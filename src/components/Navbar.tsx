'use client';
import { useState } from 'react';
import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';
import CloseIcon from '../assets/icons/icons8-close (2).svg'; // Assuming you have a close icon
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleHireMeClick = () => {
    window.location.href = 'mailto:amitmasram831@gmail.com';
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className='bg-black'>
        <div className="px-4">
          <div className="py-4 flex items-center justify-between">
            <div className='relative'>
              <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7))]'></div>
              <Image 
                src={logoImage} 
                alt="SaaS logo"
                className="h-12 w-12 relative"
              />
            </div>

            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden" onClick={toggleDrawer}>
              <MenuIcon className='text-white' />
            </div>

            <nav className='flex gap-6 items-center hidden sm:flex'>
              <a href='#home' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Home</a>
              <a href='#about' className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</a>
              <a href='#projects' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Projects</a>
              <a href='#services' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Services</a>
              <a href='#contact' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Contact</a>
              <motion.button
                onClick={handleHireMeClick}
                initial={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg, #A46EDB 0%, #4F21A1 100%)',
                  color: '#FFFFFF',
                }}
                animate={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                transition={{ duration: 0.3 }}
                className="py-2 px-4 rounded-lg font-bold cursor-pointer"
                style={{ border: '2px solid transparent' }}
              >
                Hire Me
              </motion.button>
            </nav>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="w-64 bg-black h-full flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl">Menu</h2>
            <CloseIcon className='text-white h-6 w-6 cursor-pointer' onClick={toggleDrawer} />
          </div>
          <nav className='flex flex-col gap-4'>
            <a href='#home' className='text-opacity-60 text-white hover:text-opacity-100 transition' onClick={toggleDrawer}>Home</a>
            <a href='#about' className='text-opacity-60 text-white hover:text-opacity-100 transition' onClick={toggleDrawer}>About</a>
            <a href='#projects' className='text-opacity-60 text-white hover:text-opacity-100 transition' onClick={toggleDrawer}>Projects</a>
            <a href='#services' className='text-opacity-60 text-white hover:text-opacity-100 transition' onClick={toggleDrawer}>Services</a>
            <a href='#contact' className='text-opacity-60 text-white hover:text-opacity-100 transition' onClick={toggleDrawer}>Contact</a>
            <motion.button
              onClick={() => {
                handleHireMeClick();
                toggleDrawer();
              }}
              initial={{ backgroundColor: '#FFFFFF', color: '#000000' }}
              whileHover={{
                scale: 1.05,
                background: 'linear-gradient(90deg, #A46EDB 0%, #4F21A1 100%)',
                color: '#FFFFFF',
              }}
              animate={{ backgroundColor: '#FFFFFF', color: '#000000' }}
              transition={{ duration: 0.3 }}
              className="py-2 px-4 rounded-lg font-bold cursor-pointer"
              style={{ border: '2px solid transparent' }}
            >
              Hire Me
            </motion.button>
          </nav>
        </div>
      </div>
    </>
  );
};
