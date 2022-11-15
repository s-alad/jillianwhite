import React, { useEffect } from 'react';
import './App.css';
import '../../shared/common.css'
import 'animate.css';

import Header from '../../components/header/header';
import Gobutton from '../../components/gobutton/gobutton';
import Main from '../main/main';
import Work from '../work/work';

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
      <Header></Header>

      <div className='intro'>
        <div className='bg'>
          <div className='background-darkened'></div>
          <div className='background'></div>
          <div className='brief-right animate__slideInLeft animate__animated'>
            <div className='name'>
              <div>Jillian</div>
              <div>White</div>
            </div>
            <div className='punchline'>
              Educating and Empowering Homeowners. <br />
              <div className='go'>
                <a href="#main">
                  <Gobutton></Gobutton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Main ></Main>
    </div>
  );
}

export default App;
