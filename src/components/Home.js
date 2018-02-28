import React from 'react';
import BalloonLogo from './../assets/airballoon_logo_2.png';
import RocketLogo from './../assets/rocket_logo_1.png';
import DoorDesign from './../assets/door.png';
import DTIbanner from './../assets/eventfoto3.jpg';
import BusinessC1 from './../assets/visiitkaart_white.png';
import BusinessC2 from './../assets/visiitkaart_white2.png';
import Enity from './../assets/ENITY_veebipood.png';
import ProjectPS from './../assets/project_02.png'; 

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="content-container">
                <div className="inline">
                    <div className="sketch-container">
                        <img src={BalloonLogo} />
                    </div>
                    <div className="sketch-container">
                        <img src={RocketLogo} />
                    </div>
                    <div className="description">
                        <p className="logo-cont">Daily Logo Challenge Day 1 & Day 2. [Adobe Illustrator CC 2017; Adobe Photoshop CC 2015] </p>
                    </div>
                </div>
                <div className="image-container door">
                    <img src={DoorDesign} />
                    <div className="description">
                        <p>Door illustration, inspired by Windows of New York. [Adobe Illustrator CC 2016] </p>
                    </div>
                </div>
         
                <div className="banner-container">
                    <img src={DTIbanner} />
                    <div className="description">
                        <p>DTI Christmas Party banner for Facebook event. [Adobe Photoshop CC 2015; Adobe Illustrator CC 2017] </p>
                    </div>
                </div>
                <div classname="ps-cont">
                    <div classname="ps-project">
                        <img src={ProjectPS} />
                        <div className="description">
                            <p>[Adobe Photoshop CC 2015]</p>
                        </div>
                    </div>
                </div>
                <div className="inline">
                    <div className="bc-container">
                        <img src={BusinessC1} />
                    </div>
                    <div className="bc-container">
                        <img src={BusinessC2} />
                    </div>
                    <div className="description">
                        <p className="bc-cont">Business card tryout. [Adobe Illustrator CC 2017] </p>
                    </div>
                </div>
                <div className="image-container enity">
                    <img src={Enity} />
                    <div className="description">
                        <p>Logo for online store Enity. [Adobe Illustrator CC 2017; Adobe Photoshop CC 2015] </p>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Home;