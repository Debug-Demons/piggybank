// AnalyticsNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessAnalytics from './BusinessAnalytics';
import OrderDetails from './OrderDetails';
import OrderHistoryPage from './OrderHistoryPage';
import SalesReportingPage from './SalesReportingPage'; // Adjust the import path as needed


const Stack = createNativeStackNavigator();

const AnalyticsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnalyticsOverview" component={BusinessAnalytics} options={{ title: 'Analytics Overview' }} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ title: 'Order Details' }} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryPage} options={{ title: 'Order History' }} />
      <Stack.Screen name="SalesReporting" component={SalesReportingPage} options={{ title: 'Sales Reporting' }} />


    </Stack.Navigator>
  );
};

export default AnalyticsNavigator;
