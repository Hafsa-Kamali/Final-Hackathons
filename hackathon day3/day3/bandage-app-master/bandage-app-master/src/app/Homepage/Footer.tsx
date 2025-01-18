import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (

      <footer className="">
        {/* Top Section */}
        <div className="flex relative w-full justify-between items-center p-10 bg-[#FAFAFA] border-gray-300 custom-border">
  <h1 className="text-2xl font-bold text-gray-800 ml-0">Bandage</h1>
  <div className="flex space-x-4 md:mr-14">
    <FaFacebook className="text-2xl text-sky-500"/>
    <FaInstagram className="text-2xl text-sky-500"/>
    <FaTwitter className="text-2xl text-sky-500"/>
  </div>
</div>

      

        {/* Links Section */}
        <div className="grid md:w-[1550px] w-[100%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 bg-[#FFFFFF] p-10">
          {/* Column 1 */}
          <div className="space-x-4">
            <h2 className="font-semibold text-gray-800 mb-4 ml-3">Company Info</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Business Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">User Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">API</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Get In Touch</h2>
          <form className="space-y-4 flex-nowrap md:flex-wrap mr-8">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-6 py-2 border-gray-300 rounded-md"
              />
              <button className="w-[70%] h-[60px] bg-sky-600 text-white rounded-md hover:bg-sky-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-start p-8 text-gray-500 text-sm bg-[#FAFAFA] md:w-[1550px] w-[100%]">
          Made With Love By Finland All Rights Reserved
         
        </div>
      </footer>
 
  );
};

export default Footer;
