import React from 'react';
import BusinessSettings from './BusinessSettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BusinessHome from './BusinessHome';
import AnalyticsNavigator from './AnalyticsNavigator'; // Import the Analytics stack navigator
import CreateItem from './CreateItem';
import BussinessProducts from './BussinessProducts';


const Tab = createBottomTabNavigator();

const Business = () => {
  // Mock account information (replace with actual user data)

  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={BusinessHome}/>
      <Tab.Screen name='Analytics' component={AnalyticsNavigator}/>
      <Tab.Screen name='BussinessProducts' component={BussinessProducts}/>
      <Tab.Screen name='CreateItem' component={CreateItem}/>
      <Tab.Screen name='Settings' component={BusinessSettings}/>
    </Tab.Navigator>
  );
};

 export default Business;

