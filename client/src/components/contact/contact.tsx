import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className='contact'>
            <h1>Let's Talk</h1>
            <div className='contact-form'>
                <div className='left'>
                    <label>Name</label>
                    <input placeholder='Jillian White'></input>
                    <label>Email</label>
                    <input placeholder='Jillian@gmail.com'></input>
                    <label>Message</label>
                    <textarea placeholder='Lorem Iptsum'></textarea>
                    <button>Send Message</button>
                </div>
                <div className='right'>
                   <div className='blob'></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;