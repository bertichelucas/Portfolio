import React from 'react'
import './about.css'
import profile from '../../assets/profile2.png'
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
                            <h5>Projects</h5>
                            <small><a href="#portfolio">My projects</a></small>
                        </article>
                        <article className='about__card'>
                            <BiBookBookmark className='about__icon'/>
                            <h5>Learning</h5>
                            <small>AWS, Pipelines and Django</small>
                        </article>
                        <article className='about__card'>
                            <FaBriefcase className='about__icon'/>
                            <h5>Working on</h5>
                            <small><a href='http://g9c3-frontend.s3-website.us-east-2.amazonaws.com/' target='_blank' rel='noreferrer'>Final project Digital House</a></small>
                        </article>
                    </div>

                    <p>Born in Buenos Aires, Argentina. Currently studying Digital House's Certified Tech Developer degree and Software Enineering at the University of Buenos Aires.
                    <hr /><br />
                    Aside from programming, I have a passion for football, video games and music (I play the guitar and the bass).
                    </p>

                    <a href="#contact" className='btn btn-primary'>Contact</a>
                </div>
            </div>
        </section>
    )
}

export default About