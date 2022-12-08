import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { headings } from '../../styles/headings';
import styles from './styles';

const UpcomingListItem = ({ upcomingMovie }) => {
    return(
        <TouchableOpacity style={styles.item}>
        <Image style={styles.poster} source={{ uri: upcomingMovie.poster }}/>
        <Text style={[headings.h3, styles.title]}>{upcomingMovie.title}</Text>
        <Text style={headings.h3}>({upcomingMovie.year})</Text>
    </TouchableOpacity>
    )
}

export default UpcomingListItem;