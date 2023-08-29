import { useState } from 'react';
import mainGallery from '../../common/data/GalleryList';
import type GalleryData from '@entities/GalleryData';
import { useToggle } from '../../hooks/customToggle';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { Breakpoint } from 'react-socks';

const GalleryPhotosComponent = () => {
  const [data, setData] = useState<GalleryData[]>(mainGallery);
  const [row, setToggleDirection] = useToggle();
  const GalleryDirection = row ? 'gallery-row' : 'gallery-column';
  return (
    <>
      <Breakpoint className="breakpoint" xlarge up>
        <>
          <FaExpandArrowsAlt
            onClick={() => setToggleDirection.toggle()}
            title="Змінити напрям"
          ></FaExpandArrowsAlt>
        </>
      </Breakpoint>
      <ul className={`gallery-photos ${GalleryDirection}`}>
        {data.map(({ photo, alt }, ind) => {
          return (
            <li className="gallery-photos__item" key={ind}>
              <img className="gallery-photos__img" src={photo} alt={alt} loading="lazy" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GalleryPhotosComponent;
