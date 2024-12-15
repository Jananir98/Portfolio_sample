import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const data = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'RESUME', to: '/resume' },
  { label: 'CONTACT', to: '/contact' },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleClose = () => {
    setToggleIcon(false);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to={'/'} className='navbar-logo'>
          <FaReact size={30} />
        </Link>
        <ul className={`navbar-menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item) => (
            <li key={item.label} className='navbar-menu-list'>
              <Link
                className={`navbar-menu-link ${location.pathname === item.to ? 'active' : ''}`}
                to={item.to}
                onClick={handleClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav-icons' onClick={handleToggle}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
