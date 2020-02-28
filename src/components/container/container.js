import React, {Component} from 'react'
import Nav from './nav/nav'
import Bio from './bio/bio'
import Skills from './skills/skills'
import Projects from './projects/projects'
import Jumbotron from './jumbotron/jumbotron'
import Button from './button/button'
// import Contact from './contact/contact'
import './style.css'


class Container extends Component{
    
    render(){
        return(
            <div>
                {/* <Nav/>  */}
                <div className={`container`}>
                    <div className={'row d-flex justify-content-center'}>
                        <Button title={'Resume'} link={'/resume.pdf'}/>
                        <Button title={'Github'} link={'https://github.com/stephanfalcon'}/>
                        <Button title={'Linkedin'} link={'https://www.linkedin.com/in/stephan-falcon-23033514a/'}/>
                    </div>
                    
                    {/* <Jumbotron/> */}
                    <Skills/>
                    <h1>Projects</h1>
                    <hr></hr>
                    <Projects 
                        imageArray={'timeClock/timeClock2.png'} 
                        alt={'time clock app image'} 
                        title={'Time Clock App'} 
                        description={`This application allows users to clock in and clock out just like time 
                            clock at work. it records time clocked in time clocked out and time passed. 
                            it also allows you to leave a note to keep track of what exactly you were clocked in for, weather it be working on a project or a personal hobby. 
                            This is still a work in progress but fully functional as an mvp so exprect more features in the future.`} 
                        tech={[{text:'react.js'},{text:'mongoose'},{text:'axios.js'},{text:'restful api'},{text:'express.js'}]}
                        appLink={'https://timeclock03.herokuapp.com/'}
                        codeLink={'https://github.com/stephanfalcon/TimeClock3'}
                    /> 
                    <Projects 
                        imageArray={'speakeasy/speakeasy1.png'} 
                        alt={'Speakeasy image'} 
                        title={'Speakeasy'} 
                        description={`This project was a collaboration with some of my peers from a web development bootcamp. 
                            Users can create an account and search for their favorite drink recipes. 
                            loging in will allow users to save drinks to their profile for later use. 
                            This pulls from a drink api that has over 500 different recipes.`} 
                        tech={[{text:'react.js'},{text:'express.js'},{text:'restful api handling'},{text:'axios.js'},{text:'mongoose'},{text:'passport.js'}]}
                        appLink={'https://speakeasydrinks.herokuapp.com/'}
                        codeLink={'https://github.com/cwp132/Speakeasy'}
                    />
                    <Projects 
                        imageArray={'foodplanner/foodplanner1.png'} 
                        alt={'meal planner app image'} 
                        title={'Meal Planner App'} 
                        description={`One of the first official project I worked on, but still one of my favoite.
                            This application helps users look up meal ideas by searching for ingredints, listing out meal and
                            giving nutrition dietary information and how to prepare said meals. great for those who want to get out of thier comfort zone and try new foods.`} 
                        tech={[{text:'javascript'},{text:'jquery'},{text:'firebase'},{text:'ajax for api calling'}]}
                        appLink={'https://stephanfalcon.github.io/PlusUltraProject/'}
                        codeLink={'https://github.com/stephanfalcon/PlusUltraProject'}
                    />

                    {/* <Jumbotron/> */}
                </div>
            </div>
        )
    }
}

export default Container