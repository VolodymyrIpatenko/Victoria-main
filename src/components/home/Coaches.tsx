import React, { useState } from 'react';
import coachData from 'src/common/data/CoachData';
import type CoachData from '../../entities/CoachData';
import { nanoid } from 'nanoid';
const id = nanoid();

const CoachesList: React.FC = () => {
  const [coachesData, _] = useState<CoachData[]>(coachData);
  return (
    <section>
      <div className="coaches-container">
        <h2 className="second-heading">Тренери</h2>
        <ul className="coaches-list">
          {coachesData.map(({ photo, alt, name, description }, ind) => {
            return (
              <li className="coaches-list__item" key={ind}>
                <img src={photo} alt={alt} />
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CoachesList;
