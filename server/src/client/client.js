// Startup point for client side application.
import 'babel-polyfill';
import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import Routes from './Routes';

// Creating store
const store = createStore(reducers,{},applyMiddleware(thunk));

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    ,document.querySelector('#root')
);