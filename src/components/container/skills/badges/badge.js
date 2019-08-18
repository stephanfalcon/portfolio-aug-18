import React, {Component} from "react"

class Badge extends Component{

    render(){
        return(
            <div>
                <img src={this.props.img} alt={this.props.name}/>
            </div>
        )
    }
}

export default Badge