import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import GenreItem from '../GenreItem'
import { getGenres } from '../../actions/GenreActions'
import { useDispatch, useSelector } from 'react-redux'

const SmallGenreList = ({ genres }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGenres())
    }, [])
    const allGenres = useSelector(state => state.genres)

    if (!isNaN(genres[0])) {
        const newGenres = genres
        for (let i = 0; i < newGenres.length; i++) {
            for (let j = 0; j < allGenres.length; j++) {
                if (newGenres[i] == allGenres[j].ID) {
                    newGenres[i] = { Name: allGenres[j].Name }
                }
            }
        }
    }

    return (
        <View style={styles.list}>
            <FlatList
                style={styles.flatlist}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={genres}
                renderItem={({ item }) => {
                    return (
                        <GenreItem genre={item}></GenreItem>
                    )
                }}
                listKey={genres[0]}
            />
        </View>)
}
export default SmallGenreList
