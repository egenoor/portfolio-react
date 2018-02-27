import React from 'react';
import BalloonLogo from './../assets/airballoon_logo.svg'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="img-container">
                    <span dangerouslySetInnerHTML={{__html: BalloonLogo}} />
                </div>
            </div>
        )
    }
}

module.exports = Home;