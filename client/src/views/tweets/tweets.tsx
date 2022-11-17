import React from 'react';
import './tweets.css'

import {getMedia} from '../../api/api';

function Tweets() {
    return (
        <div className='tweets'>
            <h1 onClick={() => getMedia()}>Current Work</h1>
        </div>
    )
}

export default Tweets;