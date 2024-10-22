import React, { useRef } from 'react';
import './contactForm.css'
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_uu8dtrm', 'template_6nncnep', form.current, {
        publicKey: 'o1-mTkrgDWjXU1-QW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='contactForm-container'>
      <h1 className='title-contactForm'>Contact me</h1>
      <h4 className='description-contactForm'>Please fill out the form below to discuss any work upportunities.</h4>
      <form action="" className="contactForm" onSubmit={sendEmail} ref={form}>
        <input type="text" name="from_name" className="name" placeholder='Your name' />
        <input type="text" name="from_email" className="email" placeholder='Your email' />
        <textarea className="msg" name="message" rows="5" placeholder='Your message'></textarea>
        <button className="submitBtn" type='submit' value="send">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm
