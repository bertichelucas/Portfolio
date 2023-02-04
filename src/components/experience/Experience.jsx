import React from 'react'
import './experience.css'
import {HiCheckCircle} from 'react-icons/hi'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills do i have?</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiCheckCircle className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Lorem ipsum dolor sit amet.</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience