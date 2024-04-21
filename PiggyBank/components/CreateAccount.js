import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { saveUserData } from './storage';
const baseURL = process.env.EXPO_PUBLIC__URL_API;
const API_URL_CUSTOMERS = baseURL +'api/customers/create';
const API_URL_BUSINESS  = baseURL +'api/business/create';

const LINK_BUSINESS = 'Business'
const LINK_USER = 'User'

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const [isBusiness, setIsBusiness] = useState(false);
  const toggleSwitch = () => setIsBusiness(previousState => !previousState);

  // Common fields
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Customer specific fields
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Business specific fields
  const [businessType, setBusinessType] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  const handleRegister = async () => {
    if (password !== passwordConfirmation) {
      Alert.alert('Password fields do not match, please confirm your password.');
      return;
    }
    //conditional statment for which url to send the data to
    const API_URL = isBusiness ? API_URL_BUSINESS : API_URL_CUSTOMERS;
    const NAV_LINK = isBusiness ? LINK_BUSINESS: LINK_USER;
    const body = isBusiness ? {
      email, password, businessType, name, address, phoneNumber
    } : {
      email, password, dateOfBirth: dateOfBirth.toISOString().split('T')[0], name, address, phoneNumber
    };

    try {
      const response = await axios.post(API_URL, body);
      if (response.status === 201) {
        saveUserData({ uid: response.data.uid });
        Alert.alert('Registration Successful', 'Account created successfully');
        navigation.replace(NAV_LINK);
      } else {
        Alert.alert('Registration Failed', response.data.message || 'An error occurred');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error status code:', error.response.status);
        console.error('Error details:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Account</Text>
      <View style={styles.switch}>
        <Text>Create a Business Account</Text>
        <Switch onValueChange={toggleSwitch} value={isBusiness}/>
      </View>
      <TextInput style={styles.input} placeholder="Email" keyboardType='email-address' value={email} autoCapitalize="none" onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} autoCapitalize="none" onChangeText={setPassword}/>
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={passwordConfirmation} autoCapitalize="none" onChangeText={setPasswordConfirmation}/>
      <TextInput style={styles.input} placeholder="Name" value={name} autoCapitalize="none" onChangeText={setName}/>
      <TextInput style={styles.input} placeholder="Address" value={address} autoCapitalize="none" onChangeText={setAddress}/>
      <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} autoCapitalize="none" onChangeText={setPhoneNumber}/>
      {isBusiness ? (
        <TextInput style={styles.input} placeholder="Business Type" value={businessType} autoCapitalize="none" onChangeText={setBusinessType}/>
      ) : (
        <>
          <Text>Date of Birth:</Text>
          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateOfBirth}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </>
      )}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  switch: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});

export default CreateAccount;
