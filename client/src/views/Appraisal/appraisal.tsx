import React from 'react';
import Gobutton from '../../components/gobutton/gobutton';
import './appraisal.css';
import V from '../../assets/static/video/lianacoya.mp4';
import A from '../../assets/static/video/abc.mp4';

function Appraisal() {

    return (
        <div>
            <div className="appraisal">
                <h1>Have an issue with your appraisal?</h1>
                <div className='leftright'>
                    <div className='left'>
                        <h2>let Jillian help you get a fair value for your home.</h2>
                        <p>
                            Motivated by her professional experience as an appraiser and personal experience whitewashing her family’s home in order to get a fair value, Jillian has made it her personal mission to educate and empower all homeowners by seeking fairness in appraisals.
                            <br />
                            <br />
                            Reach out to Jillian to learn more about how she can help you get a fair value for your home.
                        </p>

                        <Gobutton text={'Contact About Appraisals'} wide={true}></Gobutton>
                    </div>
                    <div className='right'>
                        <video controls>
                            <source src={V} height="300" width="300" type="video/mp4"></source>
                        </video>
                    </div>

                </div>
                <div className='vertical-spacer'></div>
                <div className='vertical-spacer'></div>
            </div>
            <div className='prem' id="premiere">
                <h1>Our America: Lowballed</h1>
                <div className='leftright white'>
                    <div className='left'>
                        <div className='poster'>

                        </div>
                    </div>
                    <div className='right'>
                        <video controls>
                            <source src={(A as string)+"#t=6"} height="300" width="300" type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <div className='sub'>
                    <div className='left'>
                        <h2>Premieres on December 2nd</h2>
                        <p>
                            "Our America: Lowballed" follows Black and Latino families as they fight for fair home values after lower than expected appraisals. ABC's 18-month long investigation explores appraisal discrimination and solutions to a problem potentially costing families billions in equity.
                        </p>

                        <Gobutton text={'Watch'} wide={false}></Gobutton>
                    </div>
                    <div className='right'>
                        {/* <video controls>
                            <source src={V} height="300" width="300" type="video/mp4"></source>
                        </video> */}
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Appraisal;

