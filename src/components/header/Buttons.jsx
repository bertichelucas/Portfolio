import React from 'react'
import CV from '../../assets/CvEnglish.pdf'

const Buttons = () => {
    return (
        <div className="buttons">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default Buttons