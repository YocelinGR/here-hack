import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App.js';
import SplashScreen from './Component/SplashScreen/SplashScreen';
import LoginPassword from './Component/LoginPassword/LoginPassword.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SplashScreen />, document.getElementById('root'));
registerServiceWorker();


