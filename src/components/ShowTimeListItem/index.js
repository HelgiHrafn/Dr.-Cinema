import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const ShowTimeListItem = ({showtime}) => {
 
    return(
        <TouchableOpacity onPress={()=> Linking.openURL(showtime.purchase_url)}>
            <View style={styles.item}>
                <Text style={headings.h3}>{showtime.time}</Text>
            </View>
        </TouchableOpacity>
        
    )
}
export default ShowTimeListItem