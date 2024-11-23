import React, { useState } from "react";
import './header.css';

const Header = () => {
    const [selected, setSelected] = useState("Home");
    const headerItems = ["Home", "About", "Portfolio", "Contact"];

    return (
        <div className="header">
            {headerItems.map((item) => (
                <button key={item} 
                className={`header_item ${selected === item ? "active" : ""}`} 
                onClick={()=>setSelected(item)}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Header;