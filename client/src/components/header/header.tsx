import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './header.css';
import Logo from './logo/logo';

function Header() {

  const [filled, setFilled] = useState('');

  const listenScrollEvent = (e:any) => {
    if (window.scrollY > window.innerHeight) {
      setFilled(' color');
    } else {
      setFilled(' ');
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, []);

  function popMenu() {
    const menu = document.getElementsByClassName('mobile-navigation')[0];
    menu.classList.toggle('pop');
    const menuButton = document.getElementsByClassName('mobile-lines')[0];
    menuButton.classList.toggle('gone');
  }

  function closeOut() {
    const menu = document.getElementsByClassName('mobile-navigation')[0];
    menu.classList.toggle('pop');
    const menuButton = document.getElementsByClassName('mobile-lines')[0];
    menuButton.classList.toggle('gone');
  }

  return (
    <div className={'navigation' + filled}>
      <div className='mobile-lines' onClick={() => popMenu()}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className='mobile-navigation'>
          <div className='exit' onClick={() => closeOut()}>X</div>
            <a href="/" onClick={() => closeOut()}>Home</a>
            <a href="/about" onClick={() => closeOut()}>About</a>
            <a href="/speaking" onClick={() => closeOut()}>Speaking</a>
            <a href="/#appraisal" onClick={() => closeOut()}>Appraisal</a>
            <a href="/#premiere" onClick={() => closeOut()}>Premiere</a>
            {/* <a href="/media" onClick={() => closeOut()}>Media</a> */}
            <a href="/#contact" onClick={() => closeOut()}>Contact</a>
            <a href="https://www.linkedin.com/in/jillian-white-sra-93a23b6/" onClick={() => closeOut()}>Linkedin</a>

      </div>
      {/* <Logo></Logo> */}
      <div className="navflexspace"></div>
      <div className='underline'>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/speaking">Speaking</a></li>
          <li><a href="/#appraisal">Appraisal</a></li>
          <li><a href="/#premiere">Premiere</a></li>
          <li><a href="/media">Media</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
      <div className='divider'></div>
      <SocialIcon target={'_blank'} url='https://www.linkedin.com/in/jillian-white-sra-93a23b6/' bgColor='transparent' fgColor='white' className='ico'></SocialIcon>
      {/* <SocialIcon target={'_blank'} url='https://www.twitter.com/' bgColor='transparent' fgColor='white' className='ico'></SocialIcon> */}
      {/* <div className="media item">leadership</div>
      <div className="media item">press</div>
      <div className="blog item">blog</div>
      <div className="contact item">contact</div> */}
    </div>
  );
}

export default Header;