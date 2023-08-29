import { AiOutlineMenu } from 'react-icons/ai';
import { Breakpoint } from 'react-socks';
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
          <ul className="contacts-list">
            <li>
              <a className="contacts-list__link" href="tel:+380950335563">
                <GiPhone></GiPhone>
                +380 95 033 5563
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
