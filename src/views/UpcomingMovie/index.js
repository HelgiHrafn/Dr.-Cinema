import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { headings } from '../../styles/headings';
import styles from './styles';
import SmallGenreList from '../../components/SmallGenreList';

const UpcomingMovie = ({ route }) => {
    const upcomingMovie = route.params.upcomingMovie

return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={headings.h1}>{upcomingMovie.title}</Text>
            <Image style={styles.poster} source={{ uri: upcomingMovie.poster }}/>
            <Text style={headings.h2}>{upcomingMovie["release-dateIS"]}</Text>
            <SmallGenreList genres={upcomingMovie.genres}></SmallGenreList>
            <ScrollView style={styles.description}>
                <Text style={headings.h3}>{upcomingMovie.plot}</Text>
            </ScrollView>
        </View>
        
        
        
    </View>
)

}
export default UpcomingMovie;