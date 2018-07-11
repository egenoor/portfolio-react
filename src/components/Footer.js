import React from "react"

import { Link } from "react-router-dom"

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

        render(){
            return(
                <div className="footer">
                    <div className="copyright-container">
                        <p className="copyright"></p>
                    </div>
                </div>
            )
        }
    }

module.exports = Footer