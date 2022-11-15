import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="navigation">
      <div className="flexspace"></div>
      <div className="media item">leadership</div>
      <div className="media item">press</div>
      <div className="blog item">blog</div>
      <div className="contact item">contact</div>
    </div>
  );
}

export default Header;