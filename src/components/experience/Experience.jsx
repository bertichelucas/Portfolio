import React from 'react'
import './experience.css'
import {HiCheckCircle} from 'react-icons/hi'

const data = [
    {
        name: 'HTML',
        description: 'Experienced',
        type: 'front'
    },
    {
        name: 'CSS',
        description: 'Intermediate',
        type: 'front'
    },
    {
        name: 'JavaScript',
        description: 'Experienced',
        type: 'front'
    },
    {
        name: 'React',
        description: 'Intermediate',
        type: 'front'
    },
    {
        name: 'Java',
        description: 'Experienced',
        type: 'back'
    },
    {
        name: 'MySQL',
        description: 'Intermediate',
        type: 'back'
    },
    {
        name: 'SQLServer',
        description: 'Intermediate',
        type: 'back'
    },
    {
        name: 'Python',
        description: 'Intermediate',
        type: 'back'
    },
    {
        name: 'NodeJS',
        description: 'Basic',
        type: 'back'
    },
    {
        name: 'Bootstrap',
        description: 'Basic',
        type: 'front'
    }
]

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills do i have?</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {
                        data.filter(item => item.type === 'front').map(item => {
                            return (
                                <article className='experience__details'>
                                    <HiCheckCircle className='experience__details-icon'/>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <small>{item.description}</small>
                                    </div>
                                </article>
                            )
                        })
                        }
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                    {
                        data.filter(item => item.type === 'back').map(item => {
                            return (
                                <article className='experience__details'>
                                    <HiCheckCircle className='experience__details-icon'/>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <small>{item.description}</small>
                                    </div>
                                </article>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience