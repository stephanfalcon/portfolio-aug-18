import React, {Component} from "react"
import Badges from "../badges/badge"
import "./style.css"

class Projects extends Component{

    render(){
        return(
            <div>
                <h1>Projects</h1>
                <div className={"row center-content holder"}>
                <Badges repo={"https://github.com/cwp132/Speakeasy"} repoText={"Repository"} classes={"badges projects center-content"}img={"/speakeasy-badge.png"} name={"Speakeasy"} link={"https://speakeasydrinks.herokuapp.com/"} description={"This is a project uses react and axios api calls to allow users too search and favorite all kind of different drink recipes."}/>
                <Badges repo={"https://github.com/stephanfalcon/PlusUltraProject"} repoText={"Repository"} classes={"badges projects"}img={"/green-logo.png"} name={"Food planner app"} link={"https://stephanfalcon.github.io/PlusUltraProject/"} description={"This project utilizes ajax request from food api and allows the users to favorite meal that they have searched for, afther they have faorited them they can add them to a calender to help plan their meals"}/>
                <Badges repo={"https://github.com/Larrabee55/billPay"} repoText={"Repository"} classes={"badges projects"}img={"/billpay-badge.png"} name={"Billpay"} link={""} description={"This app has pass port user login authenication along with the use of a mongodb/monoose that lets users add new bills that they have to pay and add the all up to show how much they need to pay tat the end of the month"}/>
                <Badges classes={"badges projects"}img={"/github-logo.png"} name={"Github repos"} link={"https://github.com/stephanfalcon"} repo={"https://github.com/cwp132/Speakeasy"} description={"this is a collection of all the repositories that I have uploaded to in the past there is alot more than just the project deplayed here so feel free to take a look at all the other project and apps that I have worked on"}/>
                </div>
                
            </div>
        )
    }
}

export default Projects