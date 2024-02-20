import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserHome = () => {
    const data = {username: 'username', email: 'name@mail.com', phoneNumber:'PhoneNumber', balance: '112.27'};
    return (<View style = {styles.container}>
        <Image style={styles.imageDim} source={require('../../assets/piggyBankLogo.png')}></Image>
        <Text style={styles.headerText}>Welcome to Piggy Bank!</Text>
        <Text style={styles.textItem}>{data.username}</Text>
        <Text style={styles.textItem}>{data.email}</Text>
        <Text style={styles.textItem}>{data.phoneNumber}</Text>
        <Text style={[styles.balanceText, styles.textItem]}>Current Balance: ${data.balance}</Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 15,
    },
    textItem: {
        fontSize: 16,
        marginBottom: 5,
    },
    balanceText: {
        fontWeight: 'bold',
        marginTop: 10
    },
    imageDim: {
        width: 150,
        height: 150,
        marginBottom: 50,
    }
})

export default UserHome;