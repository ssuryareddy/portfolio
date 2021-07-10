import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

function Home() {

    return (
        <div className="home-page">
            <div className="background-img">
                <div className="title">
                    <h4>Welcome</h4>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("I'm a Designer")
                            .pauseFor(2500)
                            .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    <p>In Bangalore,karanatka</p>
                </div>
            </div>
        </div>
    );
}

export default Home;