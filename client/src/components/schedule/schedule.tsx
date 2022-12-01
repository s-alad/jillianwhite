import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../api/api';
import Gobutton from '../../components/gobutton/gobutton';
import './schedule.css';
import Carousel from 'react-multi-carousel';

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
    
      const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    function log(item: any) {
        console.log(item);
        return 'item';
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
                                    <div className='event up' key={item['fields']['title']}>
                                        <a href={item['fields']['link']} target='blank' className='title'>
                                            {(item['fields']['title'] as string).trimEnd()}
                                        </a>
                                        <div className='flexspace'></div>
                                        {/* <div className='image'>
                                            <img src={item['fields']['image']} />
                                        </div> */}
                                        <div className='date'>
                                        {formatDate(item['fields']['date'] as string)}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        {pastSpeakingItems.length != 0 ? <h1>Past Appearances</h1> : ''}
                        <div className='events'>
                            <Carousel responsive={responsive} className='' itemClass="nowidth" >
                            {
                                pastSpeakingItems.map((item: any) => (
                                    <div className='event' key={item['fields']['title']}>
                                        <a href={item['fields']['link']} target='blank' className='title'>
                                            {(item['fields']['title'] as string).trimEnd()}
                                        </a>
                                        <div className='flexspace'></div>
                                        
                                        {/* <div className='image'>
                                            <img src={(item['fields']['images'] as Array<any>)[0]} />
                                            
                                        </div> */}
                                        {/* <div>
                                            {log(item)}
                                        </div> */}
                                        <div className='date'>
                                        {formatDate(item['fields']['date'] as string)}
                                        </div>
                                        
                                    </div>
                                ))
                            }
                            </Carousel>
                            
                        </div>

                    </Fragment>
            }
        </div>
    );
}


export default Schedule;