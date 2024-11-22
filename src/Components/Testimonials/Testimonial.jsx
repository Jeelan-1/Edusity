import React, { useRef } from 'react'
import './Testimonial.css'
import   next from '../../assets/next-icon.png'
import   back from '../../assets/back-icon.png'
import   user1 from '../../assets/user-1.png'
import   user2 from '../../assets/user-2.png'
import   user3 from '../../assets/user-3.png'
import   user4  from '../../assets/user-4.png'



const Testimonial = () => {
    const slider=useRef();
    let tx=0;
const slideForward=()=>{
    if(tx>-50)
        {
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
}
const slideBackward=()=>{
if(tx<0)
{
    tx+=25;
}
slider.current.style.transform=`translateX(${tx}%)`
}



  return (
   <div className="testimonial">
    <img src={next} alt="" className='next-btn' onClick={slideForward}/>
   <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
   <div className="slider">
    <ul ref={slider}>
        <li><div className="slide">
            <div className="user-info">
                <img src={user1} alt="" />
                <div>
                    <h3>Attar</h3>
                    <span>Edusity,USA</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus numquam officiis, qui fugit libero debitis necessitatibus iste fugiat unde? Cumque, amet aspernatur natus mollitia corporis dolores hic quo magni?
            </p>
            </div></li>
            <li><div className="slide">
            <div className="user-info">
                <img src={user1} alt="" />
                <div>
                    <h3>Jeelan</h3>
                    <span>Edusity,USA</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus numquam officiis, qui fugit libero debitis necessitatibus iste fugiat unde? Cumque, amet aspernatur natus mollitia corporis dolores hic quo magni?
            </p>
            </div></li>
            <li><div className="slide">
            <div className="user-info">
                <img src={user2} alt="" />
                <div>
                    <h3>Basha</h3>
                    <span>Edusity,USA</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus numquam officiis, qui fugit libero debitis necessitatibus iste fugiat unde? Cumque, amet aspernatur natus mollitia corporis dolores hic quo magni?
            </p>
            </div></li>
            <li><div className="slide">
            <div className="user-info">
                <img src={user4} alt="" />
                <div>
                    <h3>Adoni</h3>
                    <span>Edusity,USA</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus numquam officiis, qui fugit libero debitis necessitatibus iste fugiat unde? Cumque, amet aspernatur natus mollitia corporis dolores hic quo magni?
            </p>
            </div></li>
    </ul>
   </div>
   </div>
  )
}

export default Testimonial