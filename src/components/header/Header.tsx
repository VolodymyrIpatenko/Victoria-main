import { Link } from 'react-router-dom';
import { GiPhone } from 'react-icons/gi';
import navigation from '../../common/navigation/Navigation';
import SwitchMode from '../switch-btn/LightSwitch';
import { Breakpoint } from 'react-socks';
import MobileMenuComponent from './MobileMenu';

const HeaderComponent: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <header className="header">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/logo-type.png'} alt="логотип сайту" />
          </Link>

          <div className="wrap">
            <nav className="nav">
              <ul className="nav-list">
                {navigation.map(({ id, title, path }) => (
                  <li key={id}>
                    <Link className="nav-list__link" to={path}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="contacts-list">
              <li>
                <Breakpoint className="desktop-tel" large up>
                  <GiPhone></GiPhone>
                </Breakpoint>
                <a className="contacts-list__link" href="tel:+380974456324">
                  +380974456324
                </a>
              </li>
            </ul>
          </div>
          <MobileMenuComponent />
          <SwitchMode />
        </header>
      </div>
    </>
  );
};

export default HeaderComponent;
