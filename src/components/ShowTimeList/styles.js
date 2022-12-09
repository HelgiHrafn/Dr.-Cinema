import { StyleSheet } from 'react-native'
import { dark } from '../../styles/colors'

export default StyleSheet.create({
    list: {

        backgroundColor: dark,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 10,
        padding: 5,
        flex: 1,
        minWidth: 400

    },
    flatlist: {
        backgroundColor: 'red',
        flex: 1
    }
})
