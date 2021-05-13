import React from 'react'
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    console.log(term);
    return (
        <>
            <div className="searchPage">
                <div className="searchPage__header">
                    <Link to="/">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                    </Link>
                </div>
                <div className="searchPage__Headerbody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link >
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link >
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link >
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/shopping">Shopping</Link >
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/maps">Maps</Link >
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link >
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/setings">
                                    Settings
                        </Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">
                                    Tools
                        </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="searchPage__Body">
                {
                    term && (<div className="searchPage__results">
                 
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) seconds for {term}
                    </p>
                        {data?.items.map( (item) => (
                            <div className="searchPage__result">
                                <a href={item.link}>
                                     {
                                        item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img className="searchPage__resultImage" src={
                                                item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                            }
                                            alt="" />
                                        )} 
                                    
                                    
                                    
                                    {item.displayLink}</a>
                                <a className="searchPage__resultTitle" href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage__resultSnippet">
                                
                                        {item.snippet}
                                    
                                </p>
                            </div>
                        ))}
                </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchPage
