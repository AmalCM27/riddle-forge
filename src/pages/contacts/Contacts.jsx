import React from 'react';
import './contacts.css';

function Contacts({ reference }) {
  return (
    <section id="contact" className='contact' ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>Contacts</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus labore, aut error quo autem sapiente consequuntur quasi sit quidem minus soluta illum veritatis sed unde laborum corrupti nobis adipisci.</p>
      </div>
      <div className="form-container">
      <h2>Contact Us</h2>
          <form action={`mailto:azamatovamal5@gmail.com`} method="POST" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="form-input"  placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" equired />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className="form-input"  placeholder="Your Message"  required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
        <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19047.59400981204!2d78.37927429999999!3d42.491178499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38859a0e2b3b14c7%3A0x400ad50862bc000!2sKarakol%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1625647260427!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
      <ul className="social">
        <li>
          <a href="https://t.me/But4e_r" className="telegram" target='_blank'>
            <i className="bi bi-telegram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/%D0%B0%D0%BC%D0%B0%D0%BB%D1%8C-%D0%B0%D0%B7%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D0%B2-834a232a2/" className="linkedin" target='_blank'>
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/clarklymitten_27?igsh=MTA2MzBpNG95Nnd3ZQ%3D%3D&utm_source=qr" className="instagram" target='_blank'>
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61557459478694" className="facebook" target='_blank'>
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://x.com/AmalAzamat78073" className="twitter" target='_blank'>
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/AmalCM27" className="github" target='_blank'>
            <i className="bi bi-github"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
