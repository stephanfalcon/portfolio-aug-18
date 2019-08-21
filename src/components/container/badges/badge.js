import React, {Component} from "react"
import "./style.css"
class Badge extends Component{

    render(){
        return(
            <div className={"col-lg-3 center-content cards"}>
                <a href={this.props.link}><img src={this.props.img} alt={this.props.name} className={"badges"}/></a>
                <h3 className={"text-center title"}>{this.props.name}</h3>
            </div>
        )
    }
}

export default Badge