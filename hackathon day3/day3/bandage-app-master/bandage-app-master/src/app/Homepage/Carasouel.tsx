import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#23856D] text-white relative px-6 md:px-[200px] md:h-[709px] w-full">
      {/* Text Section */}
      <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left ">
        <h3 className="text-white text-xl md:text-xl font-bold md:mt-44 mt-6">SUMMER 2020</h3>
        <h1 className="text-white md:w-[50%] text-5xl md:text-6xl font-family font-bold mt-6 md:mt-12">Vita Classic<br/><span className="mt-6 md:mt-32 ml-4">{" "}Product{" "}</span></h1>
        <p className="text-white text-xl md:text-2xl mt-6 md:mt-14 max-w-[85%] md:max-w-[50%]">
        We know how large objects will act, We know how are objects will act, We know.
        </p>
        <div className="space-x-4 mt-8 ">
        <span className="text-white text-xl md:text-2xl font-bold font-family">$16.48</span>
        <button className="bg-[#2DC071] text-white text-lg md:text-2xl font-bold py-3 px-8 md:py-4 md:px-10 mt-8 md:mt-14 hover:scale-110 hover:shadow-white shadow-md">
          ADD TO CART
        </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:absolute md:top-[110px] md:right-[60px] md:mt-0 flex justify-center">
        <Image
          src="/assets/col-md-6(1).png"
          alt="New Collection"
          width={500}
          height={500}
          className="w-75 h-auto md:w-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;

