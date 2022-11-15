import React from 'react';
import './main.css';

import SBA from '../../assets/static/SBA.jpg';
import West from '../../assets/static/westchester-county.png';
import Work from '../work/work';
import About from '../about/about';
import Tweets from '../tweets/tweets';

function Main() {

    return (
        <div className='content' id='main'>
            <About></About>

            <Work></Work>
            <Tweets></Tweets>
        </div>
    )
}

export default Main;