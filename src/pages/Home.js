// src/pages/Home.js
import React from 'react';
import { services } from '../data/servicesData';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <header className="hero">
        <h1>IT Solutions for the Future</h1>
        <p>Mobile Apps, Web Development, and Enterprise Software under one roof.</p>
        <button className="cta-btn">View Our Work</button>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Expertise</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;