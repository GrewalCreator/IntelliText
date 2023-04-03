import React from "react";
import {StyleSheet, Text, View} from "react-native";

const DisplayUsersScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text>Hello</Text>
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