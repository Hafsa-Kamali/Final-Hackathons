"use client";
import React, { useState } from 'react';
import NavMobile from '../Homepage/MobileNav';
import Image from 'next/image';
import PricingFAQs from '@/components/PricingFaqs';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Footer from '../Homepage/Footer';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: Feature[];
  highlighted?: boolean;
}

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "FREE",
      price: 0,
      description: "Organize across all apps by hand",
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email support", included: false }
      ],
    },
    {
      name: "STANDARD",
      price: 9.99,
      description: "Organize across all apps by hand",
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email support", included: false }
      ],
      highlighted: true,
    },
    {
      name: "PREMIUM",
      price: 19.99,
      description: "Organize across all apps by hand",
      features: [
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "Unlimited product updates", included: true },
        { text: "1GB Cloud storage", included: false },
        { text: "Email support", included: false }
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-family">
      {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-6 hidden md:block">
        <div className="flex justify-between items-start ml-3">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Bandage</h1>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/Shop" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/Contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sky-500 hover:text-sky-600 font-bold">Login</button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md flex items-center gap-2">
              Become a member
              <span>→</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
      <h1 className="text-2xl font-bold text-center py-6">Bandage</h1>
        <button 
          onClick={() => setShowNav(true)}
          className="p-4 text-gray-600 absolute right-0 top-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
       
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center space-y-4 mb-8">
          <p className="text-gray-600 uppercase">PRICING</p>
          <h2 className="text-4xl font-bold text-gray-900">Simple Pricing</h2>
          
          <div className="flex justify-center items-center gap-2 text-sm">
            <Link href="/" className="text-gray-900">Home</Link>
            <span>{">"}</span>
            <Link href="/Pricing" className="text-gray-600">Pricing</Link>
          </div>
        </div>

        <div className="bg-[#FAFAFA] p-4 md:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h3 className="text-3xl font-bold mb-4">Pricing</h3>
            <p className="text-gray-600">
              Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8 md:mb-12">
            <span className={`${!isYearly ? 'text-sky-500' : 'text-gray-600'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`
                relative w-12 h-6 rounded-full 
                transition-colors duration-200 
                border-2 outline-none
                focus:ring-2 focus:ring-sky-400 focus:ring-offset-2
                ${isYearly ? 'bg-sky-400 border-sky-400' : 'bg-gray-300 border-sky-400'}
              `}
            >
              <div
                className={`
                  absolute left-0.5 top-0.5 
                  w-4 h-4 bg-white rounded-full shadow-md 
                  transition-transform duration-200
                  ${isYearly ? 'translate-x-5' : 'translate-x-0'}
                `}
              />
            </button>
            
            <span className={`${isYearly ? 'text-sky-500' : 'text-gray-600'}`}>
              Yearly
            </span>
            
            {isYearly && (
              <span className="bg-blue-100 text-sky-500 px-3 py-1 rounded-full text-sm">
                Save 25%
              </span>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  rounded-lg p-6 md:p-8 
                  ${plan.highlighted ? 'bg-[#252B42]' : 'bg-white'}
                  shadow-lg transform hover:scale-105 transition-transform duration-300 
                  border-2 border-sky-500 md:rounded-xl
                `}
              >
                <h4 className={`text-xl font-bold mb-4 text-center ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>{plan.name}</h4>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-gray-300' : 'text-gray-600'
                }`}>{plan.description}</p>
                
                <div className="flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-sky-500">{plan.price}</span>
                  <span className="text-lg ml-1 text-sky-500">$
                    <span className="text-sm ml-2">Per Month</span>
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className={`rounded-full p-1 ${
                        feature.included ? 'bg-green-500' : 'bg-gray-400'
                      }`}>
                        <svg 
                          className={`w-6 h-6 ${
                            feature.included ? 'text-white' : 'text-white'
                          }`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                      <span className={`text-sm ${
                        plan.highlighted 
                          ? 'text-white' 
                          : feature.included 
                            ? 'text-gray-900' 
                            : 'text-gray-500'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`
                    w-full py-3 px-6 rounded-lg font-medium
                    transition-colors duration-200
                    ${plan.highlighted 
                      ? 'bg-white text-gray-900 hover:bg-gray-100' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                    }
                  `}
                >
                  Try for free
                </button>
              </div>
            ))}
          </div>
           {/* Logo Section */}
           <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 text-center mt-14">
  Trusted by Over 4000 Big Companies
</h2>
<div className="flex justify-center items-center"> 
  <div className="lg:flex grid md:grid-cols-4 xl:grid-cols-3 sm:grid-cols-1 md:justify-center space-y-6 md:space-x-10 mt-14">
    <Image
      src="/assets/hooli.png?text=hooli"
      alt="hooli logo"
      width={150}
      height={150}
      className="h-20"
    />
    <Image
      src="/assets/lyft.png?text=lyft"
      alt="lyft logo"
      width={150}
      height={150}
      className="h-20"
    />
    <Image
      src="/assets/fa-brand.png?text=fa-brand"
      alt="fa logo"
      width={150}
      height={150}
      className="h-20"
    />
    <Image
      src="/assets/stripe.png?text=stripe"
      alt="stripe logo"
      width={150}
      height={150}
      className="h-20"
    />
    <Image
      src="/assets/aws.png?text=aws"
      alt="aws logo"
      width={150}
      height={150}
      className="h-20"
    />
    <Image
      src="/assets/robot.png?text=reddit"
      alt="reddit logo"
      width={150}
      height={150}
      className="h-20"
    />
  </div>
</div>
        </div>

       <PricingFAQs/>
      </main>
      {/* Social Section */}
      <div className="bg-white flex flex-col items-center justify-center mt-4">
      <h1 className="md:text-4xl font-bold mb-6 text-xl">Start your 14 days free trial</h1>
      <p className=" text-md md:text-lg mb-8">
        Met minim Mollie non desert Alamo est sit cliquy dolor do met sent. RELIT official consequent.
      </p>
      <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
        Try it free now
      </button>
      <div className="mt-8 flex space-x-6 ">
        <Link href="#" className="text-sky-500 hover:text-sky-600 text-4xl">
        <FaTwitter />
        </Link>
        <Link href="#" className="text-blue-500 hover:text-blue-600 text-4xl">
        <FaFacebookSquare />
        </Link>
        <Link href="#" className=" text-black hover:bg-clip-text  hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-4xl">
        <FaInstagram />
        </Link>
        <Link href="#" className="text-sky-700 hover:text-sky-800 text-4xl">
        <FaLinkedin />
        </Link>
      </div>
    </div>
    <div className='mt-28'>
      <Footer />
    </div>
    </div>
  );
};

export default PricingPage;