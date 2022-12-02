import React from 'react';

import './awards.css';

import SBA from '../../assets/static/SBA.jpg';
import West from '../../assets/static/westchester-county.png';
/* import HFS from 'https://housingfinancestrategies.com/wp-content/uploads/2020/11/logo2.png'; */

function Awards() {
    return (
        <div className='awards'>
            <h1>Awards</h1>
            <div className='award'>
                <div className='award-logo'>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHoAKzV2L3KlQ/company-logo_200_200/0/1609339398298?e=2147483647&v=beta&t=N2Qw_ZItnZI8uX2RL2Q8O8bXxPBh2By0odvU2Wot6Yg" alt='HFS' />
                </div>
                <div className='award-text'>
                    <p>
                        Jillian was named part of the Women In Leadership by Housing Finance Strategies
                    </p>
                </div>
            </div>
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