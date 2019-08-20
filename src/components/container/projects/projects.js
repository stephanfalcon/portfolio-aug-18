import React, {Component} from "react"
import Badges from "../badges/badge"
import "./style.css"

class Projects extends Component{

    render(){
        return(
            <div>
                <h1>Projects</h1>
                <div className={"row"}>
                <Badges img={"/speakeasy-badge.png"} name={"Speakeasy"}/>
                <Badges img={"/green-logo.png"} name={"Food planner app"}/>
                <Badges img={"/billpay-badge.png"} name={"Billpay"}/>
                <Badges img={"/github-logo.png"} name={"Github repos"}/>
                </div>
                
            </div>
        )
    }
}

export default Projects