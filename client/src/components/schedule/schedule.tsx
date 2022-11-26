import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../api/api';
import Gobutton from '../../components/gobutton/gobutton';
import './schedule.css';

const promise = getEvents();


function Schedule() {

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
        <div className='schedule'>
            {
                loading ? <div>Loading...</div> :
                    <Fragment>

                        {upcomingSpeakingItems.length != 0 ? <h1>Upcoming Appearances</h1> : ''}
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


                        {pastSpeakingItems.length != 0 ? <h1>Past Appearances</h1> : ''}
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
    );
}


export default Schedule;