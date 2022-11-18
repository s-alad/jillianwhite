import React from 'react';
import Gobutton from '../../components/gobutton/gobutton';
import './speaking.css';

function Speaking() {
    return (
        <div className='speaking'>
            <div className='content'>
                <h1>Speaking & Public Appearances</h1>
                <p>
                    Jillian is a frequent speaker on topics related to Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam et excepturi nulla dignissimos, quia amet odit. Eligendi explicabo ut quia, commodi, quam perferendis eos officiis necessitatibus minima, iusto repellendus.
                </p>
                <Gobutton text='inquire about speaking' wide={true}></Gobutton>
                <div className='schedule'>
                    <h2>Upcoming Appearances</h2>
                    <div className='upcoming'>
                        <div className='coming'>
                        </div>
                    </div>
                    <h2>Past Appearances</h2>
                </div>
            </div>
        </div>
    )
}

export default Speaking;