import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import CinemaListItem from '../CinemaListItem'

const CinemaList = ({cinemas}) => {
    <View>
        <FlatList
            numColumns={1}
            data={cinemas.sort((a, b) = a.name.localeCompare(b.name))}
            renderItem={({item}) => {
                return (
                    <CinemaListItem
                        cinema={item} />
                )
            }}   
            />
    </View>
}
export default CinemaList