import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Notificacion from './Component/Notificacion/Notificacion';
//import App from './App.js';
import DataPicker from './Component/Calendario/index';
//import Lector from './Component/Lector';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DataPicker/>, document.getElementById('root'));
registerServiceWorker();


