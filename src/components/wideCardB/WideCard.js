import React, { useEffect, useState } from "react";
import "./wideCardB.css";
import vedio from '../../assets/flame.mp4';
// <video autoPlay loop muted src={vedio} itemType="video/mp4" />

const WideCardB = () => {
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        // Function to format the date
        const formatDateTime = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");

            return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        };

        // Set the initial date-time
        setCurrentDateTime(formatDateTime());

        // Update every second
        const intervalId = setInterval(() => {
            setCurrentDateTime(formatDateTime());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    return(
        <div className="wide_card">
            <div className="test_container">
                <div className="layer_1">
                    <video autoPlay loop muted src={vedio} itemType="video/mp4" />
                </div>
                <div className="layer_2">
                    <div className="wide_card_B_tool"></div>
                    <div className="wide_card_B_tool"></div>
                    <div className="wide_card_B_tool"></div>
                </div>
                <div className="layer_3">
                    <p>{currentDateTime}</p>
                </div>
            </div>
        </div>
    )
}

export default WideCardB;