
import React, {Component} from 'react'
import Badges from '../badges/badge' 
import Button from '../button/button'

import './style.css'

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
            returnArray.push(<li className={"col-lg-6"}>{item.text}</li>)
        })

        return returnArray
    }

    render(){
        return(
            <div className={'projectDiv'}>
                <div className={'row info'}>
                    <img src={this.props.imageArray} alt={this.props.alt} className={'col-lg-6 projectImage'}/>
                    <div className={'col-lg-6 projectDesc'}>
                        <h2>{this.props.title}</h2>
                        <hr></hr>
                            <p>{this.props.description}</p>
                        <hr></hr>
                        <h3>Tech</h3> 
                        <div className={"row"} style={{paddingTop:'5px'}}>
                            {this.tech()}
                        </div>
                    </div>
                
                </div>
                
                <div className={'links row d-flex justify-content-center'}>
                    <Button title={'app'} link={this.props.appLink}/> <Button title={'Code'} link={this.props.codeLink}/>
                </div>
                <hr></hr>

            </div>
        )
    }
}

export default Projects