import React from "react";
import './background.css';

const Background = () => {
    return(
        <div className="background">
            <p className="background_title">BACKGROUND</p>
            <div className="background_content">
                Hello! I&#39;m ChatGPT, your AI assistant developed by OpenAI. I specialize in helping with a wide range of topics, 
                from programming and tech troubleshooting to creative writing and career advice. Whether you need guidance on a 
                challenging project, want to brainstorm ideas, or just need help learning something new, I&#39;m here to assist you. 
                Feel free to ask me anything I&#39;ll do my best to provide clear and helpful responses. 😊
            </div>
            <div className="background_items">
                <div className="background_item">
                    <div className="background_item_text">Skill No.1</div>
                    <div className="background_item_bar">
                        <div className="background_item_bar_child"></div>
                    </div>
                </div>
                <div className="background_item">
                    <div className="background_item_text">Skill No.2</div>
                    <div className="background_item_bar">
                        <div className="background_item_bar_child"></div>
                    </div>
                </div>
            </div>
            <div className="background_buttons">
                <div className="background_button" style={{background:"var(--color-third)"}}>

                </div>
                <div className="background_button" style={{background:"var(--color-yellow)"}}>

                </div>
                <div className="background_button" style={{background:"var(--color-red)"}}>

                </div>
            </div>
            <div className="background_buttom"></div>
        </div>
    )
}

export default Background;