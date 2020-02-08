import React ,{Component} from "react"
import "./style.css"

class Button extends Component{

    render(){
        return(
                <button className={'button btn btn-primary'} onClick={this.props.function}>{this.props.title}</button>            
        )
    }
}

export default Button 