import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import video from './assets/video.mp4'
import Skills from './components/skills/Skills'



const App = () => {
    return (
        <div>
            <video src={video} autoPlay muted loop  className='bgVideo'></video>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
}



export default App