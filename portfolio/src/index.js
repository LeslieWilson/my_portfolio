import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './toplevelcontainers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
