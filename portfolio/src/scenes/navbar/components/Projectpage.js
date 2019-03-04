

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

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.showMenu}>
          PROJECTS
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className='drpdownbtn'> Circus </button>
                <button className='drpdownbtn'> UX design </button>
                <button className='drpdownbtn'> Amazon </button>
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
