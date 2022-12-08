import React from 'react'
import { View, Text } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const ShowTimeListItem = ({showtime}) => {
 
    return(
        <View style={styles.item}>
            <Text style={headings.h4}>{showtime.time}</Text>
        </View>
    )
}
export default ShowTimeListItem