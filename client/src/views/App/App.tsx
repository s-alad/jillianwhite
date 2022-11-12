import React, { useEffect } from 'react';
import './App.css';
import '../../shared/common.css'

function App() {

  //add component mount
  useEffect(() => {
    //get element with classname background
    const background = document.getElementsByClassName('background')[0];
    //add class called dark to element
    setTimeout(() => {
      background.classList.add('dim');
    }, 200);
  }, []);

  return (
    <div className="App">
      <div className='bg'>
        <div className='background-darkened'></div>
        <div className='background'></div>
        <div className='name'>
          Jillian <br />
          White
        </div>
      </div>

      <div className='navigation'>
        <div className='flexspace'></div>
        <div className='media item'>media</div>
        <div className='blog item'>blog</div>
        <div className='contact item'>contact</div>
      </div>

      <div className='content'>
        <div className='click'></div>
      </div>
    </div>
  );
}

export default App;
