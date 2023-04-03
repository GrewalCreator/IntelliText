import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AdminPortal = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>Admin Portal</Text>
        </View>
    )
};

export default AdminPortal;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
