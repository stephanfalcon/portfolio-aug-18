import React, {Component} from "react"
import "./style.css"
class Badge extends Component{

    render(){
        return(
            <div className={"col-lg-3 center-content cards"}>
                <img src={this.props.img} alt={this.props.name} className={"badges"}/>
                <h3 className={"text-center"}>{this.props.name}</h3>
            </div>
        )
    }
}

export default Badge