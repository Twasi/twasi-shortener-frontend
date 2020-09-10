import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
require('dotenv').config()

ReactDOM.render(React.createElement(App), document.getElementById('root'));
//registerServiceWorker();
