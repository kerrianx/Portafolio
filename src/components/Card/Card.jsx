import React from 'react'
import './Card.css'

const Card = ({emoji,heading,details}) => {
  return (
    <div className='card'>
        <img src={emoji}/>
        <span>{heading}</span>
        <span>{details}</span>
        <button className='c-button'>Mas</button>
    </div>
  )
}

export default Card