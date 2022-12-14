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



  return (
    <div className={'navigation' + filled}>
      {/* <Logo></Logo> */}
      <div className="flexspace"></div>
      <div className='underline'>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#premiere">Premiere</a></li>
          <li><a href="/speaking">Speaking</a></li>
          {/* <li><a href="/appraisal">Appraisals</a></li> */}
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