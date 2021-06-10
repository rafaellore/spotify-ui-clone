import React from 'react'
import './BottomMobile.css'
import { IconContext } from "react-icons";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosAlbums } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";

export default function BottomMobile() {
    return (
        <div className="bottom-mobile">
            <IconContext.Provider value={{ color: "#fff", className: "home-bottom", size: "25px" }}>
                <div className="mobile-active">
                    <AiFillHome/><p className="">Home</p>
                </div>
             </IconContext.Provider>
             <IconContext.Provider value={{ color: "#a8a8a8", className: "search-bottom", size: "25px" }}>
                <div className="mobile-icons">
                    <AiOutlineSearch/><p>Buscar</p>
                </div>
             </IconContext.Provider>
             <IconContext.Provider value={{ color: "#a8a8a8", className: "playlist-bottom", size: "25px" }}>
                <div className="mobile-icons">
                    <IoIosAlbums/><p className="">Playlists</p>
                </div>
             </IconContext.Provider>
             <IconContext.Provider value={{ color: "#a8a8a8", className: "spotify-bottom", size: "25px" }}>
                <div className="mobile-icons">
                    <FaSpotify/><p>Premium</p>
                </div>
             </IconContext.Provider>
        </div>
    )
}
