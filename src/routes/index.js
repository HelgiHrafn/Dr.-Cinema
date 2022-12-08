import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cinemas from '../views/Main'
import Cinema from '../views/Cinema'
import Upcoming from '../views/Upcoming'
import { dark, darker } from '../styles/colors'
import Movie from '../views/Movie'

const Stack = createStackNavigator()

const style = {
    headerStyle: {
        shadowColor: 'transparent',
        backgroundColor: dark},
    headerTintColor: '#fff',
    headerTitleStyle: 
    {fontWeight: 'bold'}}

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Contacts'>
        <Stack.Screen 
            options={style}
            name ="Cinemas" 
            component={Cinemas}/>
        <Stack.Screen 
            options={style}
            name ="Cinema" 
            component={Cinema}/>
        <Stack.Screen options={style} name ="Movie" component={Movie} />
        <Stack.Screen 
            options={style}
            name ="Upcoming" 
            component={Upcoming}/>
          
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
