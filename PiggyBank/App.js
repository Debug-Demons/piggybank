import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import Business from './components/Business/Business';
import User from './components/User/User';
import CreateAccount from './components/CreateAccount';
import { firebaseConfig } from './firebase';
import POS from './components/POS/POS';
import ItemEdit from './components/Business/ItemEdit';
import CreateItem from './components/Business/CreateItem';
//import PosHome from './components/POS/PosHome';


const Stack = createStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Business" component={Business} />
        <Stack.Screen name="POS" component={POS} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
        <Stack.Screen name="ItemEdit" component={ItemEdit} options={{ title: 'Edit Item' }} />
        <Stack.Screen name='CreateItem' component={CreateItem}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
