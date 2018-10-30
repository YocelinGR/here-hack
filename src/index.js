import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles';
import Lector from './Component/Lector/LectorQR.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lector />, document.getElementById('root'));
registerServiceWorker();


