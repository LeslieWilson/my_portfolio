
import React from 'react';
import Fade from 'react-reveal/Fade';

import vectorlines2 from '../../images/vectorlines2.svg';






class Fadein extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
            window.addEventListener('scroll', this.handleScroll)
        };

        componentWillUnmount(){
            window.removeEventListener('scroll', this.handleScroll)
        };


  handleScroll() {
    this.setState({ show: true});
  }
  render() {
    return (
      <div className='vectorlines2'>

        <Fade when={this.state.show} className='Fade'>

<img src ={vectorlines2} onScroll= {this.handleScroll}></img>
 </Fade>
      </div>
        );
      }
    }

    export default Fadein;
