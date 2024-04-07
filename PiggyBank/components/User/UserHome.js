import React from 'react';
import {ScrollView, Text, Image, StyleSheet, RefreshControl} from 'react-native';

const UserHome = React.memo(({refreshing, onRefresh, data}) => {
    return (<ScrollView contentContainerStyle = {{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }} 
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Image style={styles.imageDim} source={require('../../assets/piggyBankLogo.png')}></Image>
        <Text style={styles.headerText}>Welcome to Piggy Bank!</Text>
        <Text style={styles.textItem}>{data.username}</Text>
        <Text style={styles.textItem}>{data.email}</Text>
        <Text style={styles.textItem}>{data.phoneNumber}</Text>
        <Text style={[styles.balanceText, styles.textItem]}>Current Balance: ${data.balance}</Text>
    </ScrollView>);
});

const styles = StyleSheet.create({
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