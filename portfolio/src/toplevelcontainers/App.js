import React, { Component } from 'react';
import '../stylesheets/App.css';
import Homecontainer from '../scenes/home/containers/Homecontainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Homecontainer />
      </div>
    );
  }
}

export default App;
