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
                        <div className={`col-lg-2`}>

                        </div>
                        <div className={`col-lg-5`}>
                            <p className={` bio`}>
                                Hi, I'm Stephan, and I am a web developer who is new to the industry, always looking for new opportunities and experiences.
                                I live in Salt Lake City and am looking to get my professional career as a software/web developer started. Thank you so much for taking the time
                                to look at my portfolio and I hope that it impresses you. below you can find some of the skills that I am familiar with and a hand full of my 
                                favorite projects that I have worked on. This is only a snapshot of some of my favorite projects and skills so if you want a more in depth idea
                                of my work, please head over to my github account to see all of the public projects I have worked on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio