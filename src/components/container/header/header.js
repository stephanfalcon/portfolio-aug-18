import React ,{Component} from "react"
import "./style.css"

class Header extends Component{

    render(){
        return(
            <div className={"headAll"}>
                <div className={"jumbotron text-center header"} style={{backgroundImage:"url(5382120.jpg)"}}>
                <h1 className={"text-light"}>Stephan Falcon</h1>

                    {/* <div className={"headDiv"}>
                        <img className={"headImg "}src="/croppedMe.jpg"></img>
                    </div> */}
                        
                    
                </div>
            </div>
            
        )
    }
}

export default Header 