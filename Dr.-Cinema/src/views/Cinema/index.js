import React from 'react'
import { View, Text } from 'react-native'
import { headings } from '../../styles/headings'
import styles from './styles'

const Cinema = () => {
    const cinema = {
        "id": 1,
        "name": "Smárabíó",
        "address\t": "Smáralind",
        "city": "201 Kópavogur",
        "phone": "564-0000",
        "website": "www.smarabio.is",
        "description": "Smárabíó er eitt fullkomnasta kvikmyndahús landsins.<br><br>\n\nBíóið er með 5 sali og tekur rúmlega 1.000 manns í sæti..\n<br><br><b>\n",
        "google_map": ""
    }

    return (
        <View style={styles.main}>
            <Text style={headings.h1}>{cinema.name}</Text>
            <Text style={headings.h3}>{cinema.description}</Text>
            <View>
                <Text style={headings.h3}>{cinema['address\t']}</Text>
                <Text style={headings.h3}>{cinema.city}</Text>
            </View>
            <Text style={headings.h3}>{cinema.phone}</Text>
            <Text style={headings.h3}>{cinema.website}</Text>
        </View>
    )
}
export default Cinema