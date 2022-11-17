import React, { useEffect } from 'react';
import './work.css';
import '../../shared/common.css';
import { getMedia } from '../../api/api';


const promise = getMedia();

const works = [
    {
        title: '5 things we learned from the FHFA listening session on fintech ',
        description: 'If the issues raised at a public listening session Thursday are any indication, the Federal Housing Finance Agency\'s new Office of Financial Technology has its work cut out for it.',
        image: 'https://media-exp1.licdn.com/dms/image/sync/C5627AQEfzfi6KtSPkg/articleshare-shrink_800/0/1668374728272?e=1669104000&v=beta&t=a_eZi4kHOfSil4Ka0ay8MyvIdTIysm_OWXwF8vnmb18',
        date: 'October 2022'
    },
    {
        title: 'Appraisal Business Fears Modernizing And Newcomers',
        description: 'Appraisers also need to mitigate appraisal bias',
        link: 'https://nationalmortgageprofessional.com/news/appraisal-business-fears-modernizing-and-newcomers',
        image: 'https://nationalmortgageprofessional.com/sites/default/files/styles/article_full/public/2022-10/AppraisalFears_WEB.jpg?itok=1Pme-80i',
        date: 'October 2021'
    },
]

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