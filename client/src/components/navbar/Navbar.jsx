import "./navbar.scss"
import React, { useState, useContext } from 'react'

import Logo from '../../logo3.png'; //Logo of Urban Views
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
    const { dispatch } = useContext(AuthContext);

    //Adding gradient to navbar when page is on the top
    // Remove gradient from navbar on scrolling down the page
    const [isScrolled, setIsScrolled] = useState(false);

    // window.pageYoffset : can be used to check whether we have
    //                      scrolled the page or not

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                {/* Left Side of NAVBAR */}
                <div className="left">
                    {/* Displaying Logo on left side of Navbar */}
                    <img src={Logo}
                        alt="">
                    </img>
                    <span>Homepage</span>
                    <Link to="/series" className="link">
                        <span className="navbarmainLinks">Series</span>
                    </Link>

                    <Link to="/movies" className="link">
                        <span className="navbarmainLinks">Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                {/* RIGHT SIDE OF NAVBAR */}
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    {/* profile pic display on right side of navbar */}
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                        alt="">

                    </img>
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default Navbar