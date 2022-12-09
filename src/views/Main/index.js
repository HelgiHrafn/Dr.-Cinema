import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CinemaList from '../../components/CinemaList'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getCinemas } from '../../actions/CinemaActions'
import { filterCinemas } from '../../services/CinemaService'
import { headings } from '../../styles/headings'

const Cinemas = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCinemas())
    }, [])
    let cinemas = useSelector(state => state.cinemas)
    cinemas = filterCinemas(cinemas)

    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.buttonBackground} onPress={() => navigation.navigate('Væntanlegt')}>
                <Text style={headings.b1}>Væntanlegar myndir</Text>
            </TouchableOpacity>
            <CinemaList cinemas={cinemas} navigation={navigation}/>
        </View>
    )
}

export default Cinemas
