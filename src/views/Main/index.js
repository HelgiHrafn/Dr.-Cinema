import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import CinemaList from '../../components/CinemaList'
import styles from './styles'
import * as apiService from '../../services/apiService'



const Cinemas = () => {

    const [cinemas, setCinemas] = useState([])

    useEffect(()=>{
        getCinemas()
    }, [])

    const getCinemas = async () => {
        const cinemas = await apiService.getTheaters()
        setCinemas(cinemas)
    }

    return (
        <View style={styles.main}>
            <CinemaList cinemas={cinemas}/>
        </View>
    )
}
export default Cinemas