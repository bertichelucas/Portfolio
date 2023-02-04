import React from 'react'
import './about.css'
import profile from '../../assets/profile.png'
import {FaAward} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <img src={profile} alt="About" />
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Ninguna</small>
                        </article>
                        <article className='about__card'>
                            <BiBookBookmark className='about__icon'/>
                            <h5>Academics</h5>
                            <small>Nashe</small>
                        </article>
                        <article className='about__card'>
                            <BiBookBookmark className='about__icon'/>
                            <h5>Projects</h5>
                            <small>proyectitos</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui delectus itaque nihil nemo molestiae. Hic maxime repellendus aut iste ad. Temporibus dolores dolore perferendis est similique quis reprehenderit natus fugiat?</p>

                    <a href="#contact" className='btn btn-primary'>Contact</a>
                </div>
            </div>
        </section>
    )
}

export default About