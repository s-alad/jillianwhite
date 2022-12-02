import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
            <HashLink to="/" onClick={() => closeOut()}>Home</HashLink>
            <HashLink to="/about" onClick={() => closeOut()}>About</HashLink>
            <HashLink to="/speaking#speaking" onClick={() => closeOut()}>Speaking</HashLink>
            <HashLink to="/#appraisal" onClick={() => closeOut()}>Appraisal</HashLink>
            <HashLink to="/#premiere" onClick={() => closeOut()}>Premiere</HashLink>
            {/* <a href="/media" onClick={() => closeOut()}>Media</a> */}
            <HashLink to={'/#contact'} onClick={() => closeOut()}>Contact</HashLink>
            <a href="https://www.linkedin.com/in/jillian-white-sra-93a23b6/" onClick={() => closeOut()}>Linkedin</a>

      </div>
      {/* <Logo></Logo> */}
      <div className="navflexspace"></div>
      <div className='underline'>
        <ul>
        <li><a href="/#home">Home</a></li>
          <li><HashLink to="/about">About</HashLink></li>
          <li><HashLink to="/speaking#speaking">Speaking</HashLink></li>
          <li><HashLink to="/#appraisal">Appraisal</HashLink></li>
          <li><HashLink to="/#premiere">Premiere</HashLink></li>
          <li><HashLink to="/media">Media</HashLink></li>
          <li><HashLink to="/#contact">Contact</HashLink></li>
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