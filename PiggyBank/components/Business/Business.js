import React from 'react';
import BusinessAnalytics from './BusinessAnalytics';
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

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BusinessHome from './BusinessHome';
// import BusinessSettings from './BusinessSettings';
// import AnalyticsPage from './AnalyticsPage'; // Your analytics overview component
// import OrderDetails from './OrderDetails'; // The detailed order view component

// // Create the stack navigator for the Analytics section
// const AnalyticsStack = createNativeStackNavigator();

// function AnalyticsNavigator() {
//   return (
//     <AnalyticsStack.Navigator>
//       <AnalyticsStack.Screen name="AnalyticsPage" component={AnalyticsPage} options={{ title: 'Analytics' }} />
//       <AnalyticsStack.Screen name="OrderDetails" component={OrderDetails} options={{ title: 'Order Details' }} />
//     </AnalyticsStack.Navigator>
//   );
// }

// // Create the bottom tab navigator
// const Tab = createBottomTabNavigator();

// function Business() {
//   return (
//     <Tab.Navigator initialRouteName='Home'>
//       <Tab.Screen name='Home' component={BusinessHome}/>
//       <Tab.Screen name='Analytics' component={AnalyticsNavigator}/> // Use AnalyticsNavigator here
//       <Tab.Screen name='Settings' component={BusinessSettings}/>
//     </Tab.Navigator>
//   );
// }

// export default Business;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BusinessHome from './BusinessHome';
// import BusinessSettings from './BusinessSettings';
// import BusinessAnalytics from './BusinessAnalytics'; // Assuming this is your main Analytics component
// import OrderDetails from './OrderDetails'; // Detailed view component

// // Setup the stack navigator for the Analytics section
// const AnalyticsStack = createNativeStackNavigator();
// function AnalyticsNavigator() {
//   return (
//     <AnalyticsStack.Navigator>
//       <AnalyticsStack.Screen name="BusinessAnalytics" component={BusinessAnalytics} options={{ title: 'Analytics' }} />
//       <AnalyticsStack.Screen name="OrderDetails" component={OrderDetails} options={{ title: 'Order Details' }} />
//     </AnalyticsStack.Navigator>
//   );
// }

// // Setup the bottom tab navigator
// const Tab = createBottomTabNavigator();
// function Business() {
//   return (
//     <Tab.Navigator initialRouteName='Home'>
//       <Tab.Screen name='Home' component={BusinessHome}/>
//       <Tab.Screen name='Analytics' component={AnalyticsNavigator}/> // Using the stack navigator for the Analytics tab
//       <Tab.Screen name='Settings' component={BusinessSettings}/>
//     </Tab.Navigator>
//   );
// }

// export default Business;


