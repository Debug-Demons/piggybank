 import React, { useState } from 'react';
 import { View, Text, TextInput, Button, Alert, StyleSheet, Switch } from 'react-native';
 import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 import { saveUserData, getUserData } from './storage';
 
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
      setUser(userData);
  
      // Wait for the user data to be fetched and saved locally
      await sendUidToBackend(userData.uid);
  
      // Now that user data is saved, navigate to the home screen
      navigation.replace('User', { user: userData });// Adjust screen name as necessary
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Failed', error.message);
    }
    if(loginType==="USER") {
      navigation.replace('User', { user: userData });// Adjust screen name as necessary
    } else if(loginType==="BUSINESS" && isPOS) {
      navigation.replace('POS', { user: userData });
    } else {
      navigation.replace('Business', { user: userData });
    }
   };
   
 
 
   const sendUidToBackend = async (uid) => {
     try {
       const response = await fetch(`http://localhost:3000/api/customers/${uid}`, {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
         },
       });
       const data = await response.json();
       await saveUserData(data); // Save the data locally
       return data; // Optionally return the data in case you need it immediately
     } catch (error) {
       console.error('Error sending UID to backend:', error);
       throw error; // Rethrow the error to handle it in the calling function
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
 