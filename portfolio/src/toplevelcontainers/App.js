import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import '../stylesheets/App.css';
import Homecontainer from './Homecontainer';
import NavBar from '../scenes/navbar/components/NavBar';
import Aboutpage from '../scenes/navbar/components/Aboutpage';
import Contactpage from '../scenes/navbar/components/Contactpage';
import Gridlist from '../scenes/projects/components/Gridlist';


class App extends Component {
  render() {
    return (
<Router>
<div>

      <Route path='/' component={NavBar} />
      <Route exact path = '/' component ={Homecontainer}/>
      <Route exact path = "/about" component={Aboutpage} />
      <Route exact path = '/contact' component={Contactpage}/>
      <Route exact path ='/projects' component={Gridlist}/>

</div>
      </Router>

    );
  }
}

export default App;
