import React from 'react';
import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Footer from '../Homepage/Footer';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">Bandage</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600">Home</Link>
          <Link href="/Shop" className="text-gray-600">Product</Link>
          <Link href="/About" className="text-gray-600">Pricing</Link>
          <Link href="/Contact" className="text-gray-600">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-blue-500">Login</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Become Link member →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-8 py-12 md:py-18 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="text-sm text-gray-600 mb-4">CONTACT US</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in touch today!
            </h1>
            <p className="text-gray-600 mb-8">
              We know how large objects will act, but things on Link small scale
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+451 215 215</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>+451 215 215</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <Twitter className="w-6 h-6 text-gray-600" />
              <Facebook className="w-6 h-6 text-gray-600" />
              <Instagram className="w-6 h-6 text-gray-600" />
              <Linkedin className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-2/3">
            <Image 
              src="/assets/none(1).png"
              alt="Happy family shopping"
              width={632}
              height={612}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              We help small businesses<br />
              with big ideas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-sm text-gray-500 mb-2">georgia.young@example.com</div>
              <div className="text-sm text-gray-500 mb-4">georgia.young@ple.com</div>
              <div className="font-medium mb-4">Get Support</div>
              <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors">
                Submit Request
              </button>
            </div>

            {/* Location Support */}
            <div className="bg-[#252B42] text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-sm mb-2">georgia.young@example.com</div>
              <div className="text-sm mb-4">georgia.young@ple.com</div>
              <div className="font-medium mb-4">Get Support</div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Submit Request
              </button>
            </div>

            {/* Email Support */}
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-sm text-gray-500 mb-2">georgia.young@example.com</div>
              <div className="text-sm text-gray-500 mb-4">georgia.young@ple.com</div>
              <div className="font-medium mb-4">Get Support</div>
              <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-600 mb-4">WE CAN&apos;T WAIT TO MEET YOU</div>
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Talk</h2>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 transition-colors">
            Try it free now
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;