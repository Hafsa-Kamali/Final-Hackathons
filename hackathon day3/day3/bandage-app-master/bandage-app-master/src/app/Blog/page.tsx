"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Footer from '../Homepage/Footer';
import NavMobile from '../Homepage/MobileNav';

const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);
  const team = [
    { username: "Username", profession: "Profession" , image: "/assets/team/team-1-user-1.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/media.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/team-1-user-3.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/media-1.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/team-1-user-2.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/team-1-user-3-1.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/media-2.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/media-3.png" },
    { username: "Username", profession: "Profession" , image: "/assets/team/team-1-user-3-2.png" },
  ];
  
  const Fashion = [
    { title: "Coat", image: "/assets/black (2).png" },
    { title: "Jeans Jackets", image: "/assets/black (5).png" },
    { title: "Hoodies", image: "/assets/black (1).png" },
    { title: "Shirts", image: "/assets/black (4).png" },
  ];

  return (
    <div className="min-h-screen font-family">
      <header>
      {/* Navigation */}
      <nav className="md:flex justify-between items-center hidden p-4 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="text-2xl font-bold md:ml-3 hover:text-sky-500 transition-colors duration-300">Bandage</div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Product', 'Pricing', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item === 'Home' ? '' : item}`} 
              className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-sky-500 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-sky-500 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sky-500 transition-all duration-300 hover:text-sky-600 hover:scale-105">Login</button>
          <button className="bg-sky-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:scale-105">
            Become a member
          </button>
        </div>
         
      </nav>
       {/* Mobile Navigation */}
       <div className="md:hidden ">
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

      {/* Hero Section */}
      <section className="text-center py-16">
        <p className="text-gray-600 mb-2 hover:text-sky-500 transition-colors duration-300">WHAT WE DO</p>
        <h1 className="text-6xl md:text-6xl font-bold mb-4 hover:text-sky-500 transition-colors duration-300 sm:p-6">Innovation tailored for you</h1>
        <div className="flex items-center justify-center space-x-2">
          <Link href="/" className="text-gray-600 hover:text-sky-500 transition-colors duration-300">Home</Link>
          <span>{">"}</span>
          <Link href="/Blog" className="text-gray-900 hover:text-sky-500 transition-colors duration-300">Team</Link>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-1 h-100 relative overflow-hidden group">
          <Image 
            src="/assets/black (3).png" 
            alt="Fashion model" 
            width={700} 
            height={530} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {Fashion.map((item, index) => (
            <div key={index} className="md:h-46 h-80 overflow-hidden group relative">
              <Image 
                src={item.image} 
                alt="Fashion item" 
                width={361} 
                height={260} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 hover:text-sky-500 transition-colors duration-300">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 h-64 overflow-hidden relative">
                <Image 
                  src={member.image} 
                  alt={member.username} 
                  width={329} 
                  height={231} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-sky-500 transition-colors duration-300">{member.username}</h3>
              <p className="text-gray-600 mb-3">{member.profession}</p>
              <div className="flex justify-center space-x-4">
                {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                  <Icon 
                    key={i} 
                    className="text-2xl text-sky-500 transition-all duration-300 hover:text-sky-600 hover:scale-125 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-white flex flex-col items-center justify-center mt-4">
        <h1 className="md:text-4xl font-bold mb-6 text-xl hover:text-sky-500 transition-colors duration-300">
          Start your 14 days free trial
        </h1>
        <p className="text-md md:text-lg mb-8 hover:text-sky-500 transition-colors duration-300">
          Met minim Mollie non desert Alamo est sit cliquy dolor do met sent. RELIT official consequent.
        </p>
        <button className="bg-sky-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:scale-105">
          Try it free now
        </button>
        <div className="mt-8 flex space-x-6">
          {[
            { Icon: FaTwitter, color: "text-sky-500 hover:text-sky-600" },
            { Icon: FaFacebookSquare, color: "text-blue-500 hover:text-blue-600" },
            { Icon: FaInstagram, color: "text-black hover:text-pink-500" },
            { Icon: FaLinkedin, color: "text-sky-700 hover:text-sky-800" }
          ].map(({ Icon, color }, index) => (
            <Link 
              key={index} 
              href="#" 
              className={`${color} text-4xl transition-all duration-300 hover:scale-125`}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;