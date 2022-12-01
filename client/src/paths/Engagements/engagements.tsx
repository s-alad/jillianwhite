import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gobutton from '../../components/gobutton/gobutton';
import Schedule from '../../components/schedule/schedule';
import Header from '../../components/header/header';
import './engagements.css';
import RB from '../../assets/static/video/racialbiases.mp4';

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
				<h1>Past Speeches</h1>
				{/* <div className="twoway">
					<div className="nav">
						<div className="nav-item"><a href="#photos">Speeches</a></div>
						<div className="nav-item"><a href="#news">Upcoming</a></div>
						<div className="nav-item"><a href="#podcasts">Past</a></div>
		
					</div>
					<div className="way">
						<div className="videos" id="videos">
							<h1>Speeches</h1>

							<div className="video">
								<div className="description">
									Racial And Ethnic Biases in the Appraisal Process
								</div>
								<iframe width="500" height="300" className='vid'
									src="https://www.youtube.com/embed/9ZGaVARzt_U">
								</iframe>
							</div>
							<div>
								
							</div>
						</div>
					</div>
				</div> */}

				<div className='split'>
					<div className='left'>
						<div className='speech'>
							<div className="description">
								Racial And Ethnic Biases in the Appraisal Process
							</div>
							<video controls className="">
								<source src={(RB as string) + "#t=6"} height="300" width="300" type="video/mp4"></source>
							</video>
						</div>
						<div className='speech'>
							<div className="description">
								2021 Hero Conference
							</div>
							<video controls className="">
								<source src={(RB as string) + "#t=6"} height="300" width="300" type="video/mp4"></source>
							</video>
						</div>

						{/* <div className='reach'>
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
						</div> */}

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
					{/* <div className='right-two'>
					</div> */}
				</div>
			</div>

		</div>
	);
}

export default Engagements;