import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import pic_1 from '../../assets/program-icon-1.png'
import pic_2 from '../../assets/program-icon-2.png'
import pic_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' id='program'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={pic_1} alt="" />
                <p>Graduation degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={pic_1} alt="" />
                <p>Masters degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={pic_1} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs