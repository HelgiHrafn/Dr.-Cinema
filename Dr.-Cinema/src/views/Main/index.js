import React from 'react'
import { View } from 'react-native'
import CinemaList from '../../components/CinemaList'
import styles from './styles'

const cinemas = [
    {
        "id": 1,
        "name": "Smárabíó",
        "address\t": "Smáralind",
        "city": "201 Kópavogur",
        "phone": "564-0000",
        "website": "www.smarabio.is",
        "description": "Smárabíó er eitt fullkomnasta kvikmyndahús landsins.<br><br>\n\nBíóið er með 5 sali og tekur rúmlega 1.000 manns í sæti..\n<br><br><b>\n",
        "google_map": ""
    },
    {
        "id": 2,
        "name": "Háskólabíó",
        "address\t": "Hagatorgi",
        "city": "107 Reykjavík",
        "phone": "530-1919",
        "website": "www.haskolabio.is",
        "description": "Í Háskólabíó eru 7 misstórir fyrirlestrarsalir sérhannaðir fyrir fundi og fyrirlestra, sá minnsti 23 sæta og sá stærsti 970 sæta, samtals 1891 sæti.\n\nÍ öllum sölunum eru þægilegir stólar, í sumum felliborð og hallandi gólf og veitir það þátttakendum bestu aðstæður til að fylgjast með fyrirlesurum og myndefni á tjaldi. Auk þess er möguleiki á að bæta við fundaaðstöðu í öðrum byggingum Háskólans á svæðinu.\n\nGott aðgengi er fyrir fatlaða í öllu húsinu. 700 bílastæði eru umhverfis húsið.\n\n<br><br><b>\n\n",
        "google_map": ""
    }]
const Cinemas = () => {
    return (
        <View style={styles.main}>
            <CinemaList cinemas={cinemas}/>
        </View>
    )
}
export default Cinemas