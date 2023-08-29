import { useToggle } from '../../hooks/customToggle';
import { DarkModeContext } from '../../context/DarkModeContext';
import React, { useContext } from 'react';
import GalleryPhotosComponent from './GalleryPhotos';

const Gallery: React.FC = () => {
  const [row, setToggleDirection] = useToggle();
  const { darkMode } = useContext(DarkModeContext);
  const Theme = darkMode ? 'dark-theme' : 'light-theme';
  return (
    <main>
      <section>
        <div className={`${Theme} gallery-container`}>
          <GalleryPhotosComponent />
        </div>
      </section>
    </main>
  );
};

export default Gallery;
