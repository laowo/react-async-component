import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './style.js';
import './statics/iconfont/iconfont';
import PageRouter from './routes';

ReactDOM.render(
    <Provider store={store}>
        <PageRouter />
    </Provider>,
    document.getElementById('root')
);