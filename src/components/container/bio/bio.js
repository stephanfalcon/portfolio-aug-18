import React, {Component} from "react"
import "./style.css"

class Bio extends Component{

    render(){
        var imgob = {
            width:"100%"
        }
        return(
            <div className={`row`}>
                <div className={`col-lg-12`}>
                    <h1>Bio</h1>
                    <div className={"row"}>
                        <div className={`col-lg-5`}>
                            <img style={imgob}src={`https://cdn.discordapp.com/attachments/387846042147880963/607832414219403274/1564208778617.jpg`} alt={"ldfjs"}></img>
                        </div>
                        <div className={`col-lg-3`}>

                        </div>
                        <div className={`col-lg-4`}>
                            <p className={`text-right`}>kljdskaj;fksdfkjaskldfjaklsjdfkjsdklfjakl</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio