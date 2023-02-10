import React from 'react'
import './about.css'
import profile from '../../assets/profile.png'
import {FaAward, FaBriefcase} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                {<div className="about__me">
                    <img src={profile} alt="About" />
                </div>}
                

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Ninguna</small>
                        </article>
                        <article className='about__card'>
                            <BiBookBookmark className='about__icon'/>
                            <h5>Learning</h5>
                            <small>AWS, Pipelines and Django</small>
                        </article>
                        <article className='about__card'>
                            <FaBriefcase className='about__icon'/>
                            <h5>Working on</h5>
                            <small>Final project Digital House</small>
                        </article>
                    </div>

                    <p>Born in Buenos Aires, Argentina. Currently studying Digital House's Certified Tech Developer degree and Software Enineering at the University of Buenos Aires.
                    <hr /><br />
                    Aside from programming, I have a passion for music, football and video games (especially Age of Empires II)
                    </p>

                    <a href="#contact" className='btn btn-primary'>Contact</a>
                </div>
            </div>
        </section>
    )
}

export default About