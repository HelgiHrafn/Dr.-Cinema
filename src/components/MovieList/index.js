import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import MovieListItem from '../MovieListItem';
import { headings } from '../../styles/headings';

const MovieList = ({movies, navigation, cinema}) => {
    const filteredMovies = []
    movies.forEach(movie => {
        for ( let i = 0; i < movie?.showtimes.length; i++) {       
            if (movie?.showtimes[i].cinema.id == cinema.id)
                filteredMovies.push(movie)    
           } 
<<<<<<< HEAD
      })

    
    
=======
      });

>>>>>>> 88810bfecad64d7464954446ab5fbfffcd94514a
   return(
    <View style={styles.list}>
        <Text style={headings.h1}>Í sýningu:</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={filteredMovies}
            renderItem={({item}) => {
                return ( 
                    <MovieListItem
                        movie={item} 
                        navigation={navigation}/>
                )
            }}   
            listKey="MovieList"
            />
    </View>
    )
}

export default MovieList;