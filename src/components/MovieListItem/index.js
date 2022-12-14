import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'
import SmallGenreList from '../SmallGenreList'

const MovieListItem = ({ movie, navigation, cinema }) => {
    const genres = movie?.genres
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Mynd', { movie, cinema })}>
            <Image style={styles.poster} source={{ uri: movie.poster }}/>
            <Text style={[headings.h3, styles.title]}>{movie.title}</Text>
            <Text style={headings.h3}>({movie.year})</Text>
            <SmallGenreList genres={genres}></SmallGenreList>
        </TouchableOpacity>
    )
}

export default MovieListItem
