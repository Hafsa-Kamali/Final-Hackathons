"use client"
import React, { useState } from 'react'

import Heropage from './Homepage/MainHero';
import Products from './Homepage/EditorPick';
import Carasouel from './Homepage/Carasouel';
import NeuralUniverseSection from './Homepage/Banner';
import FeaturedPosts from './Homepage/FeaturedBlog';
import Navbar from './Homepage/Navbar';
import NavMobile from './Homepage/MobileNav';
import Footer from './Homepage/Footer';
import App from './CartMain/page';


const Homepage = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='overflow-x-hidden'>
    <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />   
      <Navbar openNav={() => setShowNav(true)} />
      <Heropage/>
      <Products/>
      <App/>
      <Carasouel/>
      <NeuralUniverseSection/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  )
}

export default Homepage