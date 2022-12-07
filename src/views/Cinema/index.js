import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
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
            <Text style={headings.h1}>{cinema.name}</Text>
            <Text style={headings.h3}>{cinema.description}</Text>
            <View>
                <Text style={headings.h3}>{cinema['address\t']}</Text>
                <Text style={headings.h3}>{cinema.city}</Text>
            </View>
            <Text style={headings.h3}>{cinema.phone}</Text>
            <Text style={headings.h3}>{cinema.website}</Text>
            <MovieList movies={movies}></MovieList>
        </View>
    )
}
export default Cinema