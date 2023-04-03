import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginScreen from "./app/screens/LoginScreen";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import HomeScreen from "./app/screens/HomeScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {enableScreens} from "react-native-screens";
enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = ()  => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen options= {{headerLargeTitle: false}} name='Home' component={HomeScreen} />
                <Stack.Screen name='Registration' component={RegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;



