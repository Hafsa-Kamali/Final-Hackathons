"use client"
import React , { useEffect, useState } from 'react'
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

  const [navSticky, setNavSticky]= useState(false);
  
  useEffect(() => {

    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } 
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  } , []);

 const stickyStyle = navSticky ? "md:hidden hidden md:flex flex-row shadow-gray-100 shadow-sm":""

  return (
    <header className={`bg-white ${stickyStyle} shadow-sm border-b mx-auto flex flex-col w-[1550px] z-[50]`}>
      <div>
        <div className='bg-[#252B42] text-white py-2 text-sm flex justify-between items-center w-full px-8'>
          <div className='text-start flex items-center gap-2 font-family font-bold leading-[14px]'>
          <LuPhone className='text-white text-lg' />
          (225) 555-0118
            
          <TfiEmail className='text-white text-lg ml-2' />
          michelle.rivera@example.com
          </div>
          <div className='flex items-center gap-2 text-center font-family font-bold leading-[14px] '>
          Follow Us  and get Link chance to win 80% off
            </div>
          <div className='flex items-center gap-[4px]'>
            <div className='text-white text-sm font-semibold font-family leading-[21px] inline-flex'>
             Follow Us:
             </div>
             <div className='flex items-center gap-2 space-x-2 text-lg mr-2'>
             <FaInstagram />
             <FaYoutube />
             <FaFacebook />
             <FaTwitter />
            </div>
           
          </div>
        </div>

        <div className='flex justify-start items-center py-4 px-8'>
          <h1 className='text-[24px] font-bold font-family text-black ml-16'>Bandage</h1>
          <nav className='hidden md:flex space-x-8 items-center ml-24'>
            <Link
            href="/"
            className='text-[16px] font-semibold  no-underline hover:underline hover:decoration-gray-400 hover:underline-offset-4'
            >Home</Link>

<Link
            href='/Shop'
            className='text-[16px] inline-flex font-semibold  no-underline hover:underline hover:decoration-gray-400 hover:underline-offset-4'
            >Shop
            <IoIosArrowDown className='ml-2 mt-1' />
            </Link>


           <Link
            href="/About"
            className='text-[16px] font-semibold  no-underline hover:underline hover:decoration-gray-400 hover:underline-offset-4'
            >About</Link>

<Link
            href='/Blog'
            className='text-[16px] font-semibold  no-underline hover:underline hover:decoration-gray-400 hover:underline-offset-4'
            >Blog</Link>

            <Link
            href='/Contact'
            className='text-[16px] font-semibold  no-underline hover:underline hover:decoration-gray-400 hover:underline-offset-4'
            >Contact</Link>


            <Link
            href='/Pricing'
            className='text-[16px] font-semibold  no-underline hover:underline hover:decoration-gray-400 hover:underline-offset-4'
            >Pricing</Link>
          </nav>
       

          <div className='flex items-center text-end space-x-6 ml-auto'>
            <div className='flex items-center space-x-4 px-4 py-2 rounded-full text-[#23A6F0] font-bold text-[14px]font-family'>
            <FaRegUser className='mr-2' /><Link href="/Login">
                Login/Register</Link>
                <CiSearch className='text-lg' />
                <Link href="/Cart" className="text-2xl">
                <BsCart3 className="text-2xl" /></Link>
                <FaRegHeart />
            </div>
          </div>
        </div>
        <Bars3BottomRightIcon 
            onClick={openNav}
            className="w-8 h-8 ml-auto absolute top-12 right-3 text-black md:hidden cursor-pointer"
          />
      </div>
    </header>
  )}

export default Navbar