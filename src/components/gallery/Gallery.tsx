import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useToggle } from '../../hooks/customToggle';
import { Breakpoint } from 'react-socks';
import { DarkModeContext } from '../../context/DarkModeContext';
import React, { useContext } from 'react';
import GalleryPhotosComponent from './GalleryPhotos';

const Gallery: React.FC = () => {
  const [row, setToggleDirection] = useToggle();
  const GalleryDirection = row ? 'gallery-row' : 'gallery-column';
  const { darkMode } = useContext(DarkModeContext);
  const Theme = darkMode ? 'dark-theme' : 'light-theme';
  return (
    <main>
      <section>
        <div className={`${Theme} gallery-container`}>
          <Breakpoint className="breakpoint" xlarge up>
            <>
              <FaExpandArrowsAlt
                onClick={() => setToggleDirection.toggle()}
                title="Змінити напрям"
              ></FaExpandArrowsAlt>
            </>
          </Breakpoint>
          <ul className={`${GalleryDirection}`}>
            <GalleryPhotosComponent />
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
