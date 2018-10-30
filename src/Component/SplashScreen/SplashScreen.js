import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
    return(
        <div>
            <div className= "container fluid">
                <div className= "vertical-line"></div>
                <div className= "vertical-line-right"></div>
                <div className= "vertical-line-left"></div>
                <div className= "vertical-line-ligth"></div>
                <img className= "bus-img" src="https://github.com/YocelinGR/here-hack/blob/master/src/assets/bus.png?raw=true" alt="bus-icon" />
                <h1 className= "letter">School Security</h1>
            </div>
        </div>
    );
}

export default SplashScreen;