"use client"
import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <li className="border-t border-zinc-700">
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg text-white font-sans"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1">{question}</span>
        {isOpen ? (
          // Minus icon when open
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 ml-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        ) : (
          // Plus icon when closed
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 ml-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        )}
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight }}
      >
        <div className="pb-5 leading-relaxed text-white font-sans">
          <div className="space-y-2">{answer}</div>
        </div>
      </div>
    </li>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is dedicated hosting?',
      answer: 'Dedicated hosting provides an entire server exclusively for your website. This results in enhanced performance, security, and reliability.'
    },
    {
      question: 'How does dedicated hosting improve performance?',
      answer: 'Since server resources are not shared, your site benefits from increased processing power and faster load times, even during peak traffic.'
    },
    {
      question: 'What security measures are included with dedicated hosting?',
      answer: 'Our dedicated servers come with advanced firewalls, DDoS protection, and regular security audits to ensure your data remains safe and secure.'
    },
    {
      question: 'Can I customize server configurations?',
      answer: 'Yes, you can upgrade resources like RAM, storage, and CPU power to match your specific business requirements and anticipated growth.'
    },
    {
      question: 'What support options do you offer?',
      answer: 'We provide 24/7 technical support, along with managed service options, so you can focus on your business while we take care of your server.'
    },
    {
      question: 'How do I migrate my existing website to a dedicated server?',
      answer: 'Our migration team will assist you in moving your website with minimal downtime, ensuring a seamless transition to a dedicated hosting environment.'
    }
  ];

  return (
    <div className="bg-zinc-800 py-24 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="ls font-semibold text-[#7964e4] text-xl uppercase">
            Dedicated Hosting FAQ
          </p>
          <p className="ls sm:text-6xl text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </ul>
      </div>
    </div>
  );
}