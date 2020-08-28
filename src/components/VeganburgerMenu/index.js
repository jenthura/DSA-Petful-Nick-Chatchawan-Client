import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function VeganburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function closeMenu() {
    setIsOpen(false);
  }

  function isMenuOpen(state) {
    if (state.isOpen === isOpen) {
      return;
    }
    setIsOpen(state.IsOpen);
  }

  return (
    <Menu isOpen={isOpen} onStateChange={isMenuOpen} right>
      <Link className='menu-item' onClick={closeMenu} to='/'>
        Home
      </Link>
      <Link className='menu-item' onClick={closeMenu} to='/adopt'>
        Adopt
      </Link>
    </Menu>
  );
}

export default VeganburgerMenu;
