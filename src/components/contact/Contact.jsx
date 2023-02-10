import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ecege4p', 'template_lo4ucyo', form.current, 'fwms2DpG9L7wG5eQ5')
        .then(() => {
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>bertichelucas@gmail.com</h5>
                        <a href="mailto:bertichelucas@gmail.com" target="_blank" rel='noreferrer'>Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsDiscord className='contact__option-icon'/>
                        <h4>Discord</h4>
                        <h5>Lucas Bertiche</h5>
                        <a href="https://discordapp.com/users/231148861303816192" target="_blank" rel='noreferrer'>Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+541168332695</h5>
                        <a href="https://api.whatsapp.com/send?phone=+541168332695" target="_blank" rel='noreferrer'>Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact