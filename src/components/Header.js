import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import './header.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../sidebar/SideBar';

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Williamson Pest Control
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/properties-page'
                className='nav-links'
              >
                Properties
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/new-property'
                className='nav-links'
              >
                New Property
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;