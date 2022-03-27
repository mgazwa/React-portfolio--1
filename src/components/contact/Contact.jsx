import React from "react";
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {RiWhatsappFill} from "react-icons/ri"
import  {useRef} from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rf1zgpk', 'template_zwschao', form.current, 'HeBv8w6LCM4kZRie3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        {/*<h5>mgazwa@gmail.com</h5>*/}
                        <a href="mailto:mgazwa@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsMessenger className="contact_option-icon"/>
                        <h4>Messenger</h4>
                        {/*<h5></h5>*/}
                        <a href="https://m.me/marcin.gazwa" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiWhatsappFill className="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        {/*<h5></h5>*/}
                        <a href="https://api.whatsapp.com/send?phone=+48662008874" target="_blank">Send a message</a>
                    </article>

                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <input type="textarea"   placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;