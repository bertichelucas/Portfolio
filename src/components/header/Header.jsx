import React from 'react'
import './header.css'
import Buttons from './Buttons'
import profile from '../../assets/profile.png'
import HeaderLinks from './HeaderLinks'

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Lucas Bertiche</h1>
                <h5 className="text-light">Fullstack Developer</h5>

                <Buttons/>

                <HeaderLinks/>

                <div className='me'>
                    <img src={profile} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>



        </header>
    )
}

export default Header