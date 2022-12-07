import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import AppContainer from './src/routes';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


export default function App () {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <AppContainer/>
        </Provider>
    )
}
