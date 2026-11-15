import React, { useState } from 'react';
import './Contact.css';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <span className="badge">Get In Touch</span>
        <h1>Contact Our Team</h1>
        <p>Have questions about products, orders, or custom solutions? We're here to help.</p>
      </section>

      {/* Main Content Layout */}
      <main className="contact-wrapper">
        {/* Left Side: Contact Info */}
        <div className="info-card">
          <h2>Get In Touch</h2>
          <p className="info-subtitle">
            Fill out the form or reach out to us directly through any of the channels below.
          </p>

          <div className="info-details">
            <div className="info-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span className="label">Location</span>
                <p className="value">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span className="label">Phone</span>
                <p className="value">+92 300 1234567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <span className="label">Email</span>
                <p className="value">support@pricestore.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span className="label">Business Hours</span>
                <p className="value">Monday – Saturday</p>
                <span className="sub-value">9:00 AM – 8:00 PM (PKT)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="modern-form">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Ali Ahmed"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your details or order inquiry here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </main>

      {/* Modern Banner */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Need Instant Assistance?</h2>
          <p>Our dedicated support team is available online to assist you right away.</p>
        </div>
        <button className="btn-secondary">Contact Support</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Price Store</h3>
            <p>Your trusted e-commerce platform in Pakistan.</p>
          </div>
          <p className="copyright">© 2026 Price Store. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;