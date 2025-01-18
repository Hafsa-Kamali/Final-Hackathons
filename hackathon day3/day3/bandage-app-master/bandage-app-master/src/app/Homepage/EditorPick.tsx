import Image from 'next/image';
import React from 'react';

const Products = () => {
  return (
    <div className="bg-[#FAFAFA] py-10">
       <div className=" w-[95%] md:w-full md:h-[550px] flex flex-col lg:flex-row justify-center gap-8 md:gap-6 lg:gap-6 mt-4">

        <div className="w-full lg:w-[40%] h-[100%]">
          <Image
            src="/assets/men.png"
            width={500}
            height={500}
            className="h-[100%] w-full"
            alt="Men"
          />
        </div>

        <div className="w-full lg:w-[25%] h-[100%]">
          <Image
            src="/assets/women.png"
            width={500}
            height={500}
            className="h-[100%] w-full"
            alt="Women"
          />
        </div>

        <div className="w-full lg:w-[25%] h-[100%] flex flex-col gap-6">
          <div className='w-[100%] h-[45%]'>
            <Image
              src="/assets/accessories.png"
              width={500}
              height={500}
              className='w-[100%] h-[100%]'
              alt="accessories"
            />
          </div>

          <div className="w-full h-[50%]">
            <Image
              src="/assets/kids.png"
              width={500}
              height={500}
              className='w-[100%] h-[100%]'
              alt="kid"
            />
          </div>
          
        </div>

      </div>
      <div className="text-center mb-6 mt-8">
        <h2 className="text-2xl md:text-4xl font-bold font-family">EDITOR&apos;S PICK</h2>
        <p className="text-gray-500 text-xl font-family">Problems trying to resolve the conflict between</p>
      </div>
    </div>
  );
};

export default Products;