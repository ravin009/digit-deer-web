import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('Send Message');
  // New state for in-form alerts (replaces toast for better mobile visibility)
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Front-end Validation ---
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // UPDATED REGEX: Allows optional '+' and 10-12 digits
    const phoneRegex = /^\+?[0-9]{10,12}$/;

    // Clear previous feedback
    setFeedback({ type: '', message: '' });

    if (formData.name.trim().length < 3) {
      setFeedback({ type: 'error', message: "Please enter a valid name (min 3 characters)" });
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setFeedback({ type: 'error', message: "Please enter a valid email address" });
      return false;
    }
    
    // Clean spaces and check phone
    const cleanPhone = formData.phone.replace(/\s/g, '');
    if (formData.phone && !phoneRegex.test(cleanPhone)) {
      setFeedback({ type: 'error', message: "Please enter a valid phone number (e.g. +919876543210)" });
      return false;
    }

    if (!formData.service) {
      setFeedback({ type: 'error', message: "Please select a service" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    setStatus('Sending...');

    try {
      const response = await fetch('https://digitdeer.chatfun.live/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFeedback({ 
            type: 'success', 
            message: "🚀 Message sent successfully! Our team will contact you soon." 
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' }); 
      } else {
        setFeedback({ 
            type: 'error', 
            message: "❌ Failed: " + result.message 
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({ 
          type: 'error', 
          message: "⚠️ Connection Error: Is the backend server running?" 
      });
    } finally {
      setStatus('Send Message');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? Let's discuss how we can help your business grow.</p>
      </div>

      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="info-desc">Fill up the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 8650788779</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>support@digitdeersolutions.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Address</h4>
              <p>Rudrapur (Udham Singh Nagar) Uttarakhand, India, 263153</p>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111762.63595772322!2d79.35165184294406!3d28.98506821217034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390af36e651d451b%3A0xc3f5c00e12f0e8a7!2sRudrapur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000" 
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            
            {/* IN-FORM FEEDBACK MESSAGE */}
            {feedback.message && (
                <div className={`form-feedback ${feedback.type}`}>
                    {feedback.message}
                </div>
            )}

            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            </div>

            <div className="form-group">
              <label>Service Interested In</label>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="" disabled>Select a Service</option>
                <option value="Mobile App">Mobile App Development</option>
                <option value="Web Development">Web Development</option>
                <option value="Desktop Software">Desktop Software</option>
                <option value="Web Portal">Web Portal</option>
                <option value="Product Management">IT Product Management</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'Sending...'}>
              {status}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;