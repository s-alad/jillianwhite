import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../api/api';
import Gobutton from '../../components/gobutton/gobutton';
import Schedule from '../../components/schedule/schedule';
import './speaking.css';


function Speaking() {
    
    return (
        <div className='speaking' id='speaking'>
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
                <a href='/speaking'><Gobutton text='inquire about speaking' wide={true}></Gobutton></a>
                <div className='vertical-spacer'></div>


                {/* <Schedule></Schedule> */}
            </div>
        </div>
    )
}

export default Speaking;