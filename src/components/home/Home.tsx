import React from 'react';
import Hero from './HeroSection';
import About from './About';
import AbonementComponent from './Abonements';
import CoachesList from './Coaches';
import Contacts from './Contacts';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <AbonementComponent />
      <CoachesList />
      <Contacts />
    </main>
  );
};

export default Home;
