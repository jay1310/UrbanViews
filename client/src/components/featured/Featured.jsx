import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Featured({ type, setGenre }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type]);

    return (
        <div className="featured">
            {type && (
                <div className="categories">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="action">Action</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )}
            {/* FEATURED:  BACKGROUND MOVIE POSTER */}
            {/* <img src="https://www.rd.com/wp-content/uploads/2019/09/shutterstock_editorial_5884766b-e1569251332374.jpg"
                alt=" "
            /> */}
            <img src={content.img}
                alt=" "
            />

            <div className="info">

                {/* FEATURED: DESCRIPTION OF MOVIE FEATURED IN BACKGROUND */}
                {/* <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e96ba423951497118ed2371e3d8615e3d210236048d0022e0d7d22431e363e60._UY500_UX667_RI_V_TTW_.jpg" alt="" /> */}



                {/* <img src={content.imgTitle}></img> */}
                <span className="title">
                    {content.title}
                </span>
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}