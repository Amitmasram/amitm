'use client';
import { Feature } from "./Feature";
import TourEaseImage from '../assets/images/tourease.png';
import CaredashImage from '../assets/images/caredash.png';
import ProfinderImage from '../assets/images/profinder.png';

const features = [
  {
    title: "TourEase - App",
    description:
      "Developed a Flutter-based virtual tour guide ​app with AI-driven recommendations, ​Firebase integration, and Google Maps API, ​enhancing user engagement.",
    image: TourEaseImage,
    github: "https://github.com/Amitmasram/TourEase_App",
  },
  {
    title: "CareDash - App",
    description:
      "Created a Flutter-based app for booking the nearest ambulance in real-time, ensuring quick and efficient emergency response.",
    image: CaredashImage,
    github: "https://github.com/Amitmasram/CareDash_App",
  },
  {
    title: "ProFinder - SaaS App",
    description:
      "Streamlined the process of finding skilled professionals for various home services, connecting users with nearby experts efficiently and transparently.",
    image: ProfinderImage,
    github: "https://github.com/Amitmasram/ProFinder---App",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Software Dev Projects
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-center mt-5 text-xl text-white/70">
            Explore my standout projects, highlighting expertise in user-centric designs and cutting-edge solutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
          {features.map(({ title, description, image, github }) => (
            <Feature title={title} description={description} image={image} github={github} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
