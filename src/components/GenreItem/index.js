import React from 'react'
import { View, Text } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const GenreItem = ({ genre }) => {
    return (
        <View style={styles.item}>
            <Text style={headings.h4}>{genre.Name}</Text>
        </View>
    )
}
export default GenreItem
