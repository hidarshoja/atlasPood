import  { useState } from 'react';
import faqs from '../data/FaqsData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function DetailsBox() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xl mx-auto mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-brown5 py-2">
              <h3 
                className="cursor-pointer font-semibold text-base  text-brown3 flex justify-between items-center" 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="ml-2">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      );
}


