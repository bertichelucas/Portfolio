import React from 'react'
import './header.css'
import Buttons from './Buttons'
import HeaderLinks from './HeaderLinks'
import {FaLongArrowAltRight} from 'react-icons/fa'

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Lucas Bertiche</h1>
                <h5 className="text-light">Fullstack Developer</h5>

                <Buttons/>

                <HeaderLinks/>

                
                

                <a href="#contact" className='scroll__down'>Scroll Down <FaLongArrowAltRight  className='scroll__icon' size={25}></FaLongArrowAltRight></a>

            </div>



        </header>
    )
}

export default Header