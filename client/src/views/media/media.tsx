import React, { useEffect } from 'react';
import './media.css';
import '../../shared/common/common.css';
import { getMedia } from '../../api/api';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const promise = getMedia();

function Work() {


    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        promise.then((blogPosts: any) => {

            let sorted = blogPosts.sort((a: any, b: any) => {
                if (a['fields']['outlet'] == 'NBC News ') {
                    return -999;
                }
                if (b['fields']['outlet'] == 'NBC News ') {
                    return 999;
                }
                if (a['fields']['outlet'] == 'Bloomberg') {
                    return -999;
                }
                if (b['fields']['outlet'] == 'Bloomberg') {
                    return 999;
                }
                return Date.parse(b['fields']['datetime']) - Date.parse(a['fields']['datetime']);
            });

            setItems(sorted)
            setLoading(false)
        })
    }, [])

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

    function preset() {
        return (
            <div className='peice'>
                    <div className='pin'></div>
                        <a href={"https://www.nbcnews.com/news/us-news/black-appraisers-call-out-industry-s-racial-bias-need-systemic-n1269452"} target="_blank">
                            <div className='banner'>
                                <img src={"http://images.ctfassets.net/wm1hz9m6fq76/2iF4a3ZrmgiLS4bdT04CVY/fddbca1f2cccd55fee59e929def3c62a/210607-jillian-white-mn-0905.jpg"} alt='work' />
                            </div>


                            <div className='data'>
                                <div className='title'>
                                    Black appraisers call out industry's racial bias and need for systemic change
                                </div>
                                <div className='flexspace'></div>
                                <div className='description'>
                                    NBC News
                                </div>
                                <div className='date'>2021-06-27</div>
                            </div>
                        </a>
                    </div>
        )
    }
    function presetTwo() {
        <div className='peice'>
        <div className='pin'></div>
        <a href={"https://www.bloomberg.com/news/articles/2021-03-03/appraisers-acknowledge-bias-in-home-valuations"}>
            <div className='banner'>
                <img src={"http://images.ctfassets.net/wm1hz9m6fq76/5l3PWtkHhrH9zOBkGxre51/53123f23f27e1bd8c26139ee59c06b79/-1x-1.jpg"} alt='work' />
            </div>


            <div className='data'>
                <div className='title'>
                What It Will Take to Close the Race Gap in Home Appraisals
                </div>
                <div className='flexspace'></div>
                <div className='description'>
                    Bloomberg
                </div>
                <div className='date'>2021-03-03</div>
            </div>
        </a>
    </div>
    }

    return (
        <div className='work' id='media'>
            <h1>In The News</h1>
            <Carousel responsive={responsive} className='works' itemClass="nowidth" >
                
                    
                
                {
                    loading
                        ? <div>Loading...</div>
                        : items.map((item: any) => (
                            <div className='peice' key={item['fields']['title']}>

                                <a href={item['fields']['link']} target="_blank">
                                    <div className='banner'>
                                        <img src={item['fields']['banner']['fields']['file']['url']} alt='work' />
                                    </div>


                                    <div className='data'>
                                        <div className='title'>
                                            {item['fields']['title']}
                                        </div>
                                        <div className='flexspace'></div>
                                        <div className='description'>
                                            {item['fields']['outlet']}
                                        </div>
                                        <div className='date'>{item['fields']['datetime']}</div>
                                    </div>
                                </a>
                            </div>
                        ))
                }



            </Carousel >
        </div>
    );
}

export default Work;