// ./src/components/LogoTicker.tsx
'use client';
import flutterLogo from "../assets/images/flutter-logo.png";
import Image from 'next/image';
import nodejsLogo from "../assets/images/node logo.png";
import expressjsLogo from "../assets/images/expressjs.png";
import reactnativeLogo from "../assets/images/reactl.png";
import mongodbLogo from "../assets/images/mongo2.png";
import firebaseLogo from "../assets/images/firebaselo.png";
import supabaseLogo from "../assets/images/supab logo.png";
import dartLogo from "../assets/images/dartl.png";
import tsLogo from "../assets/images/tsl.png";
import javaLogo from "../assets/images/java.png";
import gitLogo from "../assets/images/gitl.png";
import githubLogo from "../assets/images/githubl.png";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const images = [
  { src: flutterLogo, alt: "Flutter Logo", name: "Flutter" },
  { src: reactnativeLogo, alt: "React Native Logo", name: "React.js" },
  { src: nodejsLogo, alt: "Node.js Logo", name: "Node.js" },
  { src: expressjsLogo, alt: "Express.js Logo", name: "Express.js" },
  { src: mongodbLogo, alt: "MongoDB Logo", name: "MongoDB" },
  { src: firebaseLogo, alt: "Firebase Logo", name: "Firebase" },
  { src: supabaseLogo, alt: "Supabase Logo", name: "Supabase" },
  { src: dartLogo, alt: "Dart Logo", name: "Dart" },
  { src: tsLogo, alt: "TypeScript Logo", name: "TypeScript" },
  { src: javaLogo, alt: "Java Logo", name: "Java" },
  { src: gitLogo, alt: "Git Logo", name: "Git" },
  { src: githubLogo, alt: "GitHub Logo", name: "GitHub" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const typingVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 2,
    },
  },
  finished: {
    borderRight: 'none',
    width: '100%',
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};

export const LogoTicker = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible").then(() => {
        controls.start("finished").then(() => {
          setIsFinished(true);
        });
      });
    }
  }, [controls, inView]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn}>
          <h3 className="text-xl text-center font-bold text-white opacity-100">
            About Me
          </h3>
        </motion.div>

        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn}>
          <div className="max-w-xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-center mt-5 max-w-3xl text-xl text-white/70 py-bottom"
            >
              Hey, I&apos;m Amit, a passionate software developer skilled in creating robust and scalable applications. With expertise in Flutter, React and Node.js. I specialize in both frontend and backend development. I&apos;m currently pursuing a B.Tech in Information Technology (2025). Occasionally, I contribute to projects and I&apos;m also an AI enthusiast, continuously expanding my skills and knowledge.
              <motion.span
                initial="hidden"
                animate="visible"
                variants={typingVariants}
                className={`inline-block overflow-hidden whitespace-nowrap ${isFinished ? '' : 'border-right-white'}`}
              ></motion.span>
            </motion.p>
          </div>
        </motion.div>

        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn}>
          <h2 className="text-xl text-center font-bold text-white opacity-100 mt-12">
            Tech-Stack & Languages
          </h2>
        </motion.div>

        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt, name }, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
                <span className="text-white mt-2">{name}</span>
              </div>
            ))}
            {images.map(({ src, alt, name }, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
                <span className="text-white mt-2">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
