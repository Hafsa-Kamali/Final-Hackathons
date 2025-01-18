"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMobile from '../Homepage/MobileNav';
import Footer from '../Homepage/Footer';
import { FaPlay } from "react-icons/fa";

const AboutUs: React.FC = () => {
    const [showNav, setShowNav] = useState(false);
    
  return (
    <div className="font-family">
      {/* Header Section */}
      <header className="flex justify-between items-center">
         {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-6 hidden md:block">
        <div className="flex justify-between items-start ml-3">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Bandage</h1>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/Shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
              <Link href="/Contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/Login" className="text-sky-500 hover:text-sky-600 font-bold">Login</Link>
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
</header>
      {/* Main Section */}
      <main className="container mx-auto px-4 md:px-8 lg:px-16">
        <section className="flex flex-col lg:flex-row items-center lg:justify-between ">
          {/* Text Section */}
          <div className="lg:w-2/3 space-y-6 text-center lg:text-left">
            <h2 className="text-sm md:text-[16px] uppercase font-semibold font-family text-gray-900">About Company</h2>
            <h1 className="text-4xl md:text-[85px] font-bold text-gray-900">About Us</h1>
            <p className="text-lg text-gray-600">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Quote Now
            </button>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
            <Image
              src="/assets/about.png"
              alt="Shopping Woman"
              width={632}
              height={612}
              className="rounded-lg w-3/4 lg:w-full"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12">
          <h2 className="text-gray-500 font-semibold text-lg md:text-2xl">Problems trying</h2>
          <p className="text-xl text-gray-700 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
          <p className="text-gray-600 mt-2">
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">15K</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">150K</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </section>

      </main>

      <main>
      {(() => {
        const teamMembers = [
          {
            name: 'Lawrence',
            role: 'Developer',
            image: '/assets/media(1).png',
            socials: ['facebook', 'twitter', 'linkedin']
          },
          {
            name: 'Lawrence',
            role: 'Developer',
            image: '/assets/media.png',
            socials: ['facebook', 'twitter', 'linkedin']
          },
          {
            name: 'Lawrence',
            role: 'Developer',
            image: '/assets/media(2).png',
            socials: ['facebook', 'twitter', 'linkedin']
          }
        ];

        return (
          <div className="w-full">
            {/* Hero Section */}
            <div className="relative w-full h-96">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/video card.png" 
                  alt="Mountain landscape" 
                  width={989}
                  height={540}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-400  rounded-full p-4">
                    <div> <FaPlay className='text-white text-lg'/></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="py-16 px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everyone trying to reach the specific function. We have huge space to 3 times or 4x your business numbers.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-64 h-64 mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={316}
                        height={241}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    <div className="flex justify-center gap-4 mt-2">
                      {member.socials.map((social, idx) => (
                        <span key={idx} className="text-blue-500">
                          {/* Social icons would go here */}
                          ●
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Companies Section */}
            <div className="py-16 px-4 bg-gray-50">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Big Companies Are Here</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everyone trying to reach the specific function. We have huge space to 3 times or 4x your business numbers.
                </p>
              </div>

               <div className="md:flex grid grid-cols-3 justify-center space-x-10 mt-10">
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

            {/* CTA Section */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 bg-blue-500 p-12 flex items-center justify-center">
                <div className="text-white max-w-md">
                  <h3 className="text-sm uppercase mb-2">WORK WITH US</h3>
                  <h2 className="text-3xl font-bold mb-4">Now Let's grow Yours</h2>
                  <p className="mb-6">
                    The brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                  </p>
                  <button className="bg-white text-blue-500 px-6 py-2 rounded">
                    Button
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/girl.png"
                  alt="Woman in coral sweater"
                  width={590}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      })()}
      </main>
      <Footer/>
    </div>
  );};

export default AboutUs;
