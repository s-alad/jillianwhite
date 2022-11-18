import React, { useEffect } from 'react';
import './media.css';
import '../../shared/common/common.css';
import { getMedia } from '../../api/api';


const promise = getMedia();

function Work() {


    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        promise.then((blogPosts: any) => {
          setItems(blogPosts)
          setLoading(false)
        })
      }, [])

    return (
        <div className='work'>
            <h1>In The News</h1>
            <div className='works'>
                {   
                    loading
                    ? <div>Loading...</div>
                    : items.map((item: any) => (
                        <div className='peice' key={item['fields']['title']}>
                                <div className='title'>
                                    {item['fields']['title']}
                                </div>
                                
                                <div className='banner'>
                                    <img src={item['fields']['banner']['fields']['file']['url']} alt='work' />
                                </div>
                                {/* <div className='description'>
                                    {work.description}
                                </div> */}
                                <div className='flexspace'></div>
                                <div className='date'>{item['fields']['date']}</div>
                            </div>
                    ))
                }
                
                

            </div>
        </div>
    );
}

export default Work;