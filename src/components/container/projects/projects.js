import React, {Component} from "react"
import Badges from "../badges/badge"
import "./style.css"

class Projects extends Component{

    render(){
        return(
            <div>
                <div className={"row"}>
                    <img src={this.props.imageArray} alt={"timeclock"}className={"col-lg-6"}></img>
                    <div className={"col-lg-6"}>
                        <h2>{this.props.title}</h2>
                        <hr></hr>
                        <h3>Features</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                        <hr></hr>
                        <h3>Technology</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                    </div>
                
                </div>
                
                <div>
                    <h3>challenges</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Projects