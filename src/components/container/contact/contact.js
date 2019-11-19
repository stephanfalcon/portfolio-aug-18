import React, {Component} from "react"
import "./style.css"

class Contact extends Component{

    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            message:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        console.log(event.target)

        switch(event.target.id){

            case "name":
                this.setState({name:event.target.value})
                break;
            case "email":
                this.setState({email:event.target.value})
                break;
            case "message":
                this.setState({message:event.target.value})
                break
            default:
                console.log("there is no perameter")
        }

      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

    submit = (event) => {
            event.preventDefault()
            console.log(this.state)
        }
    render(){
        

        return(
            <div className={"contact text-light"}>
                <div className={"container"}>
                    {/* <h1>Contact</h1> */}
                    
                    <div className={"row text-center"}>
                        <div className={"col-lg-6"}>
                            <h3>Email</h3>
                            <a href={"mailto:hoobaloob99@gmail.com"}><li>hoobaloob99@gmail.com</li></a>
                        </div>
                        <div className={"col-lg-6"}>
                            <h3>Github</h3>
                            <a href={"https://github.com/stephanfalcon"}><li>Stephan Falcon</li></a>
                        </div>
                        {/* <div className={"col-lg-4"}>
                            <h3>Resume</h3>
                            <a href={"#"}><li>Link</li></a>
                        </div> */}
                    </div>
                    <div className={"foot"}></div>
                {/* </div>
                <div className={"contact-form"}>
                <form action="mailto:hoobaloob99@gmail.com" method="post" enctype="text/plain">
                        <p className={"contact-title"}>Name</p>
                        <input id={"name"} onChange={this.handleChange}></input>
                        <p className={"contact-title"}>email</p>
                        <input id={"email"} onChange={this.handleChange}></input>
                        <p className={"contact-title"}>Message</p>
                        <textarea id={"message"} onChange={this.handleChange}></textarea>
                        <br></br>
                        <button className={"submit"} type={"submit"} onClick={this.submit} >submit</button>
                    </form>
                </div>         */}
                
                
            </div>
        )
    }
}

export default Contact