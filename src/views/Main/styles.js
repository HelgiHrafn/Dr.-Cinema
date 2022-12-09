import { StyleSheet } from 'react-native'
import { darker } from '../../styles/colors'

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: darker
    },
    buttonBackground: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 5,
        marginTop: 10,
        alignSelf: 'center'
        // position: 'relative',

    }
}
)
