/**
 * Created by Ege on 08/02/2018.
 */
import React from 'react';
import Myphoto from './../assets/IMG_20.jpg';


class Contact extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="contact-container">
                <div className="selfphoto">
                    <img src={Myphoto} />
                    <p id="smalltag">Photo by Madelyne Photography</p>
                </div>
                <div className="contact">
                    <h2> Ege-Rita Noor </h2>
                        <p>For business inquiries: egerita.noor@gmail.com</p>
                        <p><a href="https://www.instagram.com/mscns/">instagram</a> / <a href="https://www.linkedin.com/in/ege-rita-noor/">linkedin</a> </p>
                </div>
            </div>
        )
    }
}

module.exports = Contact;