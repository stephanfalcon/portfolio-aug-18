import React, {Component} from 'react';
import Container from "./components/container/container"


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
    return (<Container/>);
  }
}

export default App;
