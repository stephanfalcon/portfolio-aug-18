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
                        <div className={`col-lg-5 photoD`}>
                            <img className={'photo'}style={imgob}src={`/croppedMe.jpg`} alt={"ldfjs"}></img>
                        </div>
                        <div className={`col-lg-1`}>

                        </div>
                        <div className={`col-lg-4`}>
                            <p className={` bio`}>Hi, I'm Stephan, and I am a young new web devoloper who is hungry for new oportunities and expirences. I am so glad that you have
                            taken the time to look at my portfolio and I hope that I impress you. bellow you can find some of the skill that I am familiar with
                            and some of the projects that I have worked on.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio