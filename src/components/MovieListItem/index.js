import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const MovieListItem = ({ movie, navigation }) => {
    return(
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Movie', {movie})}>
            <Image style={styles.poster} source={{ uri: movie.poster }}/>
            <Text style={[headings.h3, styles.title]}>{movie?.alternativeTitles}</Text>
            <Text style={[headings.h3, styles.title]}>{movie?.certificate?.is}</Text>
            <Text style={[headings.h3, styles.title]}>{movie?.genres[0].Name}</Text>
            <Text style={[headings.h3, styles.title]}>{movie?.showtimes[0]?.cinema.name}</Text>
        </TouchableOpacity>
    )
}
export default MovieListItem