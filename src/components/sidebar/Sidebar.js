import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar_item_prime"></div>
            {Array.from({length: 4}).map((item, id) => (
                <div key={"sidebar_item_"+id} 
                    className="sidebar_item">
                </div>
            ))}
            
        </div>
    )
}

export default Sidebar;