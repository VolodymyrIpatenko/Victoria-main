import { NavLink, Link } from 'react-router-dom';
import { GiPhone } from 'react-icons/gi';
import navigation from '../../common/navigation/Navigation';
// import MobileMenuComponent from './MobileMenu';

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
                <GiPhone></GiPhone>
                <a className="contacts-list__link" href="tel:+380974456324">
                  +380974456324
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
      {/* <MobileMenuComponent/> */}
    </>
  );
};

export default HeaderComponent;
