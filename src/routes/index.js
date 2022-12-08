import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { dark } from '../styles/colors';
import Cinemas from '../views/Main';
import Cinema from '../views/Cinema';
import Upcoming from '../views/Upcoming';
import UpcomingMovie from '../views/UpcomingMovie';
import Movie from '../views/Movie';

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
        <Stack.Screen 
            options={style} 
            name ="Movie" 
            component={Movie} />
        <Stack.Screen 
            options={style}
            name ="Upcoming" 
            component={Upcoming}/> 
        <Stack.Screen 
            options={style}
            name ="UpcomingMovie" 
            component={UpcomingMovie}/> 
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;
