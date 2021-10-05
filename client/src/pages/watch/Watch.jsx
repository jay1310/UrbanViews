//Watch trailer in this page
//Youtube trailers embedded

import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div class="watch">
            <Link to="/">
                <div class="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            {/* Youtube video embedding */}
            <video className="video" autoPlay progress controls src={movie.video}></video>
            {/* <iframe className="video" src='https://www.youtube.com/embed/TiKz_Rfz05Q'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            /> */}
        </div>
    )
}