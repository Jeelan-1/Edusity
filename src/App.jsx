import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'



const App = () => {
  const [play,setPlay] =useState(false);

  return (
    <>
    <Navbar/>
    <Hero/>
   <div className='container'>
    <Title subt='OUR PROGRAMS' tit='What We Offer' />
    <Programs/>
    <About setPlay={setPlay}/> 
    <Title subt='Gallery' tit='Campus Photos' />
    <Campus/>
    <Title subt='Testimonials' tit='What our students says'/>
    <Testimonial/>
    <Title subt="Contact Us" tit='Get in Touch'/>
    <Contact/>
    <Footer/>
   </div>
   
      <VideoPlayer play={play}  setPlay={setPlay} />
  
    </>
  )
}

export default App