import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine, RiContactsLine} from 'react-icons/ri'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

    
    

    return (
        <nav>
            <a href="#top" className={activeNav === '#top' ? 'active': ''} onClick={() =>{setActiveNav('#top')}} ><AiOutlineHome/></a>
            <a href="#about" className={activeNav === '#about' ? 'active': ''} onClick={() =>{setActiveNav('#about')}} ><AiOutlineUser/></a>
            <a href="#experience" className={activeNav === '#experience' ? 'active': ''} onClick={() =>{setActiveNav('#experience')}}><BiBook/></a>
            <a href="#services" className={activeNav === '#services' ? 'active': ''} onClick={() =>{setActiveNav('#services')}}><RiServiceLine/></a>
            <a href="#contact" className={activeNav === '#contact' ? 'active': ''} onClick={() =>{setActiveNav('#contact')}}><RiContactsLine/></a>
        </nav>
    )
}

export default Nav