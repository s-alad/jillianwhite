import React, { useEffect } from 'react';
import Gobutton from '../../components/gobutton/gobutton';
import '../../shared/common/common.css'
import './background.css';

function Background() {

    useEffect(() => {
        //get element with classname background
        const background = document.getElementsByClassName('background')[0];
        //add class called dark to element
        setTimeout(() => {
          background.classList.add('dim');
        }, 200);
      }, []);
      
    return (
        <div className='back'>
            <div className='bg'>
                {/* image credits https://www.nbcnews.com/news/us-news/black-appraisers-call-out-industry-s-racial-bias-need-systemic-n1269452 */}
                <div className='credits'><a href='https://www.nbcnews.com/news/us-news/black-appraisers-call-out-industry-s-racial-bias-need-systemic-n1269452' target={'_blank'}>Image Credits: NBC News</a></div>
                <div className='background-darkened'></div>
                <div className='background'></div>
                <div className='brief-right animate__slideInLeft animate__animated'>
                    <div className='name'>
                        <div className='resize-text'>Jillian</div>
                        <div>White</div>
                    </div>
                    <div className='punchline'>
                        Educating and Empowering Homeowners. <br />
                        <div className='go'>
                            <a href="#main" className='resize-button'>
                                <Gobutton text='continue'></Gobutton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;