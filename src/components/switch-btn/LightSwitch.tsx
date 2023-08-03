import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { FiSun } from 'react-icons/fi';
import { BsMoonFill } from 'react-icons/bs';

function SwitchMode(): JSX.Element {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="theme-btn">
      {darkMode ? (
        <FiSun onClick={() => toggleDarkMode()}></FiSun>
      ) : (
        <BsMoonFill onClick={() => toggleDarkMode()}></BsMoonFill>
      )}
    </div>
  );
}

export default SwitchMode;
