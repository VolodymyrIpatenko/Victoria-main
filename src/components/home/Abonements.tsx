import React, { useState } from 'react';
import type Abonements from '@entities/Abonements';
import AbonementsList from 'src/common/data/AbonementsData';
import { nanoid } from 'nanoid';
const id = nanoid();

const AbonementComponent: React.FC = () => {
  const [data, _] = useState<Abonements[]>(AbonementsList);
  return (
    <section>
      <div className="abonements-container">
        <h2 className="second-heading">Абонементи</h2>
        <ul className="abonements-list">
          {data.map(({ expires, duration, price, action }, ind) => {
            return (
              <li className="abonements-list__item" key={ind}>
                <h3 className="abonements-list__item-title">{duration}</h3>
                <p className="abonements-list__item-price">{price}</p>
                <p className="abonements-list__item-duration">{expires}</p>
                <button className="signup-btn">{action}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AbonementComponent;
