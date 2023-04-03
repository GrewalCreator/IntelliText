import React from "react";
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';


const TextField = (props) =>  {


    return (
        <TextInput
            multiline={props.multiline}
            maxLength={props.maxLength}
            inputMode={props.inputMode}
            autoCorrect={false}
            style={styles.input}
            placeholder={props.placeholder}
            onChangeText={newText => props.onChangeText(newText)}
            secureTextEntry={props.secure}
        />
    )

}

export default TextField;


const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        textAlign: 'center',
        height: 40,
        width: 350,
        fontSize: 20,
        //fontFamily: 'CasinoFlat',
        color: 'grey',
        marginTop: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
    },
})
