import React from 'react'
import {BsLinkedin, BsGithub, BsDiscord} from 'react-icons/bs'

const HeaderLinks = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/bertichelucas" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/bertichelucas" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://discordapp.com/users/231148861303816192" target="_blank" rel="noreferrer"><BsDiscord/></a>
            
        </div>
    )
}

export default HeaderLinks