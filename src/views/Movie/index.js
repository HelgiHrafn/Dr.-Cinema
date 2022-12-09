import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import SmallGenreList from '../../components/SmallGenreList'
import { headings } from '../../styles/headings'
import styles from './styles'
import ShowTimeList from '../../components/ShowTimeList'

const Movie = ({ route }) => {
    const movie = route.params.movie
    const cinema = route.params.cinema
    // console.log("whats cinema", cinema)
    const showTimes = movie.showtimes
    // console.log(showTimes)
    const filteredShowTimes = []

    for (let i = 0; i < showTimes.length; i++) {
    // console.log("how often", showTimes[i].cinema.name)
    // console.log("whats cinema id cienam", showTimes[i].cinema)
        if (showTimes[i].cinema.id == cinema.id) { filteredShowTimes.push(showTimes[i].schedule) }
        if (showTimes[i].cinema == cinema.id) { filteredShowTimes.push(showTimes[i].schedule) }
    }
    const filteredShowTimesFixed = filteredShowTimes[0]
    // console.log("filtered showtimes", filteredShowTimesFixed)

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
                <ShowTimeList showtimes={filteredShowTimesFixed}/>
            </View>
        </View>
    )
}

export default Movie
