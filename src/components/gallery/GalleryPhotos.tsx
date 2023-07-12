import { useState } from 'react';
import mainGallery from '../../common/data/GalleryList';
import type GalleryData from '@entities/GalleryData';
import { nanoid } from 'nanoid';
// const id = nanoid();

const GalleryPhotosComponent = () => {
  const [data, setData] = useState<GalleryData[]>(mainGallery);
  return (
    <>
      {data.map(({ photo, alt }, ind) => {
        return (
          <li key={ind}>
            <img src={photo} alt={alt} loading="lazy" />
          </li>
        );
      })}
    </>
  );
};

export default GalleryPhotosComponent;
