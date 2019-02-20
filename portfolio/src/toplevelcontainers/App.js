import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';
import '../stylesheets/App.css';
import Homecontainer from './Homecontainer';
import NavBar from '../scenes/navbar/components/NavBar';
import Aboutpage from '../scenes/navbar/components/Aboutpage';
import Contactpage from '../scenes/navbar/components/Contactpage';
import Gridlist from '../scenes/projects/components/Gridlist';


class App extends Component {
  render() {
    return (

      <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
      <IndexRoute component={Homecontainer}/>
      <Route path = "/about" component={Aboutpage} />
      <Route path = '/contact' component={Contactpage}/>
      <Route path ='/projects' component={Gridlist}/>
      </Route>
      </Router>

    );
  }
}

export default App;
