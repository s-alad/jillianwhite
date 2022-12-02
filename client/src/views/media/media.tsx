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