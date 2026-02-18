// src/pages/About.js
import React from 'react';
import '../App.css'; // We will add specific styles for this below

const About = () => {
  return (
    <div className="about-page">
      
      {/* 1. Hero Section */}
      <div className="about-hero">
        <h1>About Digit Deer Solutions</h1>
        <p>Innovating Digital Experiences for a Connected World.</p>
      </div>

      <div className="about-container">
        
        {/* 2. Who We Are */}
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Digit Deer Solutions is a premier IT consultancy and development firm dedicated to transforming business ideas into robust digital realities. 
            We specialize in end-to-end development, offering a complete ecosystem of services ranging from 
            <strong> Mobile Apps</strong> and <strong>Web Portals</strong> to complex <strong>Desktop Software</strong> and <strong>IT Product Management</strong>.
          </p>
          <p>
            Our team of expert developers and strategists works tirelessly to deliver scalable, secure, and high-performance solutions tailored to your unique business needs.
          </p>
        </section>

        {/* 3. Mission & Vision Cards */}
        <div className="mission-vision-grid">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>To empower businesses by delivering innovative technology solutions that drive efficiency, growth, and user engagement.</p>
          </div>
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>To be the global partner of choice for enterprises seeking digital transformation through quality code and creative problem-solving.</p>
          </div>
        </div>

        {/* 4. Why Choose Us */}
        <section className="why-us-section">
          <h2>Why Choose Digit Deer?</h2>
          <ul className="features-list">
            <li>
              <strong>Full-Cycle Development:</strong> We handle everything from initial concept and design to development, testing (VAPT), and deployment.
            </li>
            <li>
              <strong>Multi-Platform Expertise:</strong> Seamless apps on Android, iOS, Web, Windows, and macOS.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> We don't just build software; we build relationships. Your success is our success.
            </li>
            <li>
              <strong>Modern Tech Stack:</strong> We use the latest technologies like React, Flutter, Node.js, and Cloud Solutions to future-proof your product.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default About;