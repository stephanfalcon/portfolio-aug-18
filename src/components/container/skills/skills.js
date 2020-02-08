import React, {Component} from "react"
import Badge from "../badges/badge"
import InfoRow from "./inforow/infoRow"
// import "./style.css"

class Skills extends Component{

    render(){
        return(
            <div>
                <h1>Skills</h1>
                <hr></hr>
                <div className = {"row d-flex justify-content-center"}>
                    {/* <InfoRow img={"/mongo-logo.png"} infoName={"Mongo"}  classes={"badges"} description={"I really like mongo and mongoose. I think that they are great way to get a fast easy and functional database up and running. I prefer these over something like MYSQL becuase they don't require you to use a workspace and is easily integrated in third party hosting."}/>
                    <InfoRow img={"/express-logo.png"} infoName={"Express"} classes={"badges"} description={"I would say that between using express and making a server with javascript from scratch I think that I would prefer the former. I have used express in tons of my project and it helps streamline an othewise very complicated process."}/>
                    <InfoRow img={"/react-logo.png"} infoName={"React"} classes={"badges"} description={"What can be said about react, its better than handle bars? It almost makes regular htlm obosolete? with a bit of dedication I think that react become one of the most useful tools that can be use when it comes to templating your websites. I use react in most of my projects and as a testimate to how usful it is this site is running with react! There is just so much that can be done with it."}/>
                    <InfoRow img={"/node-logo.png"} infoName={"Node"} classes={"badges"} description={"It goes without saying but if you are going to making javascript apps then any developer worth there salt will be using node. Node is so ubiquetus that I forget I am even using it. Coupled with the node package manager (npm) downloading and installing most every mainstream javascript library is such a breeze that you almost don't even have to think when you are using it. Most every project that I make uses node and npm I  just love how easy it makes using other libraries that can save lots of time."}/> */}
                    {/* <Badge img={"/mongo-logo.png"} name={"Mongo"}  classes={"badges"}/>
                    <Badge img={"/express-logo.png"} name={"Express"} classes={"badges"}/>
                    <Badge img={"/react-logo.png"} name={"React"} classes={"badges"}/>
                    <Badge img={"/node-logo.png"} name={"Node"} classes={"badges"}/> */}
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Mongo'} img={"mongo-logo.png"}/>
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Express'} img={"express-logo.png"}/>
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'React'} img={"react-logo.png"}/>                
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Node.js'} img={"node-logo.png"}/>
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Javascript'} img={"js-logo.png"}/>
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'HTML 5'} img={"html-logo.png"}/>                
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Git'} img={"git-logo.png"}/>
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Github'} img={"gitgun-logo.png"}/>
                    <Badge classes={"col-lg-1 cards badgeImage"} title={'Heroku'} img={"heroku-logo.png"}/>
                    </div>
            </div>
        )
    }
}

export default Skills