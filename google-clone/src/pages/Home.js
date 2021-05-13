import React from 'react'
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from "./Search";

function Home() {
    const myFunction = () => {
        var y = document.getElementById("home1").className;
        if (y.length === 4) {
            document.getElementById("home1").classList.add("dark-mode");
        }
        else {
            document.getElementById("home1").classList.remove("dark-mode");
        }
    }

    return (
        <div className="home" id="home1">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/store">
                        Store
                    </Link>
                    <button onClick={myFunction}>Toggle dark mode</button>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">
                        Gmail
                    </Link>
                    <Link to="/images">
                        Images
                    </Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo Here" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
