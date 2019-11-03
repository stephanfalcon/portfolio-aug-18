import React ,{Component} from "react"
import "./style.css"

class Header extends Component{

    render(){
        return(
            <div className={"headAll"}>
                <div className={"jumbotron text-center header"}>
                <h1 className={"text-light"}>Stephan Falcon</h1>

                    <div className={"headDiv"}>
                        <img className={"headImg "}src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F51ajkA6WELs%2Fhqdefault.jpg&f=1&nofb=1"></img>
                    </div>
                        
                    
                </div>
            </div>
            
        )
    }
}

export default Header 