import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  // set up state using useDarkMode and set the initial
  // value to false
  const [darkMode, setDarkMode] = useDarkMode(false);

  // when user toggles dark mode, darkMode is toggled to either
  // true or false, based on the previous value
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          // call toggleMode to set darkMode
          onClick={toggleMode}
          // set the div class based on whether darkMode is 
          // true or false. Uses useDarkMode to set the 
          // body class
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
