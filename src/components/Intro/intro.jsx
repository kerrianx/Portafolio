import React from 'react'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png' 
import crown from '../../img/crown.png'
import glassesimoj1 from '../../img/glassesimoji.png'

import './intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {motion} from 'framer-motion'
import {themeContext} from '../context/Context'
import { useContext } from 'react'

const Intro = () => {
    const transition={duration:2,type:"spring"}
    const theme= useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color:darkMode?'white':''}}>Hola! Soy</span>
                <span>Nancy Jimenez</span>
                <span>Soy Frontend Developer, tengo poca experiencia en el desarrollo web, pero me encanta demasiado este campo de la tecnología y deseo aprender mucho mas</span>
            </div>
            <button className='button i-button'>contractame</button>
            <div className='i-icons'>
                <img src={Github} alt=""/>
                <img src={Linkedin} alt=""/>
                <img src={instagram} alt=""/>
            </div>
        </div>
        <div className='i-right'>
            <img src={vector1}></img>
            <img src={vector2}></img>
            <img src={boy}></img>
            <motion.img className='floating-div' initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transition} src={glassesimoj1}/>
            <motion.div className='floating-div' initial={{top:'-4%',left:'74%'}} whileInView={{left:'68%'}} transition={transition} style={{top: '-4px', left: '68%'}}>
                <FloatingDiv img={crown} txt1={'Web'} txt2={'Developer'}/>
            </motion.div>
            <motion.div initial={{left:'9rem',top:'18rem'}} whileInView={{left:'0rem'}} transition={transition} style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv img={thumbup} txt1={'Backend'} txt2={'Developer'}/>
            </motion.div>
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background: '#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
            
            
        </div>
    </div>
  )
}

export default Intro