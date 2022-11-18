import React from 'react';
import './main.css';

import SBA from '../../assets/static/SBA.jpg';
import West from '../../assets/static/westchester-county.png';
import Media from '../media/media';
import About from '../about/about';
import Tweets from '../tweets/tweets';
import Speaking from '../speaking/speaking';
import Consulting from '../consulting/consulting';
import Linkedin from '../linkedin/linkedin';

function Main() {

    return (
        <div className='content' id='main'>
            <About></About>
            <Speaking></Speaking>
            <Media></Media>
            <Consulting></Consulting>
            <Linkedin></Linkedin>
            {/* <Tweets></Tweets> */}
        </div>
    )
}

export default Main;