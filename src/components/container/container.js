import React, {Component} from "react"
import Nav from "./nav/nav"
import Bio from "./bio/bio"
import Skills from "./skills/skills"
import Projects from "./projects/projects"
// import Contact from "./contact/contact"
import "./style.css"


class Container extends Component{
    
    render(){
        return(
            <div>
                <Nav/> 
                <div className={`container`}>
                    <Bio/>
                    <Skills/>
                    <Projects/>
                </div>
            </div>
        )
    }
}

export default Container