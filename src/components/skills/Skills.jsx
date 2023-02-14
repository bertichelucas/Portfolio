import React from 'react'
import './skills.css'
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
    },
    {
        type: 'theoretical',
        name: 'Design Patterns'
    }
]

const Skills = () => {
    return (
        <section id='skills'>
            <h5>What I Offer</h5>
            <h2>Skills</h2>

            <div className="container skills__container">
                <article className="skill">
                    <div className="skill__head">
                        <h3>Soft Skills</h3>
                    </div>
                    <ul className='skill__list'>
                        {
                            data.filter(item => item.type === 'soft').map(item => {
                                return(
                                    <li>
                                        <FaCheck className='skill__list-icon'/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className="skill">
                    <div className="skill__head">
                        <h3>Knowledges</h3>
                    </div>
                    <ul className='skill__list'>
                        {
                            data.filter(item => item.type === 'theoretical').map(item =>{
                                return(
                                    <li>
                                        <FaCheck className='skill__list-icon'/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className="skill">
                    <div className="skill__head">
                        <h3>Others</h3>
                    </div>
                    <ul className='skill__list'>
                        {
                            data.filter(item => item.type === 'other').map(item =>{
                                return(
                                    <li>
                                        <FaCheck className='skill__list-icon'/>
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

export default Skills