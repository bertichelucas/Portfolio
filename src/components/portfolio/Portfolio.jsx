import React from 'react'
import './portfolio.css'
import dentalClinic from '../../assets/clinica.png'
import portfolioimg from '../../assets/portfolio.png'
import todolist from '../../assets/todolist.png'
import drumMachine from '../../assets/drummachine.png'



// import required modules


const data = [
    {
        name: 'Dental Clinic',
        description: 'First Backend Project with Java. Register dentists and clients, make an appointment.',
        techs: 'Java, MVC, Spring Boot, Hibernate, Log4J, JavaScript, Bootstrap',
        src: dentalClinic,
        git: 'https://github.com/bertichelucas/Backend-I/tree/main/IntegradorV2'
    },
    {
        name: 'Portfolio',
        description: 'Web portfolio. Responsive single page application made with React.',
        techs: 'JavaScript, HTML, CSS, React',
        src: portfolioimg,
        git: 'https://github.com/bertichelucas/Portfolio',
    },
    {
        name: 'To Do List',
        description: 'To do List and Check List Web Application. Useful for writing down tasks.',
        techs: 'Node JS, MySQL, JavaScript, HTML, CSS, React',
        src: todolist,
        git: 'https://github.com/bertichelucas/ToDoApp',
    },
    {
        name: 'Drum Machine',
        description: 'Simple Drum Machine with Pygame to create and store drum beats.',
        techs: 'Python, Pygame',
        src: drumMachine,
        git: 'https://github.com/bertichelucas/DrumMachine',
    },
    {
        name: '',
        description: '',
        techs: '',
        src: '',
        git: '',
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            
            <div className="container portfolio__container">
                {
                    data.map(item => {
                        return (
                            <article className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={item.src} alt="profile" />
                                </div>
                                <h3>{item.name}</h3>
                                <div className="portfolio__item-buttons">
                                    <a href={item.git} className='btn btn-primary'>Github</a>
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                    <small>{item.techs}</small>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            
        </section>
    )
}

export default Portfolio