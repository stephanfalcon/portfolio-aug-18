import React, {Component} from "react"
import Badge from "../badges/badge"
// import "./style.css"

class Skills extends Component{

    render(){
        return(
            <div>
                <h1>Skills</h1>
                <div className = {"row"}>
                    <Badge img={"/mongo-logo.png"} name={"Mongo"}/>
                    <Badge img={"/express-logo.png"} name={"Express"}/>
                    <Badge img={"/react-logo.png"} name={"React"}/>
                    <Badge img={"/node-logo.png"} name={"Node"}/>
                </div>
            </div>
        )
    }
}

export default Skills