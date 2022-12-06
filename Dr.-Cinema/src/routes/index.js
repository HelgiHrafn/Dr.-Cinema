import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cinemas from '../views/Main'


const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Contacts'>
            <Stack.Screen name ="Cinemas" component={Cinemas} />
            <Stack.Screen name ="Cinema" component={Cinema} />
            <Stack.Screen name ="Movie" component={Movie} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
