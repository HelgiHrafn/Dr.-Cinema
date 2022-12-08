import React, { useEffect } from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import CinemaList from '../../components/CinemaList';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../actions/CinemaActions';

const Cinemas = ({navigation}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCinemas())
    }, [])
    const cinemas = useSelector(state => state.cinemas)

    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.buttonBackground}>
                <Button
                title="Upcoming Movies"
                onPress={() => navigation.navigate("Upcoming")}
                style={styles.button}/>
            </TouchableOpacity>
            <CinemaList cinemas={cinemas} navigation={navigation}/>
        </View>
    )
}

export default Cinemas;