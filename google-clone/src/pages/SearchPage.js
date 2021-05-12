import React from 'react'
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import Response from "../response";
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';


function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    // const { data } = useGoogleSearch(term);

    const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
            </div>
            <div className="searchPage__Headerbody">
                <Search hideButtons/>
                <div className="searchPage__options">
                    <div className="searchPage__optionsLeft">
                        <SearchIcon />
                        <Link to="/all">All</Link >
                    </div>
                </div>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
