import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { getEvents } from '../../api/api';
import Gobutton from '../../components/gobutton/gobutton';
import Schedule from '../../components/schedule/schedule';
import './speaking.css';


function Speaking() {
    
    return (
        <div className='speaking' id='start'>

            <div className='content'>
                <h1>Speaking & Public Appearances</h1>
                <p>
                    Jillian is a highly sought after speaker on topics including every facet of the appraisal industry, equality in homeownership and personal and professional development.
                    <br /><br />
                    She has spoken at conferences and events across the country and is a regular contributor to industry publications.
                    <br /><br />
                    Jillian is available for speaking engagements and interviews.

                    {/* Through speaking about her two decades as an executive in the appraisal industry, or her personal experience whitewashing her family’s home in order to get a fair appraisal, Jillian believes she can make an impact by helping shine a light on inequality in homeownership.  */}{/* Whether it’s calling out specific examples of injustice, or discussing appraisal best practices, proposed reforms and solutions to bias plaguing the country’s homeownership industry, Jillian believes in having difficult conversations to empower people to build their best life, through real estate and otherwise. */}
                </p>
                <HashLink to='/#contact' className='mobile-hide'><Gobutton text='inquire about speaking' wide={true}></Gobutton></HashLink>
                <div className='division'></div>
                <h1 className='notable-title'>Notable Appearances</h1>
                <div className='notables'>
                    <div className='event'>
                        <div className='title'>
                            Urban Land Institue 
                        </div>
                        <div className='date'>
                            October, 2022 | Dallas, TX
                        </div>
                        <div className='flexspace'></div>
                        <div className='image'>
                            <img src='https://urbanland.uli.org/wp-content/uploads/sites/5/2022/10/ValuationChangesforPeopleofColor-4998_2.jpg' />
                        </div>
                    </div>
                    <div className='event'>
                        <div className='title'>
                            MISMO Fall Summit
                        </div>
                        <div className='date'>
                            August, 2022 | Washington D.C
                        </div>
                        <div className='flexspace'></div>
                        <div className='image'>
                            <img src='https://media.licdn.com/dms/image/C4E22AQHkLH3E5HFXsg/feedshare-shrink_800/0/1662470673714?e=1672272000&v=beta&t=YC9P9mJ-94L9WzZ2nfp2CMs68Kkabm01aHQB3gIqBRo' />
                        </div>
                    </div>
                    <div className='event'>
                        <div className='title'>
                            The Appraisal Foundation Advisory Council
                        </div>
                        <div className='date'>
                            June, 2022
                        </div>
                        <div className='flexspace'></div>
                        <div className='image'>
                            <img src='https://media.licdn.com/dms/image/C4E22AQHuNX7hTw-QKQ/feedshare-shrink_800/0/1656455042040?e=1672272000&v=beta&t=sXFzdp2KgOJFEqsve_3MH6RUX-z3zADyBzGyaZ2i5ag' />
                        </div>
                    </div>
                    <div className='event'>
                        <div className='title'>
                            MBA Tech 2022
                        </div>
                        <div className='date'>
                            April, 2022 | Las Vegas, NV
                        </div>
                        <div className='flexspace'></div>
                        <div className='image'>
                            <img src='https://media.licdn.com/dms/image/C4D22AQE8ONbnMXbxGA/feedshare-shrink_800/0/1650466005206?e=1675900800&v=beta&t=WqU6JNfsOjuRLEW15M6I-NNfLNp2IOvq7TAG1dj7rCA' />
                        </div>
                    </div>
                    
                    
                </div>
                {/* <a href='#schedule' className='mobile-hide'><Gobutton text='See All Appearances' wide={true}></Gobutton></a> */}
                

                {/* <Schedule></Schedule> */}
            </div>
        </div>
    )
}

export default Speaking;