import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint

const LoginScreen = ({ navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('User');
  const [buttonText, setButtonText] = useState('Need to Login as a Business?');

  const handleLogin = async () => {
    //TEST HOMEPAGE
    navigation.navigate('Home', {username})
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
        userType,
      });

      if (response.data.success || true) { //TEST LOGIN
        if (userType == 'User') {
          navigation.navigate('Home', { username });
        } else if (userType == 'Business') {
          navigation.navigate('Home', { username });
        }
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Failed', 'An error occurred during login');
    }
  };

  const switchUser = () => {
    if (userType == 'User') {
      setUserType('Business');
    } else {
      setUserType('User');
    }
    if (buttonText == 'Need to Login as a Business?') {
      setButtonText('Need to Login as a User?');
    } else {
      setButtonText('Need to Login as a Business?')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login {userType}</Text>
      <Button title={buttonText} onPress={switchUser} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;