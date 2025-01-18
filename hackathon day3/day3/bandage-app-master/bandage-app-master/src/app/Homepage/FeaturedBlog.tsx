import Image from 'next/image';
import React from 'react';
import { CgAlarm } from "react-icons/cg";
import { FaChartArea } from "react-icons/fa";
const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/assets/Blog-1 (1).png", // Replace with actual image URL
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: "/assets/Blog-1 (2).png", // Replace with actual image URL
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: "/assets/Blog-1 (3).png", // Replace with actual image URL
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-blue-500">Practice Advice</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Posts</h1>
        <p className="text-gray-500 mt-2 ">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden md:w-[348px] md:h-[606px]"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={500}
                className="w-full h-[300px] object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4 mt-4">
              <div className="text-sm text-gray-500 mb-1 font-family">Google Trending New</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-family">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4 md:w-[70%] font-family ">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center">
                <CgAlarm className='text-sky-500 text-xl mr-1' />
                  {post.date}
                </span>
                <span className="flex items-center">
                <FaChartArea className='text-sky-500 text-xl mr-1'  />

                  {post.comments} comments
                </span>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href="#"
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;