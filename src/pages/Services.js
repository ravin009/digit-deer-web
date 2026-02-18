// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData'; // Importing your data
import '../App.css';

const Services = () => {
  return (
    <div className="services-page">
      
      {/* 1. Page Header */}
      <div className="services-header">
        <h1>Our Expertise</h1>
        <p>Comprehensive IT Solutions tailored for your business growth.</p>
      </div>

      {/* 2. Services Grid */}
      <div className="services-container">
        {services.map((service) => (
           <div key={service.id} className="service-card-large">
             <div className="service-icon-large">{service.icon}</div>
             <h2>{service.title}</h2>
             <p>{service.desc}</p>
             <Link to="/contact" className="service-btn">Get Started</Link>
           </div>
        ))}
      </div>

      {/* 3. Call to Action (Bottom Section) */}
      <div className="cta-section">
        <h2>Have a specific project in mind?</h2>
        <p>Let's discuss how we can bring your idea to life.</p>
        <Link to="/contact" className="cta-button">Talk to our Experts</Link>
      </div>

    </div>
  );
};

export default Services;