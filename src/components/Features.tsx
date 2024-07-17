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
      "Created a Flutter-based app for booking the nearest ambulance in real-time, ensuring quick and efficient emergency response.",
  },
  {
    title: "ProFinder - SaaS App",
    description:
      "Streamlined the process of finding skilled professionals for various home services, connecting users with nearby experts efficiently and transparently.",
  },
  // {
  //   title: "SocialConnect - App",
  //   description:
  //     "Built a social networking app that fosters community engagement and interaction with real-time chat and activity feeds.",
  // },
  // {
  //   title: "ShopEase - E-commerce App",
  //   description:
  //     "Developed an e-commerce app providing a seamless shopping experience with secure payment integration and user-friendly design.",
  // },
  // {
  //   title: "TradeTracker - App",
  //   description:
  //     "Created a trading app that offers real-time market data, portfolio management, and trade execution for users.",
  // },
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
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title}/>
          ))}
        </div>
      </div>
    </div>
  );
};
