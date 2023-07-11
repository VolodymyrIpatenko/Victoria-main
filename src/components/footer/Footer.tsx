// import { Footer, MailLink } from './Footer.styled';
// import { LogoImg } from '../header/Header.styled';
import { Outlet, Link } from 'react-router-dom';
import { GiPhone } from 'react-icons/gi';
import navigation from '../../common/navigation/Navigation';

const PageFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/logo-type.png'} alt="логотип сайту" />
          </Link>
          {/* <div className="wrap"> */}
          <nav className="nav">
            <ul className="nav-list">
              {navigation.map(({ id, title, path }, ind) => (
                <li key={ind}>
                  <Link className="nav-list__link" to={path}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="contacts-list">
            <GiPhone></GiPhone>
            <a className="contacts-list__link" href="tel:+380 95 033 5563">
              +380 95 033 5563
            </a>
          </div>
          {/* </div> */}
        </div>
      </footer>
      {/* <MobileMenuComponent/> */}
    </>
  );
};

export default PageFooter;
