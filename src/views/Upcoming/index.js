import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import UpcomingList from '../../components/UpcomingList'
import styles from './styles'
// import * as apiService from '../../services/CinemaService'
import { useDispatch, useSelector } from 'react-redux';
import { getUpcoming } from '../../actions/upcomingActions'

const Upcoming = ({navigation}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUpcoming())
    }, [])
    const upcoming = useSelector(state => state.upcoming)
    console.log(upcoming)
  

    return (
        <View style={styles.main}>
            <UpcomingList upcoming={upcoming} navigation={navigation}/>
        </View>
    )
}
export default Upcoming