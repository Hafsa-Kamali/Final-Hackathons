import Image from 'next/image'
import React from 'react'

const Heropage = () => {
  return (
    <div className="h-screen w-full bg-transparent">
      <div className="relative flex flex-col md:flex-row justify-center md:justify-start items-center h-full ">
        {/* Hero Image */}
        <Image
          src="/assets/shop-hero-1-product-slide-1.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          className=" "
        />

        {/* Content Section */}
        <div className="relative px-6 md:px-[200px] text-center md:text-left">
          <div className="flex flex-col justify-between items-center md:items-start">
            <h3 className="text-white text-lg md:text-xl font-bold">SUMMER 2020</h3>
            <h1 className="text-white text-5xl md:text-6xl font-bold mt-6 md:mt-12">NEW COLLECTION</h1>
            <p className="text-white text-xl md:text-2xl mt-6 md:mt-14 max-w-[70%] md:max-w-[60%]">
              We know how large objects will act, but things on a small scale.
            </p>
            <button
              type="button"
            className="bg-[#2DC071] text-white text-lg md:text-2xl font-bold py-3 px-8 md:py-4 md:px-10 mt-8 md:mt-14 hover:bg-white hover:text-[#2DC071] hover:shadow-black shadow-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
