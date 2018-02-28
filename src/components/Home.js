import React from 'react';
import BalloonLogo from './../assets/airballoon_logo_2.png';
import RocketLogo from './../assets/rocket_logo_1.png';
import DoorDesign from './../assets/door.png';
import DTIbanner from './../assets/eventfoto3.jpg';
import BusinessC1 from './../assets/visiitkaart_white.png';
import BusinessC2 from './../assets/visiitkaart_white2.png';
import Enity from './../assets/ENITY_veebipood.png';   

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
                </div>
                <div className="image-container door">
                    <img src={DoorDesign} />
                </div>
                <div className="banner-container">
                    <img src={DTIbanner} />
                </div>

                <div className="inline">
                    <div className="bc-container">
                        <img src={BusinessC1} />
                    </div>
                    <div className="bc-container">
                        <img src={BusinessC2} />
                    </div>
                </div>
                <div className="image-container enity">
                    <img src={Enity} />
                </div>
            </div>
        )
    }
}

module.exports = Home;