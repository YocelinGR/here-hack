import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Location from './Location';
import Map from './Map';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Map app_id="0MOsfImUqdHKOEjditV6" app_code="L8wyCqwmQMcsDAoPzn-JdA" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
