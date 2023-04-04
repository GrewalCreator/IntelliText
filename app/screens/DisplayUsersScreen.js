import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Table from '../components/Table';
const DisplayUsersScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Table/>
        </View>
    )
};

export default DisplayUsersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});