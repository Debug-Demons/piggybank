import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import { getUserData } from '../storage';
const UserHome = () => {
    const data = {username: 'username', email: 'name@mail.com', phoneNumber:'PhoneNumber', balance: '112.27'};


    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          const data = await getUserData();
          if (data) {
            setUserData(data);
          }
          setLoading(false);
        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <ActivityIndicator />;
      }


    return (<View style = {styles.container}>
        <Image style={styles.imageDim} source={require('../../assets/piggyBankLogo.png')}></Image>
        <Text style={styles.headerText}>Welcome to Piggy Bank!</Text>
        <Text style={styles.textItem}>{userData.name.first} {userData.name.last}</Text>
        <Text style={styles.textItem}>{userData.Email}</Text>
        <Text style={styles.textItem}>{userData.phoneNumber}</Text>
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