import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import GenreItem from '../GenreItem'

const SmallGenreList = ({genres}) => {

   return(
    <View style={styles.list}>
        <FlatList
            
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={genres}
            renderItem={({item}) => {
                return ( 
                    <GenreItem genre={item}></GenreItem>
                )
            }}
            listKey={(item, index) => `_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            />
    </View>)
}
export default SmallGenreList