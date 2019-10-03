import React ,{Component} from "react"
import "./infoRow.css"
import Badge from "../../badges/badge"

class InfoRow extends Component{
    
    render(){
        return(
            
            <div className={"infoRow"}>
                <h3 className={"skill"}>{this.props.infoName}</h3>
                <div className={"row "}>
                    <div className={"col-lg-3"}>
                        <Badge name={this.props.name} link={this.props.link} img={this.props.img} classes={this.props.classes}/>
                    </div>
                    <div className={"col-lg-7"}>
                        <p className={"para"}>{this.props.description}</p></div>

                    
                </div>

                
            </div>
        )
        
    }
}

export default InfoRow