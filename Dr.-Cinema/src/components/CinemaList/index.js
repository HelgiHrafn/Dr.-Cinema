import React,  { useEffect } from 'react'; 
import { View, FlatList } from 'react-native';
import styles from './styles';
import CinemaListItem from '../CinemaListItem';
import { useDispatch } from 'react-redux';
import { getCurrentDegree } from '../../actions/weatherActions';


const CinemaList = ({cinemas}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentDegree());
    }, []);

    return(

    <View style={styles.list}>
        <FlatList
            numColumns={1}
            data={cinemas.sort((a, b) => a.name.localeCompare(b.name))}
            renderItem={({item}) => {
                return (
                    <CinemaListItem
                        cinema={item} />
                )
            }}   
            />
    </View>)
}
export default CinemaList