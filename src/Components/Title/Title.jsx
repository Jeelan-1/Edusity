import React from 'react'
import './Title.css'
const Title = ({subt,tit}) => {
  return (
    <div className="title">
        <p>{subt}</p>
        <h2>{tit}</h2>
           
    </div>
  )
}

export default Title 