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
      <div className="map">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.033381777637!2d144.95339861515945!3d-37.81737114336811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642a68d8c34a5%3A0x129e5b0a84d8173!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1624461070749!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>
      <ul className="social">
        <li>
          <a href="#!" className="telegram">
            <i className="bi bi-telegram"></i>
          </a>
        </li>
        <li>
          <a href="#!" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#!" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#!" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#!" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#!" className="github">
            <i className="bi bi-github"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
