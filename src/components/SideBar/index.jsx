import React from 'react';
import './SideBar.css';
import Logo from '../../img/logo.png';
import { IconContext } from "react-icons";
import { BiHomeAlt, BiSearch, BiMenuAltRight, BiPlus } from "react-icons/bi";
import Heart from '../../img/heart-64.png';

export default function SideBar() {
    return (
    <div className="SideBar">

        <img src={Logo} alt="" className="logo"/>
            
        <div className="buttons">
            
            <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: "25px" }}>
                <div className="button active">
                    <BiHomeAlt/> <p>Início</p>
                </div>
            </IconContext.Provider>
            
            <IconContext.Provider value={{ color: "#a3a3a3", className: "global-class-name", size: "25px" }}>
                <div className="button search">
                    <BiSearch/> <p>Buscar</p>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#a3a3a3", className: "global-class-name", size: "25px" }}>
                <div className="button you">
                    <BiMenuAltRight/> <p>Sua Biblioteca</p>
                </div>
            </IconContext.Provider>

            <div className="playlists">
                <IconContext.Provider value={{ color: "#111", className: "global-class-name", size: "24px" }}>
                    <div className="button playlist">
                    <div className='box-button'> <BiPlus/> </div> <p>Criar playlist</p>
                    </div>
                </IconContext.Provider>
                    
                <div className="button playlist">
                    <div className='box-button-playlist'> <img src={Heart} className="heart-playlist"/> </div> 
                    <p>Músicas curtidas</p>
                </div>
            </div> 
            <div className="button-other-playlists">
                <p>Heavy Metal</p>
                <p>Hello world</p>
                <p>Descobertas da semana</p>
                <p>Indie Rock</p>
            </div>  
        </div>
    </div>
    )
}
