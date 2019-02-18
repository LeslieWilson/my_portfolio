import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';
import '../stylesheets/App.css';
import Homecontainer from '../scenes/home/containers/Homecontainer';
import NavBar  from '../scenes/navbar/components/NavBar';
import  Aboutpage  from '../scenes/navbar/components/Aboutpage';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
      <indexRoute component={Homecontainer}/>



      <Route path = "/about" component={Aboutpage} />
      </Route> </Router>


      </div>
    );
  }
}

export default App;
