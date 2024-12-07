import React from "react";
import "./sidebar.css";
import { symbol1, symbol2, symbol3, symbol4, symbol5, symbol6 } from "../../assets/symbols";

const Sidebar = () => {
    const imgData = [
        {
            data: symbol1,
            anim: "scaleAnimation 2s infinite"
        },
        {
            data: symbol2,
            anim: "quickSpinAnimation 1s infinite"
        },
        {
            data: symbol3,
            anim: "rotateAnimation 2s linear infinite"
        },
        {
            data: symbol4,
            anim: "D3Animation 2.4s infinite"
        },
        {
            data: symbol5,
            anim: "flipAnimation 2s infinite"
        },
        {
            data: symbol6,
            anim: "rotate20Animation 1.6s infinite"
        },
    ]
    return(
        <div className="sidebar">
            <div className="sidebar_item_prime"></div>
            {imgData.map((item, id) => (
                <div key={"sidebar_item_"+id} 
                    className="sidebar_item">
                        <img src={item.data} alt={"symbol"+id} style={{animation:item.anim, transformOrigin:"center"}}/>
                </div>
            ))}
            <div className="sidebar_item_lines">
                {Array.from({length:16}).map((item, id) => (
                    <div id={"sidebar_item_line_"+id} style={{opacity:(16-id)/16, background:"var(--color-yellow)"}}></div>
                ))}
                {Array.from({length:8}).map((item, id) => (
                    <div id={"sidebar_item_line_"+id} style={{opacity:(id+1)/8, background:"var(--color-red)"}}></div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;