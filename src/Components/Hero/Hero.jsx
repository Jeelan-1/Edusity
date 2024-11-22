import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
   <div className="hero container" name='hero'>
<div className="hero-text">
  <h1>We Ensure better Education for a better World</h1>
  <p>Our cuttiong Edge curriculum is designed to empower students with the knowledge , skills, and experiences needed to excel in the dynamic field of education</p>
<button className='btn'>Explore more <img src={arrow} alt="" />
</button>
</div>
   </div>
  )
}

export default Hero