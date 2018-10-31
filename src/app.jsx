'use strict';

import 'asset/css/style.less';
import 'antd/dist/antd.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import App from './container';
import appReducer from './redux/reducer';

const middlewares = [thunk];

const store = createStore(appReducer, applyMiddleware(...middlewares));

if (module.hot) {
    module.hot.accept(App);
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);