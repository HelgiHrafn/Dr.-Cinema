import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import ShowTimeListItem from '../ShowTimeListItem'

const ShowTimeList = ({ showtimes }) => {
    return (
        <View style={styles.list}>
            <FlatList

                showsVerticalScrollIndicator={false}
                numColumns={4}
                data={showtimes}
                renderItem={({ item }) => {
                    return (
                        <ShowTimeListItem showtime={item}></ShowTimeListItem>
                    )
                }}
            />
        </View>)
}
export default ShowTimeList
