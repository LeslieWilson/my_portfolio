
import React from 'react';
import Fade from 'react-reveal/Fade';
import white2 from '../../images/white2.png';
import clr2 from '../../images/clr2.png';
import { HashLink as Link } from 'react-router-hash-link';



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

        <Fade when={this.state.show} className='Fade'  delay={0} duration = {3000}>

<img src ={clr2} onScroll= {this.handleScroll} className="colorphoto"></img>
 </Fade>

 <Fade when={this.state.show} className='Fade'  delay={3000} duration = {4000}>

<img src ={white2} onScroll= {this.handleScroll} className="whitephoto"></img>
</Fade>


<div className='options'>



<Fade when={this.state.show} className='Fade'  delay={8000} duration = {4000}>


<Link
    to="/projects/#UrbanDesign"
    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
><button className='buttonUrban' onScroll= {this.handleScroll}>Urban Design</button></Link>
<Link
    to="/projects/#Architecture"
    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
><button className='buttonArchitecture' onScroll= {this.handleScroll}>Architecture</button></Link>

<Link
    to="/projects/#UXDesign"
    scroll={el => el.scrollIntoView({ behavior: 'smooth', transition:4000, block: 'end' })}
><button className='buttonUX' onScroll= {this.handleScroll}>UX</button></Link>



</Fade>
</div>

      </div>

        );
      }
    }

    export default Fadein;
