import React from "react";
import Gallery from "../../components/gallery/gallery";
import News from "../../views/media/media";
import './Media.css';
import V from '../../assets/static/video/lianacoya.mp4';
import AP from '../../assets/static/aprb.png';
/* import HA from '../../assets/static/video/HeroAward.mp4'; */

function Media() {

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
                                <img src="https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTW9mV0FNPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--557a6950e0ee3aca008f574ef07c177136282ac4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/HousingWire%20Daily%20Podcast_Cover-01%20(1).jpg" />
                            </div>
                            <div className="vertical-line"></div>
                            <div className="pod-body">
                                <div className="title">Jillian White on tackling appraisal bias </div>
                                <div className="description">6th December 2022 </div>
                                <div className="flexspace"></div>
                                <a href="https://www.housingwire.com/podcast/jillian-white-on-tackling-appraisal-bias/?_hsmi=236850504&_hsenc=p2ANqtz-9b18fXdrC9ioz4OnqMiWB5Nr4DKXkw4ug6RqVfJfA-obwsBWhge-BE5vlYaKwz9qBgMJAHPj0zi-YPosi7ccz-so1mPg" target={'_blank'}>
                                    <div className="outlet red">Housing Wire</div>
                                </a>
                            </div>
                        </div>
                        <div className="pod">
                            <div className="head">
                                <img src="https://pbs.twimg.com/profile_images/1267455114593345537/KcO8NfNN_400x400.jpg" />
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
                                <img src="https://artwork.captivate.fm/2b679af9-711f-4aef-aa2f-fecf7074c1d8/5K5y6fkwfvnb_FJ9D9vCvxct.jpg" />
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
                                <img src={AP} />
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
                        {/* <a href="">
                            <div className="video">
                                <div className="description">
                                    ABC
                                </div>
                                <video preload="none" crossOrigin="anonymous" lang="en">
                                    <source src="blob:https://abc7news.com/b42668ba-537f-422f-9a6f-f9ef18d1b2ed" height="300" width="200" type="video/mp4"></source>
                                </video>
                            </div>
                        </a> */}
                        <a href="">
                            <div className="video">
                                <div className="description">
                                    Getting a Fair Appraisal
                                </div>
                                <video controls className="vid">
                                    <source src={V} height="300" width="200" type="video/mp4"></source>
                                </video>
                            </div>
                        </a>
                        <a href="https://nationalmortgageprofessional.com/video/interest/fears-run-rampant-creating-opportunity-bold" target={'_blank'}>
                            <div className="video">
                                <div className="description">
                                    Fears Run Rampant, Creating Opportunity For The Bold
                                </div>
                                <video controls className="vid">
                                    <source src={"https://embed-ssl.wistia.com/deliveries/a248766c87e69991cba26fab7048f266.mp4#t=42"} height="300" width="200" type="video/mp4"></source>
                                </video>
                            </div>
                        </a>
                        <a href="">
                            <div className="video">
                                <div className="description">
                                    Housing Finance Stratagey 2021 Conference 
                                </div>
                                <video controls className="vid">
                                    <source src={"https://jillianwhite.nyc3.cdn.digitaloceanspaces.com/HeroAward.mp4"} height="300" width="200" type="video/mp4"></source>
                                </video>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;