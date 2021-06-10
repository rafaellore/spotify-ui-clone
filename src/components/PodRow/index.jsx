import React,{useState} from 'react';
import './PodRow.css';
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PodRow() {
    const [scrollX, setScrollX]= useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
        x = 0;
    }
    setScrollX(x);
}
const handleRightArrow = () =>{
    let listW = 1020;
    let x = scrollX - Math.round(listW / 2)+ 300;
    if(x >= -1089){
    setScrollX(x);
    }
}
    return (
        <div className='podrow'>
             <div className="podrow-left" onClick={handleLeftArrow}>
                    <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: "30px" }}>
                        <div>
                            <IoIosArrowBack className="podrowicon-left"/>
                        </div>
                    </IconContext.Provider>
                </div>
        <div className="row" id='row' style={{
            marginLeft: scrollX,
           }}>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
            <div className="item-row">
                <div className="img-row">
                </div>
                <h2>Scaled and Icy</h2>
                <p>22 de Abril. 249min</p>
            </div>
        </div>
            <div className="podrow-right" onClick={handleRightArrow}>
                    <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: "30px" }}>
                        <div>
                            <IoIosArrowForward className="podrowicon-right"/>
                        </div>
                    </IconContext.Provider>
                </div>
        </div>
    )
}
