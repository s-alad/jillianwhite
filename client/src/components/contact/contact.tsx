import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className='contact' id='contact'>
            <h1>Let's Talk</h1>
            <p>Interested in contacting Jillian? Reach out below or send an email to <a href='mailto:someone@example.com'>&lt;placeholder&gt;@gmail.com</a> to inquire about speaking engagements, consulting services, media opportunities, or appearances</p>
            <div className='contact-form'>
                <div className='left'>
                <div className='row'>
								<div className='col'>
									<label>Name</label>
									<input placeholder='Jillian White'></input>
								</div>
								<div className='col'>
									<label>Email</label>
									<input placeholder='Jillian@gmail.com'></input>
								</div>
							</div>
                    <label>Subject</label>
                    <input placeholder='Appraisal Issue'></input>
                    <label>Message</label>
                    <textarea placeholder='Hi, ...'></textarea>
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