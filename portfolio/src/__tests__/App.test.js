import React from 'react';
import ReactDOM from 'react-dom';
import App from '../toplevelcontainers/App.js';
import { shallow } from 'enzyme';
import NavBar from '../scenes/navbar/components/NavBar.js';



describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});

describe('Examining the syntax of Jest tests', () => {
    it('sums numbers', () => {
          expect(1 + 2).toEqual(3);
          expect(2 + 2).toEqual(4);
       });

    });
