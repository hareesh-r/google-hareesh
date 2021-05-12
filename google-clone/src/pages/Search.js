import React from 'react'
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function Search() {
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text"/>
                <MicIcon />
            </div>
            <div className="search__buttons">
                <Button className="btnTxt" variant="outlined">Google Search</Button>
                <Button className="btnTxt" variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search
