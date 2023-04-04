import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text, StyleSheet, Pressable} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import TextField from '../components/TextField'
import {verify} from '../scripts/verifyLogin.js'
const LoginScreen = ({navigation}) => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (

        <LinearGradient
            colors={['#560173', '#162091']}
            style={styles.container}
            start = {{x:0,y:0}}
            end={{x:1, y:1}}>

            <Text style={styles.setFontSizeLargest}>Login</Text>

            <TextField
            maxLength = {35}
            inputMode = {"email"}
            placeholder = {"Username"}
            multiLine = {false}
            secure = {false}
            onChangeText = {onChangeUsername}
            />

            <TextField
                maxLength = {35}
                inputMode = {"text"}
                placeholder = {"Password"}
                multiLine = {false}
                secure = {true}
                onChangeText = {onChangePassword}
            />

            <Pressable onPress={() => navigation.navigate("Registration")}>
                <Text style = {styles.register}>Don't Have An Account? Register Now!</Text>
            </Pressable>


            {/*TODO: Removed For Testing*/}
            <Pressable style = {styles.loginButton} onPress={() => verify(username, password, navigation)}>
                <Text style = {styles.text}>Log In</Text>
            </Pressable>

            {/*<Pressable style = {styles.loginButton} onPress={() => verify("gurtejgrewal455@gmail.com", "2406FinalProject", navigation)}>
                <Text style = {styles.text}>Log In</Text>
            </Pressable>*/}

            <StatusBar style="auto" />
        </LinearGradient>


    );
};

export default LoginScreen;

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    setFontSizeLargest:{
        fontSize: 85,
        color: 'white',
        fontWeight: 'bold',
        //fontFamily: 'Casino3D',
        marginTop: 100
    },
    loginButton:{
        marginTop: 240,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    register: {
        marginTop: 10,
        color: '#ADD8E6',
    }
});