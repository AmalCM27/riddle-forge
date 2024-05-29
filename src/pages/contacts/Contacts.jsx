import React from 'react';
import './contacts.css';

function Contacts({ reference }) {
  // Отзывы клиентов
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great service! I found the game I was looking for at a great price. Will definitely shop here again.',
      rating: 5,
      photo: 'https://via.placeholder.com/150', // Пример URL изображения
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Riddle-Forge is my go-to place for all my gaming needs. The staff is friendly and helpful, and they always have the latest releases in stock.',
      rating: 4,
      photo: 'https://via.placeholder.com/150', // Пример URL изображения
    },
    {
      id: 3,
      author: 'Max Johnson',
      text: 'I had a question about one of the games, and the customer support team at Riddle-Forge was quick to respond and very knowledgeable. Excellent service!',
      rating: 5,
      photo: 'https://via.placeholder.com/150', // Пример URL изображения
    },
  ];

  return (
    <section id="contact" className='contact' ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>Get in Touch</h1>
        </div>
        <p className="ConatactTextWithME">Welcome to Riddle-Forge, your ultimate destination for the latest gaming releases and experiences! Have questions, feedback, or need assistance? Feel free to reach out to us. Our dedicated team is here to help you navigate through the world of gaming.</p>
        <div className="form-container">
          <h2>Contact Us</h2>
          <p className="ConatactTextWithME">Use the form below to send us a message, and we'll get back to you as soon as possible. We look forward to hearing from you!</p>
          <form action={`mailto:azamatovamal5@gmail.com`} method="POST" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className="form-input" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
        <div className="map-container">
          <p className="ConatactTextWithME">Explore our physical location on the map below to find us easily. Whether you're a local or visiting from afar, we're excited to welcome you to Riddle-Forge!</p>
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
          <p className="ConatactTextWithME">Connect with us on social media to stay updated on the newest game releases, promotions, and community events. Join our gaming community and be part of the conversation!</p>
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
        <div className="reviews-container">
          <h2>Customer Reviews</h2>
          {reviews.map(review => (
            <div key={review.id} className="review">
              <img src={review.photo} alt={`Customer ${review.id}`} className="review-img" />
              <div className="review-content">
                <p className="review-text">{review.text}</p>
                <div className="rating">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                  {Array.from({ length: 5 - review.rating }, (_, index) => (
                    <i key={index} className="bi bi-star"></i>
                  ))}
                </div>
                <p className="review-author">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts
