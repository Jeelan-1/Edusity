import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'

const About = ({setPlay}) => {
  return (
   <div className="about">
    <div className="about-left">
<img src={about} alt="" className='about-img'/>
<img src={play} alt="" className='play-icon' onClick={()=>{
    {setPlay(true)}
    }}/>
    </div>
    <div className="about-right">
<h3>
    ABOUT UNIVERSITY
</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
<p>
Embark on a transformative educational journey with our university
</p>
<p>
With a focus on innovation,hands on learning , and personalised mentorship,our programs prepare aspiring educators to make a meaningful impact in classrooms,schools, and communities
</p>
<p>
Whether you aspire to became a teacher,administrator,counselor,or educational leader  
</p>
    </div>
   </div>
  )
}

export default About