import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import LoginPassword from './Component/LoginPassword/LoginPassword.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginPassword />, document.getElementById('root'));
registerServiceWorker();


