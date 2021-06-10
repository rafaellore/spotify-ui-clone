import React from 'react';
import './Header.css';
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { TiArrowSortedDown } from "react-icons/ti";
import Profile from '../../img/profile.png';

export default function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="arrows">
                <div className="arrow-left">
                    <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: "20px" }}>
                        <div>
                            <IoIosArrowBack className="icon-left"/>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="arrow-right">
                    <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: "20px" }}>
                        <div>
                            <IoIosArrowForward className="icon-right"/>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>

            <div className="buttons-text">
                <div className="button-left">
                    <p>FAÇA UPGRADE</p>
                </div>
                <div className="button-right">
                    <img src={Profile}></img>
                    <p>Rafael Moreira</p>
                    <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: "20px" }}>
                        <div>
                            <TiArrowSortedDown className="button-right-icon"/>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </header>
    )
}
