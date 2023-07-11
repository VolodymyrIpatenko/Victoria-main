import React from 'react';

import SocialComponent from './SocialsComponent';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-wrraper">
          <div>
            <h1 className="hero-title">Victoria</h1>
            <p className="hero-description">Сильне тіло, сильний дух</p>
            <button className="hero-btn">Записатися</button>
          </div>
          <div className="wrapp">
            <img src={process.env.PUBLIC_URL + '/hero.png'} alt="" />
          </div>
        </div>
        <div className="socials-wrapp">
          <span className="line"></span>
          <SocialComponent />
          <span className="second"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
