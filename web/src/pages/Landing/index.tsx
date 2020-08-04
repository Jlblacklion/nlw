import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcons from '../../assets/images/icons/study.svg';
import giveClassesIcons from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcons from '../../assets/images/icons/purple-heart.svg';

import './style.css';


function Landing(){
    return (
        <div id="page-landing"> 
            <div id="page-landing-content" className="container"> 
            <div className="logo-container">
                <img src={logoImg} alt="Logo proffy"/>
                <h2> Sua plataforma de estudos </h2>
            </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="#" className="study">
                        <img src={studyIcons} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="#" className="give-classes">
                        <img src={giveClassesIcons} alt="Estudar"/>
                        Estudar
                    </a>
                </div>
                <span className="total-connections">
                    Toatl de 200 conexões já realizadas <img src={purpleHeartIcons} alt="Conexões"/>
                </span>
            </div>
        </div>
    )
}


export default Landing;