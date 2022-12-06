import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const CinemaListItem = ({ cinema }) => {
    return(
        <TouchableOpacity style={styles.item}>
            <Text style={headings.h1}>{cinema.name}</Text>
            <Text style={headings.h3}>{cinema.website}</Text>
        </TouchableOpacity>
    )
}
export default CinemaListItem