import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import CinemaListItem from '../CinemaListItem'

const CinemaList = ({cinemas, navigation}) => {
    return(

    <View style={styles.list}>
        <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={cinemas.sort((a, b) => a.name.localeCompare(b.name))}
            renderItem={({item}) => {
                return (
                    <CinemaListItem
                        cinema={item} 
                        navigation={navigation}/>
                )
            }}   
            />
    </View>)
}
export default CinemaList