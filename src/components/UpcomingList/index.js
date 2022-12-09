import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import UpcomingListItem from '../UpcomingListItem'

const UpcomingList = ({ upcoming, navigation }) => {
    return (
        <View style={styles.list}>
            <FlatList
                numColumns={2}
                data={upcoming.sort((a, b) => a['release-dateIS'].localeCompare(b['release-dateIS']))}
                renderItem={({ item }) => {
                    return (
                        <UpcomingListItem
                            upcomingMovie={item}
                            navigation={navigation}/>
                    )
                }}
            />
        </View>)
}

export default UpcomingList
