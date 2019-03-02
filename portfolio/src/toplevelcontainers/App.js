import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import '../stylesheets/App.css';
import Homecontainer from './Homecontainer';
import NavBar from '../scenes/navbar/components/NavBar';
import Aboutpage from '../scenes/navbar/components/Aboutpage';
import Contactpage from '../scenes/navbar/components/Contactpage';
import Gridlist from '../scenes/projects/components/Gridlist';
import Slider from '../scenes/projects/components/myslider/Slider';
import images from  '../data/projectData';
import text from '../data/projectText';

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

                <Route exact path ='/project1'
                    render={ () =><Slider
                    images={images}
                    text={text.text1}
                    />}/>

                <Route exact path='/project2'
                    render={() =><Slider
                    images={images}
                    text={text.text2}
                    />}/>

                <Route exact path='/project3'
                    render={() =><Slider
                    images={images}
                    text={text.text3}
                    />}/>

                <Route exact path='/project4'
                    render={() =><Slider
                    images={images}
                    text={text.text4}
                    />}/>

                <Route exact path='/project5'
                    render={() =><Slider
                    images={images}
                    text={text.text5}
                    />}/>

                <Route exact path='/project6'
                render={() =><Slider
                    images={images}
                    text={text.text6}
                />}/>

            </div>
         </Router>
            );
          }
        }

export default App;
