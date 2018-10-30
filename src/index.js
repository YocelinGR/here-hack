import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles';
import LoginTelefono from './Component/LoginTelefono/LoginTelefono.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginTelefono />, document.getElementById('root'));
registerServiceWorker();


