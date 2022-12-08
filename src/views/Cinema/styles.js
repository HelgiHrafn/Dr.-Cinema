import { StyleSheet } from 'react-native'
import { dark, darker } from '../../styles/colors'

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: darker,
        alignItems: 'center',

    },
    about: {
        alignItems: 'center',
        margin: 10,
        display: 'flex'
        
    },
    info:{
        display: 'flex',
        alignSelf: 'flex-start',
        margin: 10,
    },
    description: {
       
        backgroundColor: dark,
        padding: 5,
        borderRadius: 10,
        maxHeight: 125
    }
    
})
