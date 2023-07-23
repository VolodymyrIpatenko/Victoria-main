import React from 'react';
import type ProductsData from '@entities/SportBarData';

interface ImgListProps {
  itemsGallery: ProductsData[];
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}


const ProductsGalleryList = React.memo(({ itemsGallery, handleClick }: ImgListProps) => {
  return (
    <ul className="products-gallery">
      {itemsGallery.map(({ image, price, description }, index) => (
        <li key={index} className="products-gallery__item">
          <img width="300" src={image} alt={description} />
          <div className="products-gallery__card">
            <p>{description}</p>
            <div className="card">
              <p>{price}</p>
              <button className="card-btn" onClick={handleClick} id={String(index)}>
                Детальніше
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default ProductsGalleryList;
