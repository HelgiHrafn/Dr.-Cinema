import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import CinemaList from '../../components/CinemaList'
import styles from './styles'
import * as apiService from '../../services/CinemaService'
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../actions/CinemaActions'

const Cinemas = ({navigation}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCinemas())
    }, [])
    const cinemas = useSelector(state => state.cinemas)
    
  

    return (
        <View style={styles.main}>
            <CinemaList cinemas={cinemas} navigation={navigation}/>
        </View>
    )
}
export default Cinemas