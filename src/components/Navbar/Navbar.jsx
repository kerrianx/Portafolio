import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-wrap' id='Navbar'>
        <div className='n-left'>
            <div className='n-name'>Nancy</div>
                <Toggle/>
            
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul >
                    <li><Link activeClass='active' to='Navbar' spy={true} smooth={true}>home</Link></li>
                    <li><Link to='servicios' smooth={true} spy={true}>servicios</Link></li>
                    
                    <li><Link to='portafolio' smooth={true} spy={true}>Portafolio</Link></li>
                    
                </ul>
            </div>
        <button className='button n-button'><Link to='contactame' smooth={true} spy={true}>contactame</Link></button>
        </div>
    </div>
  )
}

export default Navbar