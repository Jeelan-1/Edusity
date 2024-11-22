import React, { useEffect, useState } from 'react'
import './Navbar.css'
 import logo from '../../assets/logo.png'
 import { Link } from 'react-scroll';
 import menu from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  const [mobile,setMobile]=useState(true);
const toggle=()=>{
mobile?setMobile(false):setMobile(true);

}

useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY > 50 ? setSticky(true):setSticky(false)
})
},[]);

  return (
   <nav className={`container ${sticky?'darknav':''}`}>
   <img src={logo} alt="" className='logo'/>
<ul className={mobile?'mobile-menu':null}>
  
    <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
    <li><Link to='programs' smooth={true} offset={0} duration={500}>Program</Link></li>
    <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
    <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
    <li><Link to='testimonial' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
    <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
</ul>
<img src={menu} className='menu' alt="" onClick={toggle} />
   </nav>
  )
}

export default Navbar