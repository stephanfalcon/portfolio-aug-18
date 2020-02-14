import React, {Component} from "react"
import Badges from "../badges/badge"
import Button from "../button/button"
import "./style.css"

class Projects extends Component{

    features = () => {
        console.log(this.props.features)
        let list = this.props.features
        let returnArray = []
        list.map((item)=>{
            returnArray.push(<li>{item.text}</li>)
        })

        return returnArray
    }
    tech = () => {
        console.log(this.props.tech)
        let list = this.props.tech
        let returnArray = []
        list.map((item)=>{
            returnArray.push(<li>{item.text}</li>)
        })

        return returnArray
    }

    render(){
        return(
            <div className={'projectDiv'}>
                <div className={"row"}>
                    <img src={this.props.imageArray} alt={this.props.alt} className={"col-lg-6 projectImage"}/>
                    <div className={"col-lg-6 projectDesc"}>
                        <h2>{this.props.title}</h2>
                        <hr></hr>
                            <p>{this.props.description}</p>
                        <hr></hr>
                        <h3>Tech</h3>
                        <ul>
                            {this.tech()}
                        </ul>
                    </div>
                
                </div>
                <div className={'row d-flex justify-content-center'}>
                    {/* <h3>Challenges</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                    
                    <Button title={'App'} className={'btn button btn-primary'}/> <Button title={'Code'} clasName={'btn button btn-primary'}/>
                    
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Projects