import { StyleSheet } from 'react-native'
import { darker } from '../../styles/colors'

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: darker,
        alignItems: 'center',
        flex: 1

    },
    container: {
      
        alignItems: 'center',
        padding: 10,
        marginBottom: 30
    },
    poster: {
        width: 400,
        height: 400,
        resizeMode: 'contain'
    },
    description: {
       flex: 1,
    }
    
})
