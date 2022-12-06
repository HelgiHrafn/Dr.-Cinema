import React from 'react'
import AppContainer from './src/routes'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './src/reducers';
import { Provider } from 'react-redux';

export default function App () {
    return (
        <Provider store={configureStore({reducers})}>
            <AppContainer/>
        </Provider>
    )
}
