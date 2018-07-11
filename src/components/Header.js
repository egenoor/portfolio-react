/**
 * Created by Ege on 08/02/2018.
 */
import React from "react"

import { Link } from "react-router-dom"
import Logo from './../assets/logo.png'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="navbar">
                    <div className="logo-container">
                        <span>
                            <img src={Logo} />
                        </span>
                    </div>
                    <Link to="/contact">
                        <div className="navbar-btn">CONTACT</div>
                    </Link>
{/*                    <Link to="/portfolio">
                        <div className="navbar-btn">PORTFOLIO</div>
                     </Link>*/}
                    <Link to="/">
                        <div className="navbar-btn">SHOWCASE</div>
                    </Link>
                </div>
            </div>
        )
    }
}

module.exports=Header