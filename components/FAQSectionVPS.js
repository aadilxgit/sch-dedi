"use client"
import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <li className="border-b border-zinc-800/20">
      <button
        className="relative flex items-center w-full py-4 text-base font-semibold text-left md:text-lg text-white font-sans"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-[85%] mx-auto flex justify-between items-center">
          <span className="flex-1">{question}</span>
          {isOpen ? (
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 ml-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight }}
      >
        <div className="pb-5 leading-relaxed text-white font-sans w-[85%] mx-auto">
          <div className="space-y-2">{answer}</div>
        </div>
      </div>
    </li>
  );
};

export default function FAQSectionVPS() {
  const faqs = [
    {
      question: 'What is VPS hosting?',
      answer: 'VPS (Virtual Private Server) hosting provides a virtualized server environment that simulates a dedicated server within a shared hosting environment. You get allocated resources and full root access, making it ideal for growing websites and applications.'
    },
    {
      question: 'How quickly can I set up a VPS?',
      answer: 'Our VPS provisioning is nearly instant. Once your order is processed, you can access your virtual server within minutes. Choose your preferred operating system and start deploying your applications right away.'
    },
    {
      question: 'What control do I get with a VPS?',
      answer: 'You get full root access to your VPS, allowing you to install any compatible software, configure server settings, and manage your environment through SSH or our control panel. It offers the flexibility of a dedicated server at a fraction of the cost.'
    },
    {
      question: 'Can I upgrade my VPS resources?',
      answer: 'Yes, you can easily scale your VPS resources (CPU, RAM, storage) up or down based on your needs. Resource upgrades are applied instantly with minimal to no downtime, ensuring your services remain available.'
    }
  ];

  return (
    <div className="bg-zinc-950">
      <div className="p-5 py-24 container mx-auto flex flex-col gap-12 px-[44px]">
        <div className="mx-auto max-w-2xl lg:text-center mb-8">
          <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
            FAQs
          </span>
          <p className="mt-2 ls sm:text-6xl text-5xl font-black text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg/8 text-zinc-300">
            Find answers to common questions about our VPS hosting services
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <ul className="divide-y divide-zinc-800/20">
            {faqs.map((faq, idx) => (
              <FAQItem 
                key={idx} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}