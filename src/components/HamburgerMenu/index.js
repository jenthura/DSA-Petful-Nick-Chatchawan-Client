import React from 'react';
import Hamburger from 'hamburger-react';

function HamburgerMenu() {
  return <div>
    <Hamburger onToggle={toggled => ...} />
    </div>;
}

export default HamburgerMenu;
