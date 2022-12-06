import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const CinemaListItem = ({ cinema }) => {
    return(
        <View>
            <TouchableOpacity>
                <Text>{cinema.name}</Text>
                <Text>{cinema.website}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CinemaListItem