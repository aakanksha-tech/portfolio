import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simple client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Simulate sending message API
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status after a few seconds
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section reveal">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's discuss something great</h3>
          <p className="contact-text">
            I'm always open to discussing new project opportunities, design challenges, or engineering roles. Send me a message and I'll get back to you within 24 hours.
          </p>

          <div className="contact-cards">
            <a href="mailto:akanksha.bugad@gmail.com" className="contact-card glass-card">
              <Mail className="contact-icon" />
              <div className="card-info">
                <h4>Email</h4>
                <p>akanksha.bugad@gmail.com</p>
              </div>
            </a>

            <div className="contact-card glass-card">
              <MapPin className="contact-icon" />
              <div className="card-info">
                <h4>Location</h4>
                <p>Ichalkaranji, Maharashtra</p>
              </div>
            </div>

            <div className="contact-card glass-card">
              <MessageSquare className="contact-icon" />
              <div className="card-info">
                <h4>Chat Response</h4>
                <p>Under 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-container glass-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Aakanksha, I'd love to work with you on..."
                rows="5"
                className="form-input text-area"
                required
              ></textarea>
            </div>

            {/* Notification Messages */}
            {status === 'success' && (
              <div className="form-alert success">
                <CheckCircle size={18} /> Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="form-alert error">
                <AlertCircle size={18} /> {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
