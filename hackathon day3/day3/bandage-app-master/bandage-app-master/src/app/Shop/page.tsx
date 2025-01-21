"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavMobile from "../Homepage/MobileNav";
import Navbar from "../Homepage/Navbar";
import { BsFillGridFill } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Homepage/Footer";
import ProductCards from "../Products/page";

const ShopPage: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="overflow-x-hidden ">
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />   
        <Navbar openNav={() => setShowNav(true)} />
    <div className="bg-gray-100 min-h-screen p-6">
     
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-md max-w-7xl mx-auto p-6">
        {/* Title Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop</h1>
          <nav className="text-gray-500 text-sm cursor-pointer">
            <span>Home</span> <span className="mx-2">/</span> <span>Shop</span>
          </nav>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4.png?text=Product+1"
              alt="Product 1"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
           <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/card-item.png?text=Product+3"
              alt="Product 3"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4(1).png?text=Product+2"
              alt="Product 2"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4(2).png?text=Product+3"
              alt="Product 3"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4(3).png?text=Product+4"
              alt="Product 4"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-gray-600 text-sm md:text-xl ml-0 md:ml-5">Showing all 12 results</p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button className="bg-transparent p-2 rounded-md  border-2 border-gray-300" title="Grid view">
            <BsFillGridFill  className=" text-xl"/>
            </button>
            <button className="bg-transparent p-2 rounded-md border-2 border-gray-300" title="List view">
            <BsListCheck  className="text-gray-300 text-xl"/>
            </button>
          </div>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <label htmlFor="sort" className="text-gray-600 mr-2 border border-gray-300 p-2 rounded-md flex items-center gap-2">
              Popularity
              <IoIosArrowDown />
            </label>
            <button className="bg-[#23A6F0] text-white py-2 px-8 rounded-md" title="Filter products">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
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
      <div className="mt-4 md:block hidden">
        <Footer />
      </div>
   <ProductCards/>
    <div className="md:hidden block"> 
    <Footer />
    </div>
    </div>
    </div>
  );
};export default ShopPage;
