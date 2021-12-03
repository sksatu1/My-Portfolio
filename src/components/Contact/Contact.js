import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pgzymzx', 'template_1zynq77', form.current, 'user_bjy506hVy8IwOUJGz8biJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div id='Contacts' className="container py-3">
            <h1><span>Contact</span> Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div><label>Name</label></div>
                <input className="inputField" type="text" name="user_name" />
                <label>Email</label>
                <input className="inputField" type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input className='submit-btn' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;