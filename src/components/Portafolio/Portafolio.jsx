import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "Swiper/css"
import cat1 from '../../img/Citas.png'
import cat2 from '../../img/RickAndMorty.png'
import cat3 from './Nueva carpeta/cat3.jpg'
import cat4 from './Nueva carpeta/cat4.jpg'
import './Portafolio.css'
import { themeContext } from '../context/Context'
import { useContext } from 'react'

const Portafolio = () => {
    const theme= useContext(themeContext);
    const darkMode= theme.state.darkMode
  return (
    <div className='portafolio' id='portafolio'>
        <span style={{color: darkMode?'white':''}}>Trabajos Recientes</span>
        <span>Portafolio</span>

        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portafolio-slider'>
        <SwiperSlide>
            <a href='https://incandescent-basbousa-fcec83.netlify.app'><img src={cat1} alt=''/></a>
            
        </SwiperSlide>
        <SwiperSlide>
           <a href='https://genuine-gumption-7e5207.netlify.app'><img src={cat2} alt=''/></a> 
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat3} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat4} alt=''/>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portafolio