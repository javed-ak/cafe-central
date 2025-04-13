import { useState } from 'react'
import './App.css'
import TopHeader from '../Components/TopHeader'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import OurStory from '../Components/OurStory'
import Section3 from '../Components/Section3'
import MenuSection from '../Components/MenuSection'
import Section5 from '../Components/Section5'
import Footer from '../Components/Footer'
import Section4 from '../Components/Section4'
import VideoSection from '../Components/videoSection'
import VisitOurCafe from '../Components/visitOurCafe'


function App() {
  return (
    <div >
      <div >
        <TopHeader />
        <Header />
      </div>
      <HeroSection />
      <OurStory />
      <Section3 />
      {/* <MenuSection /> */}
      <VisitOurCafe />
      <VideoSection />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  )
}

export default App
