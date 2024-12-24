import React from 'react';
import './LandingPage.css';
import gymlogo from './assets/images/gymlogo.png';
import chatpic from './assets/images/chat.png';
import coachingpic from './assets/images/coaching.png';
import nutritionpic from './assets/images/nutrition.png';
import instagram from './assets/images/instagram.png';
import facebook from './assets/images/facebook.png';
import whatsapp from './assets/images/whatsapp.png';

const LandingPage = ({ navigateToAdmin }) => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Membership />
      <VisitGym />
      <AdminLogin navigateToAdmin={navigateToAdmin} />
      <Footer />
    </div>
  );
};

const Header = () => (
  
    <header className="header">
      <div className="logo-container">
        <a href="/" className="logo-link">
          <img src={gymlogo} alt="Gym Logo" className="logo" />
          <span className="logo-text">GYM</span>
        </a>
      </div>
      <nav className="nav-menu">
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Why Join Us?</a>
        <a href="#plan" className="nav-link">Plan</a>
        <a href="#visit-gym" className="nav-link">Visit our Gym</a>
        <a href="#admin-login" className="nav-link cta">Admin Login</a>
      </nav>
    </header>
  );


const Hero = () => (
  <section className="hero">
    <h1>Start a better shape of you!</h1>
    <p>Come Join Us!</p>
    <a href="#about" className="hero-button">Learn More</a>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <h2>About Gym For Men & Women</h2>
    <p>
      Gym Fitness Center provides proper training and conditioning for members
      who want to improve and transform their body with programs based on body
      composition.
    </p>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <h2>What we offer:</h2>
    <div className="service-item">
      <img src={chatpic} alt="24/7 Chat" />
      <p>24/7 Chat</p>
    </div>
    <div className="service-item">
      <img src={coachingpic} alt="1 on 1 Coaching" />
      <p>1 on 1 Coaching</p>
    </div>
    <div className="service-item">
      <img src={nutritionpic} alt="Nutrition Plan" />
      <p>Nutrition Plan</p>
    </div>
  </section>
);

const Membership = () => (
  <section id="plan" className="membership">
    <h2>Our Plan:</h2>
    <div className="plan">7 Days</div>
    <div className="plan">1 Month</div>
    <div className="plan">6 Months</div>
    <div className="plan">1 Year</div>
  </section>
);

const VisitGym = () => (
  <section id="visit-gym" className="visit-gym">
    <h2>Visit Our Gym</h2>
    <div className="gym-info">
      <div className="map">
        <iframe
          title="gym-location"
          src="https://www.google.com/maps/embed?pb=<YOUR_MAP_EMBED_CODE>"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Fitness St, Gym City</p>
        <p><strong>Email:</strong> <a href="mailto:contact@gymcenter.com">contact@gymcenter.com</a></p>
        <p><strong>Contact Number:</strong> <a href="tel:+123456789">+123 456 789</a></p>
        <div className="socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const AdminLogin = ({ navigateToAdmin }) => (
    <section id="admin-login" className="admin-login">
      <h2>Admin Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigateToAdmin(); // Navigate to the Admin Dashboard
        }}
      >
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" required/>
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
  

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <div>
        <h4>GYM</h4>
        <a href="#why-join-us">Why Join Us</a>
        <a href="#about">About</a>
        <a href="#plan">Plan</a>
        <a href="#visit-our-gym">Visit Our Gym</a>
      </div>
      <div>
        <h4>MEMBERS</h4>
        <a href="/faqs">FAQs</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
    <p>&copy; 2024 Gym Fitness Center. All rights reserved.</p>
  </footer>
);

export default LandingPage;
