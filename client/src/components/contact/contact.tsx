
import './contact.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_rqpqm3a', 'template_jv387dr', form.current, 'IWWxmd2MVXCeBH3y3')
            .then((result: any) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact' id='contact'>
            <h1>Let's Talk</h1>
            <p>Interested in contacting Jillian? Reach out below or send an email to <a href='mailto:contact@jillian-white.com'>contact@jillian-white.com</a> to inquire about speaking engagements, consulting services, media opportunities, or appearances</p>
            <div className='contact-form'>
                <form className='left' ref={form} onSubmit={sendEmail}>
                    <div className='row'>
                        <div className='col'>
                            <label>Name</label>
                            <input placeholder='Jillian White' type="text" name="name"></input>
                        </div>
                        <div className='col'>
                            <label>Email</label>
                            <input placeholder='Jillian@gmail.com' type="email" name="email"></input>
                        </div>
                    </div>
                    <label>Subject</label>
                    <input placeholder='Appraisal Issue' type="text" name="subject"></input>
                    <label>Message</label>
                    <textarea placeholder='Hi, ...' name="message"></textarea>
                    <button type="submit" value="Send">Send Message</button>
                </form>
                <div className='right'>
                    <div className='blob'></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;