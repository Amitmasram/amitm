import { Feature } from "./Feature";

const features = [
  {
    title: "TourEase - App",
    description:
      "Developed a Flutter-based virtual tour guide ​app with AI-driven recommendations, ​Firebase integration, and Google Maps API, ​enhancing user engagement.",
  },
  {
    title: "CareDash - App",
    description:
      "I created a Flutter-based app for booking, ​managing, and canceling appointments in ​real time.",
  },
  {
    title: "SaaS - App",
    description:
      "Streamlining the process of finding skilled ​workers for diverse home services, from mobile ​repair to painting, by connecting users with ​nearby professionals efficiently and ​transparently.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
        Software Dev Vault
        </h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
        Explore my standout projects, highlighting expertise in user-centric designs and cutting-edge solutions.
        </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title}/>
          ))}
        </div>
      </div>
    </div>
  );
};
