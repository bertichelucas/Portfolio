import React from 'react'
import './portfolio.css'
import profile from '../../assets/profile.png'



// import required modules


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            
            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={profile} alt="profile" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-buttons">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="paginita" className='btn btn-primary' target='_blank' rel=''>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={profile} alt="profile" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-buttons">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="paginita" className='btn btn-primary' target='_blank' rel=''>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={profile} alt="profile" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-buttons">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="paginita" className='btn btn-primary' target='_blank' rel=''>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={profile} alt="profile" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-buttons">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="paginita" className='btn btn-primary' target='_blank' rel=''>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={profile} alt="profile" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-buttons">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="paginita" className='btn btn-primary' target='_blank' rel=''>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={profile} alt="profile" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-buttons">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="paginita" className='btn btn-primary' target='_blank' rel=''>Live Demo</a>
                    </div>
                </article>
            </div>
            
        </section>
    )
}

export default Portfolio