import React from 'react'
import './css/Contact.css'

export default function Contact() {
  return (
    <section id='contact'>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut dignissimos amet numquam nobis laborum mollitia distinctio ducimus rerum in perferendis eligendi nesciunt adipisci ipsam optio, excepturi tempora esse eum.</p>
            <div className="contact-links">
            <a href=""><i class="fa-solid fa-envelope"></i><span>abc@gmail.com</span></a>
            <a href=""><i class="fa-brands fa-twitter"></i><span>@lolur</span></a>
            <a href=""><i class="fa-brands fa-linkedin"></i><span>@lolur</span></a>
            </div>
        </div>
    </section>
  )
}
