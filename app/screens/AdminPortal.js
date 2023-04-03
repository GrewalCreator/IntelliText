import React from "react";
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {LinearGradient} from "expo-linear-gradient";
import HomeScreen from "./HomeScreen";
import DisplayUsersScreen from "./DisplayUsersScreen";

const AdminPortal = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#560173', '#162091']}
            style={styles.container}
            start = {{x:0,y:0}}
            end={{x:1, y:1}}>

            <Text style={styles.setFontSizeLargest}>Admin Portal</Text>

            <Pressable style = {styles.buttonHome} onPress={()=>{navigation.navigate('Home')}}>
                <Text style = {styles.text}>Home</Text>
            </Pressable>

            <Pressable style = {styles.buttonUser} onPress={()=>{navigation.navigate('DisplayUsers')}}>
                <Text style = {styles.text}>User</Text>
            </Pressable>

        </LinearGradient>

    )
};

export default AdminPortal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonHome: {
        position: 'absolute',
        shadowRadius: 5,
        left: '10%',
        top: '40%',
        width: '30%',
        height: '20%',
        backgroundColor: '#d6dee9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonUser: {
        position: 'absolute',
        shadowRadius: 5,
        left: '60%',
        top: '40%',
        width: '30%',
        height: '20%',
        backgroundColor: '#d6dee9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    text:{
        fontSize: 40,
        lineHeight: 50,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    setFontSizeLargest:{
        flex: 1,
        fontSize: 70,
        fontWeight: 'bold',
        //fontFamily: 'Casino3D',
        marginTop: 50,
    },
});
// Home
// Active vs Inactive users list

