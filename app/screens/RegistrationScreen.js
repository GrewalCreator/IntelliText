import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import TextField from "../components/TextField";
import {StatusBar} from "expo-status-bar";
import {LinearGradient} from "expo-linear-gradient";
import {register} from '../backend/registerAccount.js'

const RegistrationScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <LinearGradient
            colors={['#162091', '#560173']}
            style={styles.container}
            start = {{x:0,y:0}}
            end={{x:1, y:1}}>

            <Text style={styles.setFontSizeLargest}>Register</Text>

            <TextField
                maxLength = {35}
                inputMode = {"email"}
                placeholder = {"Email"}
                multiLine = {false}
                secure = {false}
                onChangeText = {onChangeEmail}
            />

            <TextField
                maxLength = {35}
                inputMode = {"text"}
                placeholder = {"Password"}
                multiLine = {false}
                secure = {true}
                onChangeText = {onChangePassword}
            />


            <Pressable style = {styles.loginButton} onPress={() => register(email, password, navigation)}>
                <Text style = {styles.text}>Register Now</Text>
            </Pressable>

            <StatusBar style="auto" />
        </LinearGradient>
    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    setFontSizeLargest:{
        fontSize: 85,
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