import React from 'react';
import socialsList from '../../common/socials/SocialsList';

const SocialComponent = (): JSX.Element => {
  return (
    <ul className="social-list">
      {socialsList.map(({ path, component }, ind) => (
        <li className="social-list__link" key={ind}>
          <a className="social-list__link" href={path} target="_blank">
            {React.createElement(component)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialComponent;
