import React from "react";
import Gallery from "../../components/gallery/gallery";
import News from "../../views/media/media";
import './Media.css';
import V from '../../assets/static/video/lianacoya.mp4';

function Media() {
  return (
    <div className="Media">
      <h1>Media</h1>
      <div className="twoway">
        <div className="nav">
            <div className="nav-item"><a href="#photos">Photos</a></div>
            <div className="nav-item"><a href="#news">Articles</a></div>
            <div className="nav-item"><a href="#videos">Videos</a></div>
        </div>
        <div className="way">
            <div className="photos" id="photos">
                <h1>Photos</h1>
                <Gallery></Gallery>
            </div>
            <div className="news" id="news">
                <News></News>
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