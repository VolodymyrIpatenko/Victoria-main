import React from 'react';
import { Breakpoint } from 'react-socks';
import Contacts from '../contacts/Contacts';
import Modal from '../modal/Modal';
import { useToggle } from '../../hooks/customToggle';

import SocialComponent from './SocialsComponent';

const Hero: React.FC = () => {
  const [isOpenContactForm, setOpenContactForm] = useToggle();
  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <h1 className="hero-title">Victoria</h1>
          <p className="hero-description">Сильне тіло, сильний дух</p>
          <Breakpoint large up className="breakpoint">
            <button className="signup-btn" onClick={() => setOpenContactForm.toggle()}>
              Записатися
            </button>
            {isOpenContactForm ? (
              <Modal onClose={() => setOpenContactForm.toggle()}>
                <Contacts />
              </Modal>
            ) : null}
          </Breakpoint>
        </div>
        <div className="wrapp">
          <img className="hero-img" src={process.env.PUBLIC_URL + '/hero.webp'} alt="" />
          <Breakpoint small down>
            <button className="signup-btn" onClick={() => setOpenContactForm.toggle()}>
              Записатися
            </button>
            {isOpenContactForm ? (
              <Modal onClose={() => setOpenContactForm.toggle()}>
                <Contacts />
              </Modal>
            ) : null}
          </Breakpoint>
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
