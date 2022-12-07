import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cinemas from '../views/Main'
import Cinema from '../views/Cinema'
import Upcoming from '../views/Upcoming'
import { dark, darker } from '../styles/colors'
//import Movie from '../views/Movie'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Contacts'>
        <Stack.Screen 
            options={{
                headerStyle: {
                    backgroundColor: dark},
                headerTintColor: '#fff',
                headerTitleStyle: 
                {fontWeight: 'bold'}}}
            name ="Cinemas" 
            component={Cinemas}/>
        <Stack.Screen 
            options={{
                headerStyle: {
                    backgroundColor: dark},
                headerTintColor: '#fff',
                headerTitleStyle: 
                {fontWeight: 'bold'}}}
            name ="Cinema" 
            component={Cinema}/>
            {/* <Stack.Screen name ="Movie" component={Movie} /> */}
        <Stack.Screen 
            options={{
                headerStyle: {
                    backgroundColor: '#212f45'},
                headerTintColor: '#fff',
                headerTitleStyle: 
                {fontWeight: 'bold'}}}
            name ="Upcoming" 
            component={Upcoming}/>
          
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
