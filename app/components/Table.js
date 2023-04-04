import React from "react";
import {StyleSheet} from "react-native";
import {DataTable} from "react-native-paper";

const Table = (props) => {
    return(
        <DataTable>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Username</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
                <DataTable.Title>Ban Status</DataTable.Title>
                <DataTable.Title>Access</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>gurtejgrewal455@gmail.com</DataTable.Cell>
                <DataTable.Cell>Online</DataTable.Cell>
                <DataTable.Cell>Not Banned</DataTable.Cell>
                <DataTable.Cell>Dev</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Abdoola@gmail.com</DataTable.Cell>
                <DataTable.Cell>Offline</DataTable.Cell>
                <DataTable.Cell>Not Banned</DataTable.Cell>
                <DataTable.Cell>Admin</DataTable.Cell>
            </DataTable.Row>


            <DataTable.Row>
                <DataTable.Cell>Owen@gmail.com</DataTable.Cell>
                <DataTable.Cell>Offline</DataTable.Cell>
                <DataTable.Cell>Banned</DataTable.Cell>
                <DataTable.Cell>User</DataTable.Cell>
            </DataTable.Row>


        </DataTable>


    )
};

export default Table;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        top: 0,
        padding: 15,
        alignItems: "flex-start",
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});