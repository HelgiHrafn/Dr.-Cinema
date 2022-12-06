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
    },
    {
        "id": 3,
        "name": "Borgarbíó",
        "address\t": "Hólabraut 12",
        "city": "600 Akureyri",
        "phone": "462-2602",
        "website": "www.borgarbio.is",
        "description": "Borgarbíó Akureyri er búið 2 kvikmyndasölum og tekur rúmlega 300 manns í sæti, en við það vinnur á annan tug manns. Kvikmyndahúsið er eitt fárra frumsýningabíóa utan höfuðborgarinnar og var stofnað fyrir miðja síðustu öld og er því líklega eitt elsta kvikmyndahús á landinu.<br><br>Kvikmyndahúsið hefur verið leiðandi meðal kvikmyndahúsa á landsbyggðinni, enda var það lengi vel eina fjölsala-kvikmyndahúsið utan Reykjavíkur og einnig það stærsta. <br><br><b><br>",
        "google_map": ""
    },
    {
        "id": 4,
        "name": "Laugarásbíó",
        "address\t": "Laugarási",
        "city": "104 Reykjavík",
        "phone": "553-2075",
        "website": "www.laugarasbio.is",
        "description": "",
        "google_map": "<iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=laugar%C3%A1sb%C3%AD%C3%B3&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=37.871902,70.839844&amp;ie=UTF8&amp;hq=laugar%C3%A1sb%C3%AD%C3%B3&amp;hnear=&amp;radius=15000&amp;ll=64.148181,-21.867099&amp;spn=0.138764,0.160226&amp;t=m&amp;output=embed\"></iframe><br /><small><a href=\"http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=laugar%C3%A1sb%C3%AD%C3%B3&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=37.871902,70.839844&amp;ie=UTF8&amp;hq=laugar%C3%A1sb%C3%AD%C3%B3&amp;hnear=&amp;radius=15000&amp;ll=64.148181,-21.867099&amp;spn=0.138764,0.160226&amp;t=m\" style=\"color:#0000FF;text-align:left\">View Larger Map</a></small>"
    },
    {
        "id": 5,
        "name": "Bíó Paradís",
        "address\t": "Hverfisgötu 54",
        "city": "Reykjavík",
        "phone": null,
        "website": "bioparadis.is",
        "description": null,
        "google_map": ""
    },
    {
        "id": 6,
        "name": "Álfabakki",
        "address\t": "Álfabakka",
        "city": "109 Reykjavík",
        "phone": "575-8900",
        "website": "www.sambioin.is",
        "description": "Sambíóin álfabakka var byggt árið 1982 og er eitt fullkomnasta kvikmyndahús landsins.\nBíóið var fyrsta kvikmyndahúsið á norðurlöndum sem var búið THX kerfinu. Sambíóin álfabakkka er í dag búið 6 kvikmyndasölum, þetta var fyrsta kvikmyndahúsið sem bauð upp á lúxus VIP sal, en sá salur er búinn þægilegum rafdrifnum sætum, sá salur var vígður í ágúst árið 2001.<br><br>",
        "google_map": ""
    },
    {
        "id": 7,
        "name": "Kringlubíó",
        "address\t": "Kringlunni 4-6",
        "city": "103 Reykjavík",
        "phone": "575-8900",
        "website": "www.sambioin.is",
        "description": "Sambíóin Kringlunni var opnað árið 1996.\r\n\r\nÞað var fyrsta kvikmyndahúsið á íslandi sem bauð uppá THX hljóðkerfi í öllum sölum. Sambíóin Kringlunni er fyrsta kvikmyndahúsið á Íslandi sem býður uppá digital bíósýningar.",
        "google_map": ""
    },
    {
        "id": 8,
        "name": "Sambíóin Egilshöll",
        "address\t": "Egilshöll",
        "city": "Reykjavík",
        "phone": "575-8900",
        "website": "www.sambio.is",
        "description": null,
        "google_map": ""
    },
    {
        "id": 9,
        "name": "Sambíóin, Akureyri",
        "address\t": "Ráðhústorgi 8",
        "city": "600 Akureyri",
        "phone": "461-4666",
        "website": "www.sambioin.is",
        "description": "Sambíóin á Akureyri hafa yfir tveimur sýningarsölum að ráða. A salur tekur 211 manns í sæti en B salur 98 manns. Kvikmyndahúsið er glæsilega útbúið og hefur verið mikið endurnýjað frá því sem var hér á árum áður þegar Akureyringar þekktu það helst undir nafninu Nýja bíó. Húsið var reist árið 1929 og rekið undir Nafninu NýjaBío Til fjölda ára Rekstri Kvikmyndahús var síðan hætt og Síðar tók við nýr rekstur í húsinu en þá var settur á lagginar skemmtistaðurinn 1929 en þema skemmtistaðarins var allt tengt kvikmyndum og var einn vinsælasti skemmtistaður landsins í mörg ár og spiluðu það margar af stærstu hljómsveitum landsins árið 1995 brann svo húsið og öllum rekstri hætt En árið í nóvember 1998  var Bíóið opnað almenningi aftur og þá auðvitað undir nafninu Nýja bíó.\r\n",
        "google_map": ""
    },
    {
        "id": 10,
        "name": "Sambíóin, Selfossi",
        "address\t": "Eyrarvegi 2",
        "city": "800 Selfoss",
        "phone": "575-8900",
        "website": "www.sambion.is",
        "description": "Sambíóin Selfossi var opnað 11.des 2004.  Bíóið bíður upp á tvo sali, ný og þægileg sæti með gott rými fyrir fætur og góðan halla á milli sætaraða. Hljóðkerfið er í  Dolby Digital gæðum og allar þær kröfur sem THX staðallinn gerir, enda stillt með THX tækjum.\r\n\r\nUpphaflega hét bíóið Selfossbíó en Sambíóin keyptu það í ágúst 2007.",
        "google_map": ""
    },
    {
        "id": 11,
        "name": "Sambíóin, Keflavík",
        "address\t": "Hafnargötu 33",
        "city": "230 Keflavík",
        "phone": "421-1170",
        "website": "www.sambioin.is",
        "description": "\r\nSambíóin Keflavík voru fyrsta Sambíóið , það var byggt árið 1941 af Eyjólfi Ásberg. Sambíóin keflavík er búið 2 sölum. Salur eitt var endurreistur árið 1998 og salur 2 var byggður 2001",
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