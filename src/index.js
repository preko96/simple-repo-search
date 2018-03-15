import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'
import 'react-scrollbar';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
