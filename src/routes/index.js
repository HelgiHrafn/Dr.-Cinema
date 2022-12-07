import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cinemas from '../views/Main'
import Cinema from '../views/Cinema'
import { dark, darker } from '../styles/colors'
//import Movie from '../views/Movie'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Contacts'>
        <Stack.Screen 
            options={{
                headerStyle: {
                    shadowColor: 'transparent',
                    backgroundColor: dark},
                headerTintColor: '#fff',
                headerTitleStyle: 
                {fontWeight: 'bold'}}}
            name ="Cinemas" 
            component={Cinemas}/>
        <Stack.Screen 
            options={{
                headerStyle: {
                    shadowColor: 'transparent',
                    backgroundColor: dark},
                headerTintColor: '#fff',
                headerTitleStyle: 
                {fontWeight: 'bold'}}}
            name ="Cinema" 
            component={Cinema}/>
            {/* <Stack.Screen name ="Movie" component={Movie} /> */}
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
