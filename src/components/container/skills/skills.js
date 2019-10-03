import React, {Component} from "react"
import Badge from "../badges/badge"
import InfoRow from "./inforow/infoRow"
// import "./style.css"

class Skills extends Component{

    render(){
        return(
            <div>
                <h1>Skills</h1>
                <div className = {"row"}>
                    <InfoRow img={"/mongo-logo.png"} infoName={"Mongo"}  classes={"badges"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                    <InfoRow img={"/express-logo.png"} infoName={"Express"} classes={"badges"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                    <InfoRow img={"/react-logo.png"} infoName={"React"} classes={"badges"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                    <InfoRow img={"/node-logo.png"} infoName={"Node"} classes={"badges"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                    {/* <Badge img={"/mongo-logo.png"} name={"Mongo"}  classes={"badges"}/>
                    <Badge img={"/express-logo.png"} name={"Express"} classes={"badges"}/>
                    <Badge img={"/react-logo.png"} name={"React"} classes={"badges"}/>
                    <Badge img={"/node-logo.png"} name={"Node"} classes={"badges"}/> */}
                </div>
            </div>
        )
    }
}

export default Skills