import React from 'react'
import {BsLinkedin, BsGithub, BsDiscord} from 'react-icons/bs'

const HeaderLinks = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/bertichelucas" target="_blank" rel="noreferrer"><BsLinkedin size={25}/></a>
            <a href="https://github.com/bertichelucas" target="_blank" rel="noreferrer"><BsGithub size={25}/></a>
            <a href="https://discordapp.com/users/231148861303816192" target="_blank" rel="noreferrer"><BsDiscord size={25}/></a>
            
        </div>
    )
}

export default HeaderLinks