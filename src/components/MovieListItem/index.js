import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const MovieListItem = ({ movie, navigation }) => {
    return(
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Movie', {movie})}>
            <Image style={styles.poster} source={{ uri: movie.poster }}/>
            <Text style={[headings.h3, styles.title]}>{movie.title}</Text>
            <Text style={headings.h3}>({movie.year})</Text>
        </TouchableOpacity>
    )
}
export default MovieListItem