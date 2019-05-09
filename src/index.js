import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './app-state';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {register} from './serviceWorker';
import './App.css';
import App from './App';

let store = createStore(appReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render((
  	<Provider store={store}>
	  	<App/>
</Provider>), document.getElementById('root'));

register();
