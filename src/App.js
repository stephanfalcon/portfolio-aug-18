import React, {Component} from 'react';
import Container from "./components/container/container"
import Contact from "./components/container/contact/contact"

class App extends Component {
  // state = {
  //   obj : []
  // }

  componentDidMount(){
    // fetch("/users")
    //   .then(res => res.json())
    //   .then(users => this.setState({obj:users},(res=>{
    //     console.log(res)
    //   })))
      // .then(res => console.log(res))
        // .then(users => console.log(users))
        // .then(users => {this.setState({users}); console.log(users)})
  }
  
  render(){
    return (
      <div>
        <Container/>
        <Contact/>
      </div>
      
    );
  }
}

export default App;
