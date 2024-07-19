'use client';
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="py-7 border-b border-white/30 cursor-pointer" onClick={() => setOpen(!isOpen)}>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-4 text-center" // Center aligning the content
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: 16,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  const items = [
    {
      question: "Do you offer freelance services?",
      answer:
        "Yes, I offer freelance development services. Feel free to contact me with your project details, and I'll be happy to discuss how I can help.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in Flutter,React and Node.js , among other technologies. I'm proficient in both frontend and backend development.",
    },
    {
      question: "How can I hire you for a project?",
      answer:
        "You can hire me by contacting me directly through my website or LinkedIn profile. Let's discuss your project requirements and how I can assist you.",
    },
    {
      question: "Do you provide maintenance and support after project completion?",
      answer:
        "Yes, I offer maintenance and support services post-project completion. I ensure your application runs smoothly and stays updated with the latest technologies.",
    },
  ];

  // Render FAQ items here...

  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl max-w-[648px] mx-auto tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
