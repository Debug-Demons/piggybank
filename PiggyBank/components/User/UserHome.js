
import React from 'react';
import {ScrollView, Text, Image, Button, StyleSheet, RefreshControl, Alert} from 'react-native';
const UserHome = React.memo(({navigation, refreshing, onRefresh, data}) => {
  const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
    //const data = {username: 'username', email: 'name@mail.com', phoneNumber:'PhoneNumber', balance: '112.27'};
    //logout logic 
  const handleLogout = async() =>{
    try{
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Logout failed', 'An error occured when logging out. Please Try Again.');
    } finally {
        navigation.replace('Login')
    }
  }

    return (<ScrollView contentContainerStyle = {{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }} 
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Image style={styles.imageDim} source={require('../../assets/piggyBankLogo.png')}></Image>
        <Text style={styles.headerText}>Welcome to Piggy Bank!</Text>
        <Text style={styles.textItem}>{data.Email}</Text>
        <Text style={[styles.balanceText, styles.textItem]}>Loyalty Balance: ${data.loyalty}</Text>
        <Button title="Logout" onPress={handleLogout}/>
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