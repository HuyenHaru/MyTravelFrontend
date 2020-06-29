import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './../node_modules/video-react/dist/video-react.css'; // import css
import App from './app/Layout/App';
import * as serviceWorker from './serviceWorker';
import store from './app/redux/store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// serviceWorker();
serviceWorker.unregister();
