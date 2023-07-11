import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Select from './components/Select.jsx'
import ImageCarousel from './components/ImageCarousel'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Select/>
      <ImageCarousel/>
      <Footer/>
    </div>
  )
}

export default App
