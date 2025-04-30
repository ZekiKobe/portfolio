import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // <--- Import Swal
import './contactForm.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pskqh9h',    
      'template_bgj6vlx',   
      form.current,
      'pR5pzsPyt0x5VFPCp'     
    )
    .then((result) => {
        console.log('Message sent successfully:', result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will contact you soon.',
        });
        form.current.reset(); // Clear form after successful send
    }, (error) => {
        console.error('Failed to send message:', error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again.',
        });
    });
  };

  return (
    <div className="contact-form-content">
      <h5>LET'S GET IN TOUCH!</h5>
      <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
              <input type="text" name="firstname" placeholder="First Name" required />
              <input type="text" name="lastname" placeholder="Last Name" required />
          </div>
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea name="message" rows={3} placeholder="Message" required />

          <button type="submit">SEND</button>
      </form>
    </div>  
  );
}

export default ContactForm;
