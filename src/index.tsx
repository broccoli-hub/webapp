import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // assuming you have this global CSS file
import App from './App';

import { registry } from 'chart.js';
import * as dateFnsAdapter from 'chartjs-adapter-date-fns';

registry.add(dateFnsAdapter);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you have service workers or other additional code, it can go here.
