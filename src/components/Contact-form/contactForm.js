import './contactForm.css'

function ContactForm() {
  return (
    <section className='contactForm-container'>
        <h1 className='title-contactForm'>Contact me</h1>
        <h4 className='description-contactForm'>Please fill out the form below to discuss any work upportunities.</h4>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder='Your name' />
          <input type="text" className="email" placeholder='Your email' />
          <textarea className="msg" name="message" rows="5" placeholder='Your message'></textarea>
          <button className="submitBtn" type='submit' value="send" >Submit</button>
        </form>
    </section>
  )
}

export default ContactForm
