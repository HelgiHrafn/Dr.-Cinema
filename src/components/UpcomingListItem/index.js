import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const UpcomingListItem = ({ upcomingMovie, navigation }) => {
    return(
        <TouchableOpacity 
                style={styles.item} 
                // onPress={()=> navigation.navigate('UpcomingMovie', {upcomingMovie})}
            >
            <Text style={headings.h1}>{upcomingMovie.title}</Text>
            <Text style={headings.h3}>{upcomingMovie.year}</Text>
        </TouchableOpacity>
    )
}
export default UpcomingListItem