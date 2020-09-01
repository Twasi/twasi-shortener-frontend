import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import './_style.css';

class Header extends Component {
  render() {
    return (
    <header>
      <div className="header">
        <div className="logo">
          <Logo color={'#2f80ed'} />
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
