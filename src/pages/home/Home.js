import React from "react";
import "./home.css";
import { Header, Sidebar, Profile, About, WideCardA, WideCardB, Background } from "../../components";

const Home = () => {
    return(
        <div className="home">
            <Sidebar />
            <div className="home_body">
                <Header />
                <div className="home_body_">
                    <div className="home_body_left">
                        <Profile />
                        <About />
                        <div className="card_container">
                            <WideCardA />
                            <WideCardB />
                            <WideCardB />
                            <WideCardA />
                            <WideCardA />
                        </div>
                    </div>
                    <div className="home_body_right">
                        <Background />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;