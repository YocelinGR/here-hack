import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Location from './Location';
import AddressForm from './Component/Mapa/AddressForm';
import * as serviceWorker from './serviceWorker';
import Calendario from './Component/Calendario';


ReactDOM.render(<AddressForm/>, document.getElementById('root'));

serviceWorker.unregister();

