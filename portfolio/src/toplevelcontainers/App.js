import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import '../stylesheets/App.css';
import Homecontainer from './Homecontainer';
import NavBar from '../scenes/navbar/components/NavBar';
import Aboutpage from '../scenes/navbar/components/Aboutpage';
import Contactpage from '../scenes/navbar/components/Contactpage';
import Gridlist from '../scenes/projects/components/Gridlist';
import Slider from '../scenes/projects/components/myslider/Slider';


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
      <Route exact path ='/project1' render={ () =><Slider
      images={[
        {image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg"},
        {image:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg"},
        {image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"}
    ]}
     text={
         ["hello 1","hello 2","hello 3"]
     }
      />}/>




</div>
      </Router>

    );
  }
}

export default App;
