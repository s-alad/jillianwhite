import React from "react";
import Gallery from "../../components/gallery/gallery";
import News from "../../views/media/media";
import './Media.css';
import V from '../../assets/static/video/lianacoya.mp4';

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
                        <img src="https://artwork.captivate.fm/2b679af9-711f-4aef-aa2f-fecf7074c1d8/5K5y6fkwfvnb_FJ9D9vCvxct.jpg"/>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="pod-body">
                        <div className="title">A Path To Appraisals</div>
                        <div className="description">7th October 2022 </div>
                        <div className="flexspace"></div>
                        <div className="outlet blue">National Mortgage News</div>
                    </div>
                </div>
                <div className="pod">
                    <div className="head">
                        <img src="https://appraisalbuzz.com/wp-content/uploads/2021/01/appraisal-buzz-logo.png"/>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="pod-body">
                        <div className="title">A Path To Appraisals</div>
                        <div className="description">7th October 2022 </div>
                        <div className="flexspace"></div>
                        <div className="outlet">Appraisal Buzz</div>
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
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Media;