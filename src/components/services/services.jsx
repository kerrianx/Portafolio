import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import cat from '../services/cat.jpg'
import { motion } from 'framer-motion'
import { themeContext } from '../context/Context'
import { useContext } from 'react'
const Services = () => {
  const transition={duration:1,type:'spring'}
  const theme= useContext(themeContext);
  const darkMode= theme.state.darkMode
  return (
    <div className='services' id='servicios'>

    <div className='awesome'>
        <span style={{color:darkMode?'white':''}}>Mi asombrosos</span>
        <span>Servicios</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/>
            Culpa quae, atque exercitationem iure in voluptatem fugit sint repellendus iste dolor maiores! Eligendi impedit magnam vero fuga quas? Fugiat, cum maiores.
        </span>
        <a href={cat} download>
          <button className='button s-button'>Descarga mi CV</button>
        </a>
        
        <div className='blur s-blur1' style={{background:'var(--amarillo)'}}></div>
    </div>
    <div className='cards'>
      <motion.div initial={{left:'25rem'}} whileInView={{left:'14rem'}} transition={transition} style={{left: '14rem'}}>
        <Card emoji={HeartEmoji} heading={"Styles"} details={"CSS3, Boostrap, Tailwind CSS"}/>
      </motion.div>
      <motion.div initial={{left:'-11rem', top:'12rem'}} whileInView={{left:'-4rem'}} transition={transition} style={{top:'12rem', left:'-4rem'}}>
        <Card emoji={Glasses} heading={'Developer'} details={'Html, Css, Javascript, React, Angular'}/>
      </motion.div>
      <motion.div initial={{top:'19rem',left:'25rem'}} whileInView={{left:'12rem'}} transition={transition} style={{top:'19rem', left:'12rem'}}>
        <Card emoji={Humble} heading={'NodeJs'} details={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
      </motion.div>
      <div className='blur s-blur2' style={{background:'#abf1ff94'}}></div>
    </div>
        
    </div>
   
  )
}

export default Services