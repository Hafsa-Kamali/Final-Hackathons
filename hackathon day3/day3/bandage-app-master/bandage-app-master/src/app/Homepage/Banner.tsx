import Image from 'next/image';
import React from 'react';

const NeuralUniverseSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0">
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-0 text-center md:text-left md:hidden block">
        <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider mb-2 font-family">Summer 2020</p>
        <h2 className="text-gray-900 text-3xl md:text-4xl w-[70%] font-bold mb-4 font-family ml-12">
          Part of the Neural Universe
        </h2>
        <p className="text-gray-700 md:w-[30%] font-medium font-family text-xl mb-6 ml-5">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-400 transition">
            Buy Now
          </button>
          <button className="border-2 border-sky-500 text-sky-500 py-3 px-6 rounded-lg hover:bg-sky-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-start ml-0 md:ml-32">
        <Image
          src="/assets/col-md-6(2).png" 
          alt="Part of the Neural Universe"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-0 text-center md:text-left hidden md:block">
        <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider mb-2 font-family">Summer 2020</p>
        <h2 className="text-gray-900 text-3xl md:text-4xl md:w-[70%] font-bold mb-4 font-family">
          Part of the Neural Universe
        </h2>
        <p className="text-gray-700 md:w-[60%] font-medium font-family text-lg mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-500 transition">
            Buy Now
          </button>
          <button className="border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg hover:bg-green-700 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverseSection;
