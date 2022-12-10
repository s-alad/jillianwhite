import React, { useEffect } from "react";
import Gallery from "../../components/gallery/gallery";
import News from "../../views/media/media";
import './Media.css';
/* import V from '../../assets/static/video/lianacoya.mp4'; */
/* import V from 'https://jillianwhite.nyc3.digitaloceanspaces.com/lianacoya.mp4'; */
import AP from '../../assets/static/aprb.png';
import { getMedia, getPodcasts, getVideos } from "../../api/api";
/* import HA from '../../assets/static/video/HeroAward.mp4'; */

const podPromise = getPodcasts();
const vidPromise = getVideos();

function Media() {

    const [items, setItems] = React.useState([]);
    const [videos, setVideos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [vidLoading, setVidLoading] = React.useState(true);

    useEffect(() => {
        podPromise.then((podcasts: any) => {

            let sorted = podcasts.sort((a: any, b: any) => {
                return Date.parse(b['fields']['date']) - Date.parse(a['fields']['date']);
            });

            setItems(sorted)
            setLoading(false)
        })

        vidPromise.then((vids: any) => {
            let sorted = vids.sort((a: any, b: any) => {
                return Date.parse(b['fields']['date']) - Date.parse(a['fields']['date']);
            });

            setVideos(sorted)
            setVidLoading(false)
        })
    }, [])

    function getUrl(item: any) {
        if (item['fields']['cdnvideo'] != undefined) {
            return item['fields']['cdnvideo']
        } else {
            return item['fields']['video']['fields']['file']['url']
        }
    }

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
                        {loading ? 
                            <div className="loading">Loading...</div> 
                            : 
                            items.map((item: any) => (
                                <div className="pod" key={item['fields']['title']}>
                                    <div className="head">
                                        <img src={item['fields']['image']['fields']['file']['url']}></img>
                                    </div>
                                    <div className="vertical-line"></div>
                                    <div className="pod-body">
                                        <div className="title">{item['fields']['title']}</div>
                                        <div className="description">{item['fields']['date']}</div>
                                        <div className="flexspace"></div>
                                        <a href={item['fields']['link']} target={'_blank'}>
                                            <div className={"outlet "+item['fields']['color']}>{item['fields']['outlet']}</div>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="videos" id="videos">
                        <h1>Videos</h1>
                        {vidLoading ? 
                            <div>Loading...</div> 
                            : 
                            videos.map((item: any) => (
                            <div className="video" key={item['fields']['title']}>
                                <div className="description">
                                    {item['fields']['title']}
                                </div>
                                <video controls className="vid">
                                    <source 
                                        src={getUrl(item)} 
                                        height="300" width="200" type="video/mp4">
                                    </source>
                                </video>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;