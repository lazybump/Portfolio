import React, { useState } from "react";
import faq from "../data/faq.json";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 lg:py-28" id="FAQs">
      <h2 className="text-white text-4xl mb-8">FAQ</h2>
      <ul>
        {faq.map((pair, index) => (
          <li
            key={index}
            className="border-b-2 border-primary cursor-pointer py-6"
            onClick={() => toggleAccordion(index)}
          >
            <header className="flex justify-between items-center ">
              <h3 className="text-white w-4/5 md:text-xl">{pair.question}</h3>
              <FaChevronDown
                className={`text-gray-400 md:text-xl ${
                  activeIndex === index ? "transform rotate-180" : ""
                } transition-transform duration-500`}
              />
            </header>
            <p
              className={`mt-5 text-gray-400 text-sm md:text-lg overflow-hidden transition-all duration-500 ${
                index === activeIndex ? "max-h-20" : "max-h-0"
              }`}
            >
              {pair.answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
