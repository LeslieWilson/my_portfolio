import React from 'react';
import Fade from 'react-reveal/Fade';
import vectorlines2 from '../../images/vectorlines2.svg';
v
class Fadein extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className='vectorlines2'>


        <Fade when={this.state.show}>

<img src ={vectorlines2}></img>

        </Fade>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
        >
          { this.state.show ? 'Hide' : 'Show' } Message
        </button>
      </div>
        );
      }
    }

    export default Fadein;
