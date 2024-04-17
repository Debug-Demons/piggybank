import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3000/create'; // Replace with your actual API endpoint

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [businessId, setBusinessId] = useState('')

  const handleRegister = async () => {
    if(password != passwordConfirmation) {
        Alert.alert('Password fields do not match, please confirm your password.')
        return;
    }
    try {
      const response = await axios.post(`${API_URL}`, {
        email,
        password,
        name,
        phoneNumber,
        address
        //businessId,
      });

      if (response.data.success) {
        Alert.alert('Registration Successful', 'Account created successfully');
        navigation.goBack(); // Navigate back to the login screen after successful registration
      } else {
        Alert.alert('Registration Failed', response.data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Registration Failed', 'An error occurred during registration');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType='email-address'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={passwordConfirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone-Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
      style={styles.input}
      placeholder="Address"
      value={address}
      onChangeText={(text) => setAddress(text)}
      />
      {/* <Text>Are you part of a business? Enter your business ID here.</Text>
      <TextInput
        style={styles.input}
        placeholder="Business ID"
        value={businessId}
        onChangeText={(text) => setBusinessId(text)}
      /> */}
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
});

export default CreateAccount;
