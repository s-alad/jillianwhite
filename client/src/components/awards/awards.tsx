import React from 'react';

import './awards.css';

import SBA from '../../assets/static/SBA.jpg';
import West from '../../assets/static/westchester-county.png';

function Awards() {
    return (
        <div className='awards'>
            <h1>Awards</h1>
            <div className='award'>
                <div className='award-logo'>
                    <img src={SBA} alt='SBA' />
                </div>
                <div className='award-text'>
                    <p>
                        Jillian was named the Young Entrepreneur of the Year by the Small Business Administration.
                    </p>
                </div>
            </div>
            <div className='award'>
                <div className='award-logo'>
                    <img src={West} alt='SBA' />
                </div>
                <div className='award-text'>
                    <p>
                        Jillian was named one of the ten most influential black leaders changing Westchester County.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Awards;