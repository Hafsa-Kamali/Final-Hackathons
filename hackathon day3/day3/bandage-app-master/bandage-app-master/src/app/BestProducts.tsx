import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  image: string;
  title: string;
  department: string;
  originalPrice: number;
  discountedPrice: number;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    image: '/assets/men.png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 2,
    image: '/assets/women.png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
{
    id: 3,
    image: '/assets/fixed-height(13).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 4,
    image: '/assets/kids.png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 5,
    image: '/assets/product-cover-5(1).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 6,
    image: '/assets/fixed-height(8).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 7,
    image: '/assets/fixed-height(9).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 8,
    image: '/assets/fixed-height(2).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 9,
    image: '/assets/product-cover-5(2).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 10,
    image: '/assets/fixed-height(10).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 11,
    image: '/assets/fixed-height(11).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  },
  {
    id: 12,
    image: '/assets/fixed-height(12).png',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['blue', 'green', 'orange', 'brown'],
  }

];

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4 ">
        <h3 className="text-center text-gray-500 mt-4 mb-2" >Featured Products</h3>
    <h2 className="text-center text-xl md:text-2xl font-family font-bold mb-4">BEST SELLERS PRODUCTS</h2>
      <p className="text-center text-2xl text-gray-500 mb-4">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16 space-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className=" overflow-hidden bg-transparent hover:shadow-md transition-shadow"
          >
            <Image src={product.image} alt={product.title} width={500} height={500} className="w-full h-auto md:w-[239px] md:h-[300px] ml-auto mr-auto" />
            <div className="p-4 items-center text-center">
              <h3 className="text-lg font-semibold ">{product.title}</h3>
              <p className="text-gray-500">{product.department}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
                <span className="text-green-600 font-bold">${product.discountedPrice.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex space-x-2 items-center justify-center">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 rounded-full`}
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
            <button className="mx-1 px-3 py-1 rounded-md bg-gray-200 text-gray-700">First</button>
            <button className="mx-1 px-3 py-1 rounded-md bg-gray-200 text-gray-700">Previous</button>
            <button className="mx-1 px-3 py-1 rounded-md bg-blue-500 text-white">1</button>
            <button className="mx-1 px-3 py-1 rounded-md bg-gray-200 text-gray-700">2</button>
            <button className="mx-1 px-3 py-1 rounded-md bg-gray-200 text-gray-700">3</button>
            <button className="mx-1 px-3 py-1 rounded-md bg-blue-500 text-white">Next</button>
            <button className="mx-1 px-3 py-1 rounded-md bg-gray-200 text-gray-700">Last</button>
        </div>
    </div>
  );
};

export default Page;
