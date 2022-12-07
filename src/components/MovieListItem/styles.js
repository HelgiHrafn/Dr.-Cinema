import { StyleSheet } from 'react-native'
import { darker, light } from '../../styles/colors'

export default StyleSheet.create({
    item: {
        margin: 5,
        backgroundColor: darker,
        display: 'flex',
        
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        flexBasis: '47%'

    },
    poster: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    title: {
    }
})
