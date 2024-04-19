import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { saveUserData, getUserData } from './storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); //state variable to hold user data.
  const [loginType, setLoginType] = useState('USER');
  const [isPOS, setIsPOS] = useState(true);
  const toggleSwitch = () => setIsPOS(previousState => !previousState);

  

  //Handle the login of customer Users.
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, username, password);
      const userData = response.user;
      
      // Determine the collection based on loginType
      const collectionName = loginType === 'BUSINESS' ? 'Business' : 'Customers';
  
      // Fetch user details from the appropriate collection
      let userDetail;
      console.log(userData.uid);
      if (collectionName === 'Business') {
        userDetail = await sendUidToBackendBusiness(userData.uid);
      } else {
        userDetail = await sendUidToBackendCustomer(userData.uid);
      }
      
      // Save user details in state
      setUser(userDetail);
  
      // Navigate based on loginType and possibly the POS switch
      if (loginType === "USER") {
        navigation.replace('User', { user: userDetail });
      } else if (loginType === "BUSINESS" && isPOS) {
        navigation.replace('POS', { user: userDetail });
      } else {
        navigation.replace('Business', { user: userDetail });
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Failed', error.message);
    }
  };
  

  
 const sendUidToBackendBusiness  = async (uid) =>{
   try{
     console.log(uid);
     const response = await axios.get(`http://localhost:3000/api/business/${uid}`);
     const data = response.data;
     await saveUserData(data); // Save the data locally
     return data;
   }catch(error){
     console.error('Error sending UID to backend:', error);
     throw error;
   }
 }

  const sendUidToBackendCustomer = async (uid) => {
   try {
     const response = await axios.get(`http://localhost:3000/api/customers/${uid}`);
     const data = response.data;
     await saveUserData(data); // Save the data locally
     return data;
   } catch (error) {
     console.error('Error sending UID to backend:', error);
     throw error;
   }
 };
 






  return (
    <View style={styles.container}>
      <Text style={styles.title}>{loginType==="USER" ? "User Login" : "Business Login"}</Text>
      <Button title={loginType==='USER' ? "Business Login" : "User Login"} onPress={() => loginType==="USER" ? setLoginType("BUSINESS") : setLoginType("USER")}/>
      {loginType==="BUSINESS" &&(
       <View style={styles.switch}>
         <Text style={styles.subtitle}>Admin Home </Text>
         <Switch onValueChange={toggleSwitch} value={isPOS}/>
         <Text style={styles.subtitle}> POS Home</Text>
       </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create New Account" onPress={() => navigation.navigate('Create Account')} />

     {/* Remove the following code after done with APIs */}
      <Button title="DEV business landing" onPress={() => navigation.replace('Business')} />
      <Button title="DEV POS landing" onPress={() => navigation.replace('POS')} />
      <Button title="DEV user landing" onPress={() => navigation.replace('User')} />
      {/*  */}
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
    fontSize: 28,
    marginBottom: 16,
  },
  subtitle: {
   fontSize: 24,
   marginBottom: 10,
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
   justifyContent: 'space-between'
  },
});

export default LoginScreen;