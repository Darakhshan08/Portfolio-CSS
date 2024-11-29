import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "../style/contact.css"; // CSS file import

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">
          Contact <span className="highlight">Us</span>
        </h1>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="contact-heading">Get in Touch</h2>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <p className="item-title">Phone</p>
                <p className="item-text">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <p className="item-title">Email</p>
                <p className="item-text">darakhshanshah8@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <p className="item-title">Address</p>
                <p className="item-text">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
                required
              />
            </div>

            <div className="form-grid">
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="form-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
