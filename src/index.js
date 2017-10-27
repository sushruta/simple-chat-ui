import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp/>, document.getElementById('root'));
registerServiceWorker();
