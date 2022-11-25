import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gobutton from '../../components/gobutton/gobutton';
import Schedule from '../../components/schedule/schedule';
import Header from '../../components/header/header';
import './engagements.css';

function Engagements() {
    useEffect(() => {
        //get element with classname background
        const background = document.getElementsByClassName('background')[0];
        //add class called dark to element
        setTimeout(() => {
          background.classList.add('dim');
        }, 200);
      }, []);
      
    return (
        <div className='back'>
                <div className='background-darkened'></div>
                <div className='background'></div>
                <div className='content'>
                    <h1>Speaking & Engagements</h1>
                    <Schedule></Schedule>
                </div>
                
        </div>
    );
}

export default Engagements;