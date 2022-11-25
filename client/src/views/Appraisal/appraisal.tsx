import React from 'react';
import Gobutton from '../../components/gobutton/gobutton';
import './appraisal.css';
import V from '../../assets/static/video/lianacoya.mp4';

function Appraisal() {

    return (
        <div className="appraisal">
            <h1>Have an issue with your appraisal?</h1>
            <div className='leftright'>
                <div className='left'>
                <h2>let Jillian help you get a fair value for your home.</h2>
                    <p>
                        Motivated by her professional experience as an appraiser and personal experience whitewashing her family’s home in order to get a fair value, Jillian has made it her personal mission to educate and empower all homeowners by seeking fairness in appraisals.
                    </p>

                    <Gobutton text={'Contact'} ></Gobutton>
                </div>
                <div className='right'>
                    <video controls>
                        <source src={V} height="300" width="300" type="video/mp4"></source>
                    </video>
                </div>

            </div>


        </div>
    );
}

export default Appraisal;

