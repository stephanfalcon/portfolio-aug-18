import React ,{Component} from "react"
import "./style.css"

class Button extends Component{

    render(){
        return(
                <a href={this.props.link}><button className={'button btn btn-primary'} onClick={this.props.function}>{this.props.title}</button></a>            
        )
    }
}

export default Button 