import React from "react";
import "./AboutMe.css";
import ContentImg from "./image/surya-img.jpg";

function AboutMe() {
    return (
        <div className="about-page">
            <div className="main-content">
                <div className="about-me">
                    <h2>I'm SURYA.. </h2>
                    <p>
                        I'm a nice fun and friendly person, I'm honest and punctual, I
                        work well in a team but also on my own as I like to set myself
                        goals which I will achieve, I have good listening and
                        communication skills. I have a creative mind and am always up for
                        new challenges
                    </p>
                    <div className="personal-heading">
                        <h1>Personal Information</h1>
                    </div>

                <div className="personal-infos">
                    <div className="left-content">
                        <h1>Name: S.SURYA</h1>
                        <h1>DOB: 22/06/1998</h1>
                        <h1>Age: 23</h1>
                        </div>
                        <div className="right-content">
                        <h1>Relgion: Hindu</h1>
                        <h1>Qulaification: B.E(MECH)</h1>
                        <h1>Langauage: Tamil,English,Kannada</h1>
                    </div>
                </div>
                </div>
                <div className="content-img">
                    <img src={ContentImg} alt="img" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
