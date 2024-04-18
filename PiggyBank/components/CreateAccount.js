import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3000/create'; // Replace with your actual API endpoint

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [businessId, setBusinessId] = useState('')
  const [isBusiness, setIsBusiness] = useState(false);
  const toggleSwitch = () => setIsBusiness(previousState => !previousState);

  const handleRegister = async () => {
    if(password != passwordConfirmation) {
        Alert.alert('Password fields do not match, please confirm your password.')
        return;
    }
    if((isBusiness && businessId==='') || email==='' || password==='') {
      Alert.alert('Empty Fields')
      return;
    }
    
    try {
      const response = await axios.post(`${API_URL}`, {
        email,
        password,
        businessId,
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
      <View style={styles.switch}>
        <Text>Create a Business Account</Text>
        <Switch onValueChange={toggleSwitch} value={isBusiness}/>
      </View>
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
      {isBusiness && (
        <View style={styles.businessBox}>
          <Text>Enter your business ID here.</Text>
          <TextInput
            style={styles.input}
            placeholder="Business ID"
            value={businessId}
            onChangeText={(text) => setBusinessId(text)}
          />
        </View>
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
  },
  businessBox: {
    width: '100%',
  },
});

export default CreateAccount;
