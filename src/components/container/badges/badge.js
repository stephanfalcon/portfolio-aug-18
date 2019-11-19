import React, {Component} from "react"
import "./style.css"
class Badge extends Component{

    render(){
        return(
            <div className={"col-lg-3 center-content cards"}>
                <div>
                    <a href={this.props.link}><img src={this.props.img} alt={this.props.name} className={this.props.classes}/><p className ={"badgeText"}>{this.props.description}</p></a>
                    
                </div>
                
                <h3 className={"text-center title"}>{this.props.name}</h3>
                <hr></hr>
                <a href={this.props.repo}><h3 className={"text-center title"}>{this.props.repoText}</h3></a>

                
                
            </div>
        )
    }
}

export default Badge