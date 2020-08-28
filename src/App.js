import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
 
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
       <Container className="w-100 p-3">
        <div>
          <Navigation />
            <Switch>            
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
        </Container>
      </BrowserRouter>
    );
  }
}
 
export default App;

