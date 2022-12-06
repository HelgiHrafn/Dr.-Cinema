import React from 'react'
import Cinemas from './src/views/Main'
//import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import Cinema from './src/views/Cinema'


export default function App () {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>

        
        <Cinemas></Cinemas>
    
        </Provider>
    );
}
