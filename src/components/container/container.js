import React, {Component} from "react"
import Nav from "./nav/nav"
import Bio from "./bio/bio"
import Skills from "./skills/skills"
import Projects from "./projects/projects"
import Jumbotron from "./jumbotron/jumbotron"
import Button from "./button/button"
// import Contact from "./contact/contact"
import "./style.css"


class Container extends Component{
    
    render(){
        return(
            <div>
                {/* <Nav/>  */}
                <div className={`container`}>
                    <div className={'row d-flex justify-content-center'}>
                        <Button title={'Resume'}/>
                        <Button title={'Github'}/>
                        <Button title={'Linkedin'}/>
                    </div>
                    
                    <Skills/>
                    <h1>Projects</h1>
                    <hr></hr>
                    <Projects/>
                    <Projects/>
                    <Projects/>

                    {/* <Jumbotron/> */}
                </div>
            </div>
        )
    }
}

export default Container