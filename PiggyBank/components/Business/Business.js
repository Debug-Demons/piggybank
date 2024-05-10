import React from 'react';
import BusinessSettings from './BusinessSettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BusinessHome from './BusinessHome';
import AnalyticsNavigator from './AnalyticsNavigator'; // Import the Analytics stack navigator
import CreateItem from './CreateItem';
import BussinessProducts from './BussinessProducts';


const Tab = createBottomTabNavigator();
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
const Business = ({navigation}) => {
  // Mock account information (replace with actual user data)
  //<Tab.Screen name='CreateItem' component={CreateItem}/>


  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home'>
          {() => <BusinessHome navigation={navigation}/>}
        </Tab.Screen>
      <Tab.Screen name='Analytics' component={AnalyticsNavigator}/>
      <Tab.Screen name='BussinessProducts' component={BussinessProducts}/>
      <Tab.Screen name='Settings' component={BusinessSettings}/>
    </Tab.Navigator>
  );
};

 export default Business;

