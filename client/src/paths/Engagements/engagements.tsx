import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gobutton from '../../components/gobutton/gobutton';
import Schedule from '../../components/schedule/schedule';
import Header from '../../components/header/header';
import './engagements.css';

function Engagements() {
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
			{/* <div className='background-darkened'></div>
                <div className='background'></div> */}
			<div className='content' id='start'>
				<h1>Speaking & Engagements</h1>
				{/* <Gobutton text='inquire about speaking' wide={true}></Gobutton> */}
				<div className='split'>
					<div className='left'>
					
						<div className='reach'>
							<h2>Let Jillian spruce up your next event. </h2>
							<div className='row'>
								<div className='col'>
									<label>Name</label>
									<input placeholder='Jillian White'></input>
								</div>
								<div className='col'>
									<label>Email</label>
									<input placeholder='Jillian@gmail.com'></input>
								</div>
							</div>
							<label>Event</label>
							<input placeholder='Jillian@gmail.com'></input>
							<label>Comments</label>
							<input placeholder='Jillian@gmail.com'></input>
							<button>Send Message</button>
						</div>

					</div>
					<div className='right'>
					</div>
				</div>
				
			</div>
			<div className='sched'>
				<Schedule></Schedule>
				<div className='split'>
					<div className='left'>
					
						

					</div>
					<div className='right-two'>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Engagements;