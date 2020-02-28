import React, {Component} from "react"
import "./style.css"

class Contact extends Component{

    render(){
        return(
            <div className = {"col-lg-12 form-div contact d-flex justify-content-center"}>

                <form className={"form"} action={"https://formspree.io/hoobaloob99@gmail.com"} method={"POST"}>
                    <h1>Contact</h1>
                    <label className={"form-label"}>Name</label>
                    <br></br>
                    <input className={"form-input"} placeholder={"Name"} name={"name"}></input>
                    <br></br>
                    <label className={"form-label"}>Email</label>
                    <br></br>
                    <input className={"form-input"} placeholder={"Email"} name={"email"}></input>
                    <br></br>
                    <label className={"form-label"}>Message</label>
                    <br></br>
                    <textarea className={"form-input"} placeholder={"Message"} name={"message"}></textarea>
                    <br></br>
                    <div className={"d-flex justify-content-center"}>
                    <button className={"form-submit button btn btn-primary"} type={"submit"}>submit</button>                        
                    </div>

                </form>
            </div>
            
        )
    }
}

export default Contact