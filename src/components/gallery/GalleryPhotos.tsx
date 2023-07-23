import { useState } from 'react';
import mainGallery from '../../common/data/GalleryList';
import type GalleryData from '@entities/GalleryData';
// import { nanoid } from 'nanoid';

const GalleryPhotosComponent = () => {
  const [data, setData] = useState<GalleryData[]>(mainGallery);
  return (
    <>
      {data.map(({ photo, alt }, ind) => {
        return (
          <li className="gallery-photos__item" key={ind}>
            <img className="gallery-photos__img" src={photo} alt={alt} loading="lazy" />
          </li>
        );
      })}
    </>
  );
};

export default GalleryPhotosComponent;
