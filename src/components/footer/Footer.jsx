import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsDiscord} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#top" className='footer__logo'>Lucas Bertiche</a>

            <ul className='permalinks'>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com/in/bertichelucas" target="_blank" rel="noreferrer"><BsLinkedin className='footer__social-icon'/></a>
                <a href="https://github.com/bertichelucas" target="_blank" rel="noreferrer"><BsGithub className='footer__social-icon'/></a>
                <a href="https://discordapp.com/users/231148861303816192" target="_blank" rel="noreferrer"><BsDiscord className='footer__social-icon'/></a>
            </div>

            <div className="footer__copyright">
                <small>Lucas Bertiche</small>
            </div>
        </footer>
    )
}

export default Footer