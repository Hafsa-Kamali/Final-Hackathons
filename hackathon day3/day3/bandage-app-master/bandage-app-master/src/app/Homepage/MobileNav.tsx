
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid';
import React from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Background Overlay */}
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-white opacity-70 w-[100vw] h-[80vh]`}
      ></div>

      {/* Nav Menu */}
        
      <nav
       className={`text-[#737373] text-xl ${navOpenStyle} fixed flex items-center flex-col justify-center h-[80%] transform transition-all duration-300 delay-100 w-[100%] bg-white space-y-10 z-[10006]`}
      >
        
        <div className='absolute top-10 left-4 w-[100%]'>
          <h1 className='text-[24px] font-bold font-family text-black'>Bandage</h1>
          </div>
 <div className="flex flex-col space-y-10 text-2xl font-family mt-2">
          <Link href="/"
             className="text-[#737373] hover:underline hover:underline-offset-8 hover:scale-105">Home
          </Link>
          <Link href="/Shop"
             className="text-[#737373] hover:underline hover:underline-offset-8 hover:scale-105">Shop
          </Link>
          <Link href="/About"
             className="text-[#737373] hover:underline hover:underline-offset-8 hover:scale-105">About
          </Link>
          <Link href="/Pricing" className="text-[#737373] hover:underline hover:underline-offset-8 hover:scale-105">Pricing
          </Link>
          <Link href="/Contact"className="text-[#737373] hover:underline hover:underline-offset-8 hover:scale-105">Contact
          </Link>
        </div>


               {/* Close Button */}
       <div className="">
          <Bars3BottomRightIcon
            onClick={closeNav}
            className="absolute top-[2.2rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-black hover:text-stone-500 cursor-pointer"
          />
          <FaRegUser className='mr-2 text-[#23A6F0] hover:scale-110' /><Link href="/Login" className='text-[#23A6F0] hover:scale-110'>
          Login</Link>
          <BsCart3 className='absolute top-[2.2rem] right-[9.4rem] w-[2.2rem] h-[2.2rem] text-black hover:text-stone-500 cursor-pointer'/>
          <CiSearch className='absolute top-[2.2rem] right-[5.4rem] w-[2.2rem] h-[2.2rem] text-black hover:text-stone-500 cursor-pointer'/>
      </div>

    
        </nav>
        </div>
  )
}

export default NavMobile