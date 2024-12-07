import React from "react";
import "./wideCardA.css";
import image from "../../assets/avatar2.jpeg";

const WideCard = () => {
    const circleStyles = [
        {
            color: "var(--color-secondary)",
            anim: "animation1 2s infinite",
        },
        {
            color: "#5E5B61",
            anim: "animation1 2s infinite",
        },
        {
            color: "#858181",
            anim: "animation1 2s infinite",
        },
        {
            color: "##ADA8A2",
            anim: "animation1 2s infinite",
        },
        {
            color: "#D4CEC2",
            anim: "animation1 2s infinite",
        },
    ]
    const colors = ["var(--color-secondary)", "#5E5B61", "#858181", "#ADA8A2", "#D4CEC2"]
    return(
        <div className="wide_card_A">
            <div className="wide_card_container">
                <div className="wide_card_pic_container">
                    <img src={image} alt="profile"/>
                </div>
                <div className="wide_card_info">
                    <div className="wide_card_header">
                        <p className="wide_card_title">Silvia Chang</p>
                        <div className="wide_card_circles">
                            {circleStyles.map((item, id) => (
                                <div 
                                key={"wide_card_circle_"+id} 
                                className={"wide_card_circle"} 
                                style={{
                                    left:`${(4-id)*20}px`, 
                                    background:`linear-gradient(90deg, ${item.color}, ${id+1===5?"var(--color-yellow)":circleStyles[id+1].color})`,
                                    animation: item.anim
                                }}></div>
                            ))}
                        </div>
                    </div>
                    <p className="wide_card_subtitle">Silvia Chang</p>
                    <div className="wide_card_content">
                        <p>
                            Hello! I&#39;m ChatGPT, your AI assistant developed by OpenAI. I specialize in helping with a wide range of topics, 
                            from programming and tech troubleshooting to creative writing and career advice. Whether you need guidance on a 
                            challenging project, want to brainstorm ideas, or just need help learning something new, I&#39;m here to assist you. 
                            Feel free to ask me anything I&#39;ll do my best to provide clear and helpful responses. 😊
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WideCard;