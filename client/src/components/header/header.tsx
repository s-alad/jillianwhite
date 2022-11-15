import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './header.css';

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
      <div className="flexspace"></div>
      <div className='underline'>
        <ul>
          <li><a href="#">leadership</a></li>
          <li><a href="#">press</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <SocialIcon url='https://www.linkedin.com/in/jillian-white-sra-93a23b6/' bgColor='transparent' fgColor='white' className='ico'></SocialIcon>
      {/* <div className="media item">leadership</div>
      <div className="media item">press</div>
      <div className="blog item">blog</div>
      <div className="contact item">contact</div> */}
    </div>
  );
}

export default Header;