import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import MovieListItem from '../MovieListItem'

const MovieList = ({movies, navigation}) => {
    return(

    <View style={styles.list}>
        <FlatList
            numColumns={3}
            data={movies}
            renderItem={({item}) => {
                return (
                    <MovieListItem
                        movie={item} 
                        navigation={navigation}/>
                )
            }}   
            />
    </View>)
}
export default MovieList