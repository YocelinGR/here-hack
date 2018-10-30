import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Location from './Location';
import Map from './Map';
import * as serviceWorker from './serviceWorker';
import Calendario from './Component/Calendario';


ReactDOM.render(<Calendario/>, document.getElementById('root'));

serviceWorker.unregister();
