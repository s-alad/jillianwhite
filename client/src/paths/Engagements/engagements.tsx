import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gobutton from '../../components/gobutton/gobutton';
import Schedule from '../../components/schedule/schedule';
import Header from '../../components/header/header';
import './engagements.css';
/* import RB from '../../assets/static/video/racialbiases.mp4'; */
/* import RB from 'https://jillianwhite.nyc3.digitaloceanspaces.com/racialbiases.mp4'; */
import Speaking from '../../views/speaking/speaking';
import { getSpeech } from '../../api/api';

const speechPromise = getSpeech();

function Engagements() {


	const [speech, setSpeech] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		//get element with classname background
		const background = document.getElementsByClassName('background')[0];
		//add class called dark to element
		setTimeout(() => {
			background.classList.add('dim');
		}, 200);

		speechPromise.then((speech: any) => {

            let sorted = speech.sort((a: any, b: any) => {
                return Date.parse(b['fields']['date']) - Date.parse(a['fields']['date']);
            });

            setSpeech(sorted)
            setLoading(false)
        })
	}, []);

	return (
		<Fragment>
			<div className='mobile-image-speaking'>
                    
            </div>
			<div className='back'>
				{/* <div className='background-darkened'></div>
						<div className='background'></div> */}
				<Speaking></Speaking>
				<div className='speech-content' id='start'>
					<h1>Videos</h1>
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
							{
								loading ? <div className='loading'>Loading...</div> : speech.map((speech: any) => {
									return (
										<div className='speech'>
											<div className="description">
												{speech['fields']['title']}
											</div>
											<video controls className="video">
												<source src={speech['fields']['cdnvideo']} height="300" width="300" type="video/mp4"></source>
											</video>
										</div>
									)
								})	
							}
							{/* <div className='speech'>
								<div className="description">
									Racial And Ethnic Biases in the Appraisal Process
								</div>
								<video controls className="">
									<source src={('https://jillianwhite.nyc3.digitaloceanspaces.com/racialbiases.mp4' as string) + "#t=6"} height="300" width="300" type="video/mp4"></source>
								</video>
							</div>
							<div className='speech'>
								<div className="description">
									Fears Run Rampant, Creating Opportunity For The Bold
								</div>
								<video controls className="video">
									<source src={"https://embed-ssl.wistia.com/deliveries/a248766c87e69991cba26fab7048f266.mp4#t=1"} height="300" width="300" type="video/mp4"></source>
								</video>
							</div> */}
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
				<div className='sched' id="schedule">
					<Schedule></Schedule>
					<div className='split'>
						<div className='left'>
			
			
						</div>
						{/* <div className='right-two'>
						</div> */}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Engagements;