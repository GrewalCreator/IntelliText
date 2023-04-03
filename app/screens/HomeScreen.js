import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginScreen from "./LoginScreen";

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Button title = "Logout" onPress={()=>navigation.navigate('Login')}></Button>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
