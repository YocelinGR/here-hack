import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Location from './Location';
import Map from './Map';
import LoginPassword from './Component/LoginPassword/LoginPassord';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles';


import * as serviceWorker from './serviceWorker';
import Calendario from './Component/Calendario';


ReactDOM.render(<VistaPerfiles/>, document.getElementById('root'));

serviceWorker.unregister();
