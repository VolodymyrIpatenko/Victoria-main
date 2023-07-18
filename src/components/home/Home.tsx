import React, { useContext } from 'react';
import Hero from './HeroSection';
import About from './About';
import AbonementComponent from './Abonements';
import CoachesList from './Coaches';
import Contacts from './Contacts';
import { DarkModeContext } from '../../context/DarkModeContext';

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const Theme = darkMode ? 'dark-theme' : 'light-theme';
  return (
    <main>
      <div className={`${Theme}`}>
        <Hero />
        <About />
        <AbonementComponent />
        <CoachesList />
        <Contacts />
      </div>
    </main>
  );
};

export default Home;
