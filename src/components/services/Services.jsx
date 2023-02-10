import React from 'react'
import './services.css'
import {FaCheck} from 'react-icons/fa'

const data = [
    {
        type: 'soft',
        name: 'Scrum'
    },
    {
        type: 'soft',
        name: 'Design Thinking'
    },
    {
        type: 'soft',
        name: 'UX/UI Design'
    },
    {
        type: 'soft',
        name: 'Kanban'
    },
    {
        type: 'theoretical',
        name: 'Object Oriented Programming'
    },
    {
        type: 'theoretical',
        name: 'Test Driven Development'
    },
    {
        type: 'theoretical',
        name: 'Abstract Data Types'
    },
    {
        type: 'theoretical',
        name: 'MVC architecture'
    },
    {
        type: 'other',
        name: 'Git'
    },
    {
        type: 'other',
        name: 'APIs'
    },
    {
        type: 'theoretical',
        name: 'C Language'
    },
    {
        type: 'other',
        name: 'Spring Boot'
    },
    {
        type: 'other',
        name: 'Docker'
    },
    {
        type: 'other',
        name: 'Postman'
    }
]

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Soft Skills</h3>
                    </div>
                    <ul className='service__list'>
                        {
                            data.filter(item => item.type === 'soft').map(item => {
                                return(
                                    <li>
                                        <FaCheck className='service__list-icon'/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Knowledges</h3>
                    </div>
                    <ul className='service__list'>
                        {
                            data.filter(item => item.type === 'theoretical').map(item =>{
                                return(
                                    <li>
                                        <FaCheck className='service__list-icon'/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Others</h3>
                    </div>
                    <ul className='service__list'>
                        {
                            data.filter(item => item.type === 'other').map(item =>{
                                return(
                                    <li>
                                        <FaCheck className='service__list-icon'/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services