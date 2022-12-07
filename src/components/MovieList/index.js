import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import MovieListItem from '../MovieListItem'

const MovieList = ({movies, navigation, cinema}) => {
    const filteredMovies = []
    movies.forEach(movie => {
        for ( let i = 0; i < movie?.showtimes.length; i++) {
            //console.log(movie.showtimes[i].cinema.id)        
            if (movie?.showtimes[i].cinema.id == cinema.id)
                filteredMovies.push(movie)    
                //console.log(movie)
           } 
      })
    
   return(
    <View style={styles.list}>
        <FlatList
            numColumns={3}
            data={filteredMovies}
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