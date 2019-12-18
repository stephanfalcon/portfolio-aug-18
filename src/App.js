import React, {Component} from 'react';
import Container from "./components/container/container"
import Contact from "./components/container/contact/contact"
import Header from "./components/container/header/header"

class App extends Component {
  
  render(){
    return (
      <div>
        <Header/>
        <Container/>
        <Contact/>
      </div>
      
    );
  }
}

export default App;
