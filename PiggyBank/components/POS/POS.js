import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import PosHome from './PosHome';
import CheckOut from './CheckOut';
import { CartProvider } from './CartContext';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const Tab = createBottomTabNavigator();

const POS = ({navigation}) => {
  return (
    <CartProvider>
      <Tab.Navigator>
        <Tab.Screen name="POS Home">
          {() => <PosHome navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Checkout" component={CheckOut} />
      </Tab.Navigator>
    </CartProvider>
  );
};

export default POS;





