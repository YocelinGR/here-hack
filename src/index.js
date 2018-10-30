import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import LoginPassword from './Component/LoginPassword/LoginPassword';
import DatePicker from './Component/Calendario/index.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginPassword />, document.getElementById('root'));
registerServiceWorker();


