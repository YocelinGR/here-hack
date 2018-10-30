import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import LoginPassword from './Component/LoginPassword/LoginPassword';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


