import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const Movie = ({navigation, route}) => {
    const movie = route.params.movie

return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={headings.h1}>{movie.title}</Text>
            <Image style={styles.poster} source={{ uri: movie.poster }}/>
            <Text style={headings.h2}>{movie.year}</Text>
            <Text style={headings.h2}>lengd: {movie.durationMinutes} mín</Text>
            <ScrollView style={styles.description}>
                <Text style={headings.h3}>{movie.plot}</Text>
            </ScrollView>
        </View>
        
        
        
    </View>
)

}
export default Movie