
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Projectpage extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true });
  }

  closeMenu(event) {
      event.preventDefault();
      this.setState({ showMenu: false });
  }

  render() {
    return (
      <div className="dropdown"
      onMouseEnter={this.showMenu}
      onMouseLeave={this.closeMenu}>
        <Link to = '/projects' className='drpdownbtn'>PROJECTS</Link>




        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <Link to = '/project1' className='drpdownbtn'> CIRCUS </Link>
                <Link to= '/project1' className='drpdownbtn'> UX DESIGN </Link>
                <Link  to='/project1' className='drpdownbtn'> AMAZON </Link>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Projectpage;
