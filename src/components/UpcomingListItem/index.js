import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'
import SmallGenreList from '../SmallGenreList'

const UpcomingListItem = ({ upcomingMovie, navigation }) => {
    const genres = upcomingMovie?.genres

    if (upcomingMovie.poster == 'https://kvikmyndir.is/images/poster/') {
        upcomingMovie.poster = 'https://i.ibb.co/VWhtmZP/no-img-available.jpg'
    }
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Væntanleg Mynd', { upcomingMovie })}>
            <Image style={styles.poster} source={{ uri: upcomingMovie.poster }}/>
            <Text style={[headings.h3, styles.title]}>{upcomingMovie.title}</Text>
            <Text style={headings.h3}>({upcomingMovie['release-dateIS']})</Text>
            <SmallGenreList genres={genres}></SmallGenreList>
        </TouchableOpacity>
    )
}

export default UpcomingListItem
