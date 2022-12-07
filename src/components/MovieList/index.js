import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import MovieListItem from '../MovieListItem'
import { headings } from '../../styles/headings'

const MovieList = ({movies, navigation}) => {
    return(

    <View style={styles.list}>
        <Text style={headings.h1}>Í sýningu:</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
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