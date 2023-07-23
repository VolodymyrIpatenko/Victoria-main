import { AiOutlineMenu } from 'react-icons/ai';
import { useToggle } from '../../hooks/customToggle';
import { Breakpoint } from 'react-socks';
import navigation from '../../common/navigation/Navigation';
import { Link } from 'react-router-dom';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuOpen] = useToggle();

  return (
    <ul>
      <Breakpoint small down>
        <AiOutlineMenu onClick={() => setMobileMenuOpen.toggle()}></AiOutlineMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <ul>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </ul>
  );
}
