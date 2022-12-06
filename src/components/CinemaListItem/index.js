import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const CinemaListItem = ({ cinema, navigation }) => {
    return(
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Cinema', {cinema})}>
            <Text style={headings.h1}>{cinema.name}</Text>
            <Text style={headings.h3}>{cinema.website}</Text>
        </TouchableOpacity>
    )
}
export default CinemaListItem