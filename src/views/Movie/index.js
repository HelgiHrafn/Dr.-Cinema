import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import SmallGenreList from '../../components/SmallGenreList'
import { headings } from '../../styles/headings'
import styles from './styles'



const Movie = ({ route }) => {
    const movie = route.params.movie
   
return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={headings.h1}>{movie.title}</Text>
            <Image style={styles.poster} source={{ uri: movie.poster }}/>
            <Text style={headings.h2}>{movie.year}</Text>
            <Text style={headings.h2}>lengd: {movie.durationMinutes} mín</Text>
            <SmallGenreList genres={movie.genres}></SmallGenreList>
            <ScrollView style={styles.description}>
                <Text style={headings.h3}>{movie.plot}</Text>
            </ScrollView>
        </View>
    
    </View>
)

}
export default Movie;