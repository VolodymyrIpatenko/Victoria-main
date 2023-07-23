import React, { useState } from 'react';
import coachData from 'src/common/data/CoachData';
import type CoachData from '../../entities/CoachData';
import '@fremtind/jkl-core/core.min.css';
import Observer from '../../utils/Observer';

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
                <Observer>
                  {({ isIntersecting }) => (
                    <div className={isIntersecting ? 'intersect' : 'not-intersect'}>
                      <p>{description}</p>
                    </div>
                    // <p className={isIntersecting ? 'intersect' : 'not-intersect'}>{description}</p>
                  )}
                </Observer>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CoachesList;
