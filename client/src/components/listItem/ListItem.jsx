import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import axios from "axios";
import { useState, useEffect } from "react"
import "./listItem.scss";
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {

    const [isHovered, setIsHovered] = useState(false);
    // https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761
    //  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [item]);


    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
            <div
                className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* movie image */}
                <img
                    //src="https://searchengineland.com/figz/wp-content/seloads/2015/08/movie-film-video-production-ss-1920-800x450.jpg"
                    src={movie.imgSm}
                    alt=""
                />
                {isHovered && (

                    <>
                        {/* Video Trailer */}
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.title}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}

                            </div>
                            <div className="gnere">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}