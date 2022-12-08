import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import MovieListItem from '../MovieListItem';
import { headings } from '../../styles/headings';

const MovieList = ({movies, navigation, cinema}) => {
    const filteredMovies = []
    movies.forEach(movie => {
        for ( let i = 0; i < movie?.showtimes.length; i++) {       
            if (movie?.showtimes[i].cinema.id == cinema.id|movie?.showtimes[i].cinema==cinema.id)
                filteredMovies.push(movie)    
           } 
      });

   return(
    <View style={styles.main}>
        {
            filteredMovies[0] == null
            ?
            <Text style={headings.h1}>Engar myndir í sýningu :(</Text>
            :
            <View style={styles.list}>
                <Text style={headings.h1}>Í sýningu:</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={filteredMovies}
                    renderItem={({item}) => {
                        return ( 
                            <MovieListItem
                                cinema={cinema}    
                                movie={item} 
                                navigation={navigation}/>
                        )
                    }}   
                    listKey="MovieList"
                    />
            </View>
        }
    </View>
    )

}

export default MovieList;