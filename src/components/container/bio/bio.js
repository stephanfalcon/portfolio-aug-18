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
                            <p className={` bio`}>Hi, I'm Stephan, and I am a young new web devoloper who is always looking for new opportunities and expirences.Thank you so much for taking the time to look at my portfolio and I hope that I impress you. below you can find some of the skill that I am familiar with
                            and some of the projects that I have worked on. This is only a snapshot of some of my favorite project and skills so I you are not even somewhat impressed please take a look at my git hub to get a better idea of what sort of work I have done.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio