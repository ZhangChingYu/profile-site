import React from "react";
import './elements.css';
import fire from '../../assets/Fire.svg';
import earth from '../../assets/Earth.svg';
import flora from '../../assets/Flora.svg';
import mind from '../../assets/Mind.svg';
import water from '../../assets/Water.svg';

const Elements = () => {
    return(
        <div className="elements">
            <div className="element">
                <div className="element_icon_border">
                    <div className="element_icon">
                        <img src={fire} alt="fire"/>
                    </div>
                </div>
                <div className="element_text">FIRE</div>
            </div>
            <div className="element">
                <div className="element_icon_border">
                    <div className="element_icon">
                        <img src={water} alt="water"/>
                    </div>
                </div>
                <div className="element_text">WATER</div>
            </div>
            <div className="element">
                <div className="element_icon_border">
                    <div className="element_icon">
                        <img src={earth} alt="earth"/>
                    </div>
                </div>
                <div className="element_text">EARTH</div>
            </div>
            <div className="element">
                <div className="element_icon_border">
                    <div className="element_icon">
                        <img src={flora} alt="flora"/>
                    </div>
                </div>
                <div className="element_text">FLORA</div>
            </div>
            <div className="element">
                <div className="element_icon_border">
                    <div className="element_icon">
                        <img src={mind} alt="mind"/>
                    </div>
                </div>
                <div className="element_text">MIND</div>
            </div>
        </div>
    )
}

export default Elements;