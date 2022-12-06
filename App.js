import React from 'react'
import Cinemas from './src/views/Main'
// import AppContainer from './src/routes'
// import { configureStore } from '@reduxjs/toolkit'
// import reducers from './src/reducers';
// import { Provider } from 'react-redux';
import Cinema from './src/views/Cinema'
export default function App () {
    return (
        // <Provider store={configureStore({reducers})}>
        //     <AppContainer/>
        // </Provider>
        <Cinemas></Cinemas>
        //<Cinema></Cinema>
    )
}
