import React from 'react';
import './about.css';

import SBA from '../../assets/static/SBA.jpg';
import West from '../../assets/static/westchester-county.png';
import Work from '../work/work';

function About() {
    return (
        <div className='info' id='main'>
            <div className='about'>

                <div className='left'>
                    <h1>About</h1>
                    <p>Over the last two decades, Jillian White has led a successful career as an executive and entrepreneur in the real estate appraisal industry. As an SRA designated appraiser, Jillian currently serves on The Appraisal Institute's Government Relations Committee, as Trustee of The Appraisal Foundation's Board of Trustees (effective January, 2023) and is a former member of the New York State Appraisal Board.</p>
                    <p>She began her career as founder and CEO of White Picket Fence Appraisals, a residential real estate appraisal company based in New York. Motivated by her experience as one of the industry's few black female appraisers, and having to 'whitewash' her own family’s home in order to get a fair appraisal value, Jillian has made it her personal mission to educate and empower all homeowners.</p>
                    <p>Jillian received a B.A. in Neuroscience and Behavior from Columbia University.</p>
                </div>
                <div className='right'>

                    <div className='block'>
                    </div>
                </div>
            </div>

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

        </div>
    );
}


export default About;