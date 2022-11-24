import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../api/api';
import Gobutton from '../../components/gobutton/gobutton';
import './speaking.css';

const promise = getEvents();

function Speaking() {

    const [upcomingSpeakingItems, setUpcomingSpeakingItems] = React.useState([]);
    const [pastSpeakingItems, setPastSpeakingitems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        promise.then((blogPosts: any) => {

            let past: any = [];
            let upcoming: any = [];

            blogPosts.forEach((post: any) => {
                let d = post['fields']["date"];
                if (Date.parse(d) < Date.now()) { past.push(post); }
                else { upcoming.push(post); }
            });

            setPastSpeakingitems(past)
            setUpcomingSpeakingItems(upcoming)
            setLoading(false)
        })
    }, [])

    const formatDate = (dateString: any) => {
        const options: any = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    return (
        <div className='speaking'>
            <div className='content'>
                <h1>Speaking & Public Appearances</h1>
                <p>
                    Jillian is a highly sought after speaker on topics including every facet of the appraisal industry, equality in homeownership and personal and professional development.

                    {/* Through speaking about her two decades as an executive in the appraisal industry, or her personal experience whitewashing her family’s home in order to get a fair appraisal, Jillian believes she can make an impact by helping shine a light on inequality in homeownership.  */}{/* Whether it’s calling out specific examples of injustice, or discussing appraisal best practices, proposed reforms and solutions to bias plaguing the country’s homeownership industry, Jillian believes in having difficult conversations to empower people to build their best life, through real estate and otherwise. */}
                </p>
                <Link to='/speaking'><Gobutton text='inquire about speaking' wide={true}></Gobutton></Link>

                <div className='schedule'>
                    {
                        loading ? <div>Loading...</div> :
                            <Fragment>

                                    {upcomingSpeakingItems.length != 0 ? <h2>Upcoming Appearances</h2> : ''}
                                    <div className='events'>
                                        {
                                            upcomingSpeakingItems.map((item: any) => (
                                                <div className='event' key={item['fields']['title']}>
                                                    <a href={item['fields']['link']} target='blank'>
                                                        {(item['fields']['title'] as string).trimEnd()}
                                                    </a>
                                                    ,&nbsp;
                                                    {formatDate(item['fields']['date'] as string)}
                                                </div>
                                            ))
                                        }
                                    </div>


                                    {pastSpeakingItems.length != 0 ? <h2>Past Appearances</h2> : ''}
                                    <div className='events'>
                                        {
                                            pastSpeakingItems.map((item: any) => (
                                                <div className='event' key={item['fields']['title']}>
                                                    <a href={item['fields']['link']} target='blank'>
                                                        {(item['fields']['title'] as string).trimEnd()}
                                                    </a>
                                                    ,&nbsp;
                                                    {formatDate(item['fields']['date'] as string)}
                                                </div>
                                            ))
                                        }
                                    </div>
                                
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default Speaking;