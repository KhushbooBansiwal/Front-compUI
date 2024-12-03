import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Form */}
      <form className="contact-form">
        <h2>Contact Us</h2>
        <p>We’d love to hear your thoughts, feedback, or any queries. Drop us a message below.</p>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/components">Components</Link>
        </div>
        <div className="footer-contact">
          <a
            href="https://github.com/KhushbooBansiwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:bansiwalkhushboo8@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/khushboo-bansiwal-65991a174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-copyright">© 2024 Component UI</div>
      </footer>
    </div>
  );
};

export default Contact;
