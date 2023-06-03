import '../../css/landing-page.css';
import React, { useState } from 'react';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import about_text from '../../data/about';
import { useNavigate } from 'react-router-dom';
import { REGISTER_PATH } from '../../Routes/paths';
import { LOGIN_PATH } from '../../Routes/paths';

const LandingPage = () => {
  const navigate = useNavigate();

  const [currentAbout, setCurrentAbout] = useState(0);
  const [fader, setFader] = useState("fadeIn");

  const changeDescription = (index: any) => {
    setFader('fadeOut'); // Start fading out

    // Simulate some delay for the fade-out animation
    setTimeout(() => {
      setCurrentAbout(index);
      setFader('fadeIn'); // Start fading in
    }, 200); // Adjust the delay as needed
  };

  return (
    <div className="landing-page">
      <section className="login">
        <div className="banner">
          <img className="banner-img" src="res/banner.svg" alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div className="join-login">
            <p className="slogan">Online Banking Made Easy.</p>
            <button className="button join-button" onClick={() => navigate(REGISTER_PATH)}>JOIN NOW</button>
            <button className="button login-button" onClick={() => navigate(LOGIN_PATH)}>LOGIN</button>
          </div>
        </div>
      </section>
      <section className="about">
        <img className="about-background" src="res/wave.svg" />
        <br></br>
        <img className="about-bank-img" src="res/bank.svg" alt="" />
        <button className="about-title">ENJOY A LUXURIOUS<br></br>USER EXPERIENCE</button>
        <br></br><br></br>
        <div className="about-text">
          <div className="about-buttons">
            <div className="button1">
              <button className="about-button" onMouseOver={() => changeDescription(1)} onMouseLeave={() => changeDescription(0)}>Highest class security</button><br></br><br></br>
            </div>
            <div className="button2">
              <button className="about-button" onMouseOver={() => changeDescription(2)} onMouseLeave={() => changeDescription(0)}>24/7 Instant customer service</button><br></br><br></br>
            </div>
            <div className="button3">
              <button className="about-button" onMouseOver={() => changeDescription(3)} onMouseLeave={() => changeDescription(0)}>Be notified and reminded of events</button><br></br><br></br>
            </div>
            <div className="button4">
              <button className="about-button" onMouseOver={() => changeDescription(4)} onMouseLeave={() => changeDescription(0)}>Pay bills and loans from home</button><br></br>
            </div>
          </div>
          <div className="about-description">
            <div className={`about-desc ${fader}`}>
              <p id="tagline" className="fulljustify">
                {
                  about_text[currentAbout]
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <br></br><br></br><br></br>
      <section className="testimonials">
        <div className="testimonials-title">
          <p className="testimonials-title-text">TESTIMONIALS</p>
        </div>
        <div className="testimonials-carousel">
          <TestimonialCarousel />
        </div>
      </section>
      <section className="app">
        <img className="app-img" src="res/logo.png" alt="" />
        <div className="app-download">
          <p className="app-download-text">Download our app.</p>
          <div className="app-download-icons">
            <img className="app-download-img" src="res/appstore.svg" alt="" />
            <img className="app-download-img" src="res/googleplay.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="footer">
        <img className="footer-icon" src="res/ig.svg" alt="" />
        <img className="footer-icon" src="res/fb.svg" alt="" />
        <img className="footer-icon" src="res/mail.svg" style={{ height: "20px" }} alt="" />
      </section>
    </div>
  );
};

export default LandingPage;