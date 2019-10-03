import React, {Component} from "react"
import Badges from "../badges/badge"
import "./style.css"

class Projects extends Component{

    render(){
        return(
            <div>
                <h1>Projects</h1>
                <div className={"row"}>
                <Badges classes={"badges projects"}img={"/speakeasy-badge.png"} name={"Speakeasy"} link={"https://speakeasydrinks.herokuapp.com/"}/>
                <Badges classes={"badges projects"}img={"/green-logo.png"} name={"Food planner app"} link={"https://stephanfalcon.github.io/PlusUltraProject/"}/>
                <Badges classes={"badges projects"}img={"/billpay-badge.png"} name={"Billpay"} link={""}/>
                <Badges classes={"badges projects"}img={"/github-logo.png"} name={"Github repos"} link={"https://github.com/stephanfalcon"}/>
                </div>
                
            </div>
        )
    }
}

export default Projects