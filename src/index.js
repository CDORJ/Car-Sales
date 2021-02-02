import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import 'bulma/css/bulma.css';
import './styles.scss';
import { reducer } from './reducers/reducer'

const store = createStore(reducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
    // entire app has access to store
    <Provider store={store}> 
<App />
</Provider>, rootElement)
