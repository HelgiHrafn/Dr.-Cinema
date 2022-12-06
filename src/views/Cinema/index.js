import React from 'react'
import { View, Text } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const Cinema = ({ navigation, route }) => {
    const cinema = route.params.cinema
    return (
        <View style={styles.main}>
            <Text style={headings.h1}>{cinema.name}</Text>
            <Text style={headings.h3}>{cinema.description}</Text>
            <View>
                <Text style={headings.h3}>{cinema['address\t']}</Text>
                <Text style={headings.h3}>{cinema.city}</Text>
            </View>
            <Text style={headings.h3}>{cinema.phone}</Text>
            <Text style={headings.h3}>{cinema.website}</Text>
        </View>
    )
}
export default Cinema