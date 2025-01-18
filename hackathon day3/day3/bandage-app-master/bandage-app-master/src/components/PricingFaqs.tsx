
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
interface FAQ {
  question: string;
  answer: string;
}

const PricingFAQs = () => {
  const faqs: FAQ[] = [
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    },
    {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
      },
      {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
      },
      {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
      },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 font-family">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4 font-family">
          Pricing FAQs
        </h2>
        <p className="text-gray-400 md:w-[40%] max-w-2xl font-semibold mx-auto font-family">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics
        </p>
      </div>

      {/* FAQs Grid */}
      <div className="grid md:grid-cols-2 gap-8 font-family">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-sky-500 mt-1"><MdOutlineKeyboardArrowRight /></div>
              <div>
                <h3 className="font-semibold text-[#252B42] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="text-center mt-12 font-family">
        <p className="text-gray-600">
          Haven&apos;t got your answer? Contact our support
        </p>
      </div>
    </div>
  );
};

export default PricingFAQs;