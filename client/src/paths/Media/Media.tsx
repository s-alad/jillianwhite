import React from "react";
import Gallery from "../../components/gallery/gallery";
import News from "../../views/media/media";
import './Media.css';
import V from '../../assets/static/video/lianacoya.mp4';
import AP from '../../assets/static/aprb.png';

function Media() {

    

    let podcasts = [
        "https://appraisalbuzz.com/racial-and-ethnic-bias-in-the-appraisal-process/",
        "https://nationalmortgageprofessional.com/podcasts/principal/path-appraisals"
    ]

  return (
    <div className="Media">
      <h1>Media</h1>
      <div className="twoway">
        <div className="nav">
            {/* div className="nav-item"><a href="#photos">Photos</a></div> */}
            <div className="nav-item"><a href="#news">In The News</a></div>
            <div className="nav-item"><a href="#podcasts">Podcasts</a></div>
            <div className="nav-item"><a href="#videos">Videos</a></div>
        </div>
        <div className="way">
            {/* <div className="photos" id="photos">
                <h1>Photos</h1>
                <Gallery></Gallery>
            </div> */}
            <div className="news" id="news">
                <News></News>
            </div>
            <div className="podcasts" id='podcasts'>
                <h1>Podcasts</h1>
                <div className="pod">
                    <div className="head">
                        <img src="https://pbs.twimg.com/profile_images/1267455114593345537/KcO8NfNN_400x400.jpg"/>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="pod-body">
                        <div className="title">Fears Run Rampant, Creating Opportunity For The Bold </div>
                        <div className="description">12th October 2022 </div>
                        <div className="flexspace"></div>
                        <a href="https://nationalmortgageprofessional.com/video/interest/fears-run-rampant-creating-opportunity-bold" target={'_blank'}>
                            <div className="outlet blue">National Mortgage Professional</div>
                        </a>
                    </div>
                </div>
                <div className="pod">
                    <div className="head">
                        <img src="https://artwork.captivate.fm/2b679af9-711f-4aef-aa2f-fecf7074c1d8/5K5y6fkwfvnb_FJ9D9vCvxct.jpg"/>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="pod-body">
                        <div className="title">A Path To Appraisals</div>
                        <div className="description">7th October 2022 </div>
                        <div className="flexspace"></div>
                        <a href='https://nationalmortgageprofessional.com/podcasts/principal/path-appraisals' target={"_blank"}><div className="outlet blue">National Mortgage Professional</div></a>
                    </div>
                </div>
                <div className="pod">
                    <div className="head">
                        <img src={AP}/>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="pod-body">
                        <div className="title">Racial and Ethnic Bias in the Appraisal Process</div>
                        <div className="description">3rd February 2021 </div>
                        <div className="flexspace"></div>
                        <a href="https://appraisalbuzz.com/racial-and-ethnic-bias-in-the-appraisal-process/" target={'_blank'}>
                            <div className="outlet">Appraisal Buzz</div>
                        </a>
                    </div>
                </div>

            </div>
            <div className="videos" id="videos">
                <h1>Videos</h1>

                <div className="video">
                    <div className="description">
                        Getting a Fair Appraisal 
                    </div>
                    <video controls className="vid">
                        <source src={V} height="300" width="200" type="video/mp4"></source>
                    </video>
                </div>
                <div className="video">
                    <div className="description">
                        Getting a Fair Appraisal 
                    </div>
                    <video controls className="vid">
								<source src={"https://embed-ssl.wistia.com/deliveries/a248766c87e69991cba26fab7048f266.mp4#t=1"} height="300" width="200" type="video/mp4"></source>
							</video>
                </div>
                
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Media;