import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine, RiContactsLine} from 'react-icons/ri'
import { FaList } from 'react-icons/fa'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')
    const [hoverNav, setHoverNav] = useState(null)

    const hanndleHoverNav = (text) =>{
        setHoverNav(text)
    }
    
    

    return (
        <div>
            <nav className='navbar'>
                <a href="#top" className={activeNav === '#top' ? 'active': ''} onClick={() =>{setActiveNav('#top')}} onMouseOver={()=>{hanndleHoverNav("Home")}}><AiOutlineHome/></a>
                <a href="#about" className={activeNav === '#about' ? 'active': ''} onClick={() =>{setActiveNav('#about')}} onMouseOver={()=>{hanndleHoverNav("About")}}><AiOutlineUser/></a>
                <a href="#experience" className={activeNav === '#experience' ? 'active': ''} onClick={() =>{setActiveNav('#experience')}} onMouseOver={()=>{hanndleHoverNav("Experience")}}><BiBook/></a>
                <a href="#portfolio" className={activeNav === '#portfolio' ? 'active': ''} onClick={() =>{setActiveNav('#portfolio')}} onMouseOver={()=>{hanndleHoverNav("Portfolio")}}><FaList/></a>
                <a href="#skills" className={activeNav === '#skills' ? 'active': ''} onClick={() =>{setActiveNav('#skills')}} onMouseOver={()=>{hanndleHoverNav("Skills")}}><RiServiceLine/></a>
                <a href="#contact" className={activeNav === '#contact' ? 'active': ''} onClick={() =>{setActiveNav('#contact')}} onMouseOver={()=>{hanndleHoverNav("Contact")}}><RiContactsLine/></a>
            </nav>
            <div className='text__container'><small className='nav__button__text'>{hoverNav}</small></div>
        </div>
    )
}

export default Nav