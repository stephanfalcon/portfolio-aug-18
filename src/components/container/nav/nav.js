import React, {Component} from "react"
import "./style.css"

class Nav extends Component{
    
    render(){
        return(
            <nav className={`nav navbar bg-dark text-light`}>
                    <h2 className={`align-self-right`}>Stephan Falcon</h2>
                    <div className={"d-flex flex-row-reverse"}>
                        <ul className={`nav `}>
                            <li className={`nav-item p-2`}>
                                <a className={`nav-link text-light`} href={"/"}>Bio</a>
                            </li>
                            <li className={`nav-item p-2`}>
                                <a className={`nav-link text-light`} href={"/"}>Skills</a>
                            </li>
                            <li className={`nav-item p-2`}>
                                <a className={`nav-link text-light`} href={"/"}>Projects</a>
                            </li>
                            <li className={`nav-item p-2`}>
                                <a className={`nav-link text-light`} href={"/"}>Contact</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}

export default Nav