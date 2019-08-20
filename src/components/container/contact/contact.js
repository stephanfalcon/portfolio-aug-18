import React, {Component} from "react"
import "./style.css"

class Contact extends Component{
    render(){
        return(
            <div className={"bg-dark contact text-light"}>
                <div className={"container"}>
                    <h1>Contact</h1>
                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <h3>Email</h3>
                            <a href={"mailto:hoobaloob99@gmail.com"}><li>hoobaloob99@gmail.com</li></a>
                        </div>
                        <div className={"col-lg-4"}>
                            <h3>Github</h3>
                            <a href={"https://github.com/stephanfalcon"}><li>Stephan Falcon</li></a>
                        </div>
                        <div className={"col-lg-4"}>
                            <h3>Resume</h3>
                            <a href={"#"}><li>Link</li></a>
                        </div>
                    </div>
                    <div className={"foot"}></div>
                </div>
                
            </div>
        )
    }
}

export default Contact