import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './Component/App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

const appWithStore=<Provider store={store}><App /></Provider>

ReactDOM.render(appWithStore, document.getElementById('root'));


