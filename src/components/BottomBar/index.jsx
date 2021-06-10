import React from 'react'
import './BottomBar.css'
import { IconContext } from "react-icons";
import { FaHeart, FaRandom, FaDesktop } from "react-icons/fa";
import { IoMdSkipBackward, IoMdPlay, IoMdSkipForward } from "react-icons/io";
import { IoRepeatOutline } from "react-icons/io5";
import { BiMicrophone } from "react-icons/bi";
import { MdPlaylistPlay } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

export default function BottomBar() {
    return (
        <div className='bottom-bar'>
            <div className="left-side">
                <div className="music-info">
                    <div className="imgside-left"></div>
                    <div className="description-music">
                    <h5>Hunnybee</h5>
                    <p>Unknown Mortal Orchestra</p>
                    </div>
                    <IconContext.Provider value={{ color: "#42b92d", className: "global-class-name", size: "15px" }}>
                    <div className="icon-green-heart">
                        <FaHeart/>
                    </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="center-side">
                <div className="play-icons">
                <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons", size: "13px" }}>
                    <div className="icons-bottom">
                        <FaRandom/>
                    </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons", size: "15px" }}>
                    <div className="icons-bottom">
                        <IoMdSkipBackward/>
                    </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "#000", className: "global-class-name", size: "15px" }}>
                    <div className="play-music">
                        <IoMdPlay/>
                    </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons", size: "15px" }}>
                    <div className="icons-bottom">
                        <IoMdSkipForward/>
                    </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons", size: "18px" }}>
                    <div className="icons-bottom">
                        <IoRepeatOutline/>
                    </div>
                    </IconContext.Provider>
                </div>
                <div className="range-container">
                    <p className="numbers">0:00</p>
                    <input className="input-range" type="range" min="0" max="100" />
                    <p className="numbers">3:14</p>
                </div>
            </div>
            <div className="right-side">
                <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons right", size: "19px" }}>
                        <div className="">
                            <BiMicrophone/>
                        </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons right", size: "19px" }}>
                        <div className="icons-bottom">
                            <MdPlaylistPlay/>
                        </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons right", size: "17px" }}>
                        <div className="icons-bottom">
                            <FaDesktop/>
                        </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#a8a8a8", className: "hover-icons", size: "17px" }}>
                        <div className="icons-bottom">
                            <AiFillSound/>
                        </div>
                </IconContext.Provider>
                <input className="input-right" type="range" min="0" max="100" />
            </div>
        </div>
    )
}
