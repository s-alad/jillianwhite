import React from 'react';
import './about.css';

import SBA from '../../assets/static/SBA.jpg';
import West from '../../assets/static/westchester-county.png';
import Work from '../media/media';
import Awards from '../../components/awards/awards';
import Media from '../media/media';

function About() {
    return (
        <div className='info' id='about'>
            <div className='about'>

                <div className='left'>
                    <h1>About</h1>
                    <p>Over the last two decades, Jillian White has led a successful career as an executive and entrepreneur in the real estate appraisal industry. As an SRA designated appraiser, Jillian currently serves on The Appraisal Institute's Government Relations Committee, as Trustee of The Appraisal Foundation's Board of Trustees and is a former member of the New York State Appraisal Board.</p>
                    <p>She began her career as founder and CEO of White Picket Fence Appraisals, a residential real estate appraisal company based in New York. Motivated by her experience as one of the industry's few black female appraisers, and having to 'whitewash' her own family’s home in order to facilitate the sale of her parents, Jillian has made it her personal mission to educate and empower all homeowners.</p>
                    <p>Jillian received a B.A. in Neuroscience and Behavior from Columbia University.</p>
                </div>
                <div className='right'>

                    {/* <div className='block'>
                    </div> */}
                </div>
            </div>
            <Media></Media>

            <Awards></Awards>

        </div>
    );
}


export default About;