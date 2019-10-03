import React, {Component} from "react"
import Nav from "./nav/nav"
import Bio from "./bio/bio"
import Skills from "./skills/skills"
import Projects from "./projects/projects"
import Jumbotron from "./jumbotron/jumbotron"
// import Contact from "./contact/contact"
import "./style.css"


class Container extends Component{
    
    render(){
        return(
            <div>
                {/* <Nav/>  */}
                <div className={`container`}>
                    <Bio/>
                    
                    {/* <Jumbotron/> */}
                    <Projects/>
                    <Skills/>
                    {/* <Jumbotron/> */}
                </div>
            </div>
        )
    }
}

export default Container