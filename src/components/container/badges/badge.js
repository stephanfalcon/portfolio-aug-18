import React, {Component} from "react"
import "./style.css"
class Badge extends Component{

    render(){
        return(
                 <div className={"badgeDiv col-lg-1 col-xs-4"}>
                    <div className={"d-flex justitfy-content-center"}>
                        <a href={this.props.link} className={"anchor"}><img src={this.props.img} alt={this.props.name} className={"badgeImage"}/></a>
                    </div>

                    <div className={'badgeTitleDiv d-flex justify-content-center'}>
                        <p className={'badgeTitle'}><b>{this.props.title}</b></p>
                    </div>
                    
                 </div>
                 
        )
    }
}

export default Badge