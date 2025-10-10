import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    question: 'When will this ship?',
    answer: "Pre-launch orders ship within 2-3 weeks. You'll receive tracking information as soon as your order is processed."
  }, {
    question: 'How is this different from Branch Basics or other concentrates?',
    answer: 'Moonrise uses surface-activated chemistry with low-volatility propylene glycol ethers that cannot produce toxic metabolites—a fundamental chemical difference. Our formula has no VOC emissions, unlike conventional cleaners and other "natural" brands. Plus, our triple-chelation system works in any water hardness without performance loss.'
  }, {
    question: 'Is there a guarantee?',
    answer: "Yes—60 days to try it completely risk-free. If you experience any health reactions OR if it doesn't outperform your current cleaner, return it for a full refund."
  }, {
    question: 'Will this work in my hard water area?',
    answer: 'Absolutely. The triple-chelation system (GLDA, MGDA, citric acid) is specifically engineered to handle any water hardness—from very soft to extremely hard. MGDA works across pH ranges from 2 to 13.5, ensuring consistent performance regardless of your water chemistry.'
  }, {
    question: 'How much does shipping cost?',
    answer: 'Shipping is $7.95 for single bottles, FREE on orders over $99.'
  }];
  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#333333]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <div key={index} className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden">
              <button className="w-full text-left p-4 flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(index)}>
                <span className="font-medium text-[#333333]">
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUp size={20} className="text-[#2C5F2D]" /> : <ChevronDown size={20} className="text-[#2C5F2D]" />}
              </button>
              {openIndex === index && <div className="p-4 pt-0 text-gray-700 border-t border-gray-100">
                  {faq.answer}
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};