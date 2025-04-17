'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; 

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative border text-black rounded-xl p-6 mb-4 transition-all duration-300 ${
        isOpen ? 'bg-white' : 'bg-peach-100'
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <button className="text-2xl">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-700 border-t pt-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
