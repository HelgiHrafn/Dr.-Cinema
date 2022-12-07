import React, {useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { getMovies } from '../../actions/MovieActions'
import { headings } from '../../styles/headings'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../../components/MovieList'

const Cinema = ({ navigation, route }) => {
    const cinema = route.params.cinema
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMovies())
    }, [])
    const movies = useSelector(state => state.movies)
    

    return (
        <View style={styles.main}>
            <View style={styles.about}>
                <Text style={headings.h1}>{cinema.name}</Text>
                <ScrollView style={styles.description}>
                    <Text style={headings.h3}>{cinema.description}</Text>
                </ScrollView>
                
                
            </View>
            <View style={styles.info}>
                <Text style={headings.h3}>{cinema['address\t']}</Text>
                <Text style={headings.h3}>{cinema.city}</Text>
                <Text style={headings.h3}>Sími: {cinema.phone}</Text>
                <Text style={headings.h3}>Heimasíða: {cinema.website}</Text>
            </View>
            
            <MovieList cinema={cinema} style={styles.movieList} movies={movies} navigation={navigation}></MovieList>
        </View>
    )
}
export default Cinema