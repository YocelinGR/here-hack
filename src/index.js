import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles';
import LoginPassword from './Component/LoginPassword/LoginPassword.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VistaPerfiles />, document.getElementById('root'));
registerServiceWorker();


