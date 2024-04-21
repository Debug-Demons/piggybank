// import React from 'react';
// import {View, Text} from 'react-native';

// const BusinessAnalytics = () => {
//     return <View>
//         <Text>Analytics</Text>
//     </View>
// }

// export default BusinessAnalytics;


// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// const orders = [
//   // Dummy data for demonstration
//   { orderNumber: '123', customerId: '456', orderTotal: '$10.00', time: '12:00 PM' },
//   // Add more orders as needed
// ];

// const AnalyticsPage = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.orderBox}>
//         {orders.map((order, index) => (
//           <TouchableOpacity key={index} style={styles.orderItem} onPress={() => navigation.navigate('OrderDetails', { order })}>
//             <Text>Order Number: {order.orderNumber}</Text>
//             <Text>Customer ID: {order.customerId}</Text>
//             <Text>Order Total: {order.orderTotal}</Text>
//             <Text>Time: {order.time}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   orderBox: {
//     marginBottom: 20,
//   },
//   orderItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   // Add more styles as needed
// });

// export default AnalyticsPage;







// like as well 
// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// const orders = [
//   // Dummy data for demonstration
//   { orderNumber: '123', customerId: '456', orderTotal: '$10.00', time: '12:00 PM' }, { orderNumber: '124', customerId: '56', orderTotal: '$14.50', time: '1:00 PM' },
//     { orderNumber: '125', customerId: '1156', orderTotal: '$5.50', time: '2:00 PM' },
//     { orderNumber: '126', customerId: '6', orderTotal: '$1.34', time: '3:00 PM' },
//     { orderNumber: '127', customerId: '426', orderTotal: '$16.78', time: '4:00 PM' },
//     { orderNumber: '128', customerId: '76', orderTotal: '$11.10', time: '12:00 PM' },
//     { orderNumber: '129', customerId: '9', orderTotal: '$13.33', time: '12:00 PM' },
// ];

// const AnalyticsPage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Other content can go here */}
//       <Text style={styles.header}>Today's Orders</Text>
//       <ScrollView style={styles.ordersContainer} contentContainerStyle={styles.ordersContentContainer}>
//         {orders.map((order, index) => (
//           <TouchableOpacity key={index} style={styles.orderItem} onPress={() => navigation.navigate('OrderDetails', { order })}>
//             <Text style={styles.orderText}>Order Number: {order.orderNumber}</Text>
//             <Text style={styles.orderText}>Customer ID: {order.customerId}</Text>
//             <Text style={styles.orderText}>Order Total: {order.orderTotal}</Text>
//             <Text style={styles.orderText}>Time: {order.time}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       {/* Additional content can be added here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center', // Center content horizontally
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   ordersContainer: {
//     flex: 1,
//     width: '100%', // Make the ScrollView take up 100% of the screen width
//     maxHeight: 300, // Set a max height for the orders container
//   },
//   ordersContentContainer: {
//     flexGrow: 1, // Ensure the container can grow if content is smaller than the screen
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50', // Green background for each order item
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 5, // Add some vertical spacing between items
//     elevation: 3, // Add shadow for Android
//     shadowOffset: { width: 1, height: 1 }, // Shadow for iOS
//     shadowColor: '#333',
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//   },
//   orderText: {
//     color: '#fff', // White text color for better readability against the green background
//     marginBottom: 5, // Space out the text within each order item
//   },
//   // Add more styles as needed
// });

// export default AnalyticsPage;














// below is for other idea


// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// const orders = [
//   // Dummy data for demonstration
//   { orderNumber: '123', customerId: '456', orderTotal: '$10.00', time: '12:00 PM' },
//   { orderNumber: '124', customerId: '56', orderTotal: '$14.50', time: '1:00 PM' },
//   { orderNumber: '125', customerId: '1156', orderTotal: '$5.50', time: '2:00 PM' },
//   { orderNumber: '126', customerId: '6', orderTotal: '$1.34', time: '3:00 PM' },
//   { orderNumber: '127', customerId: '426', orderTotal: '$16.78', time: '4:00 PM' },
//   { orderNumber: '128', customerId: '76', orderTotal: '$11.10', time: '12:00 PM' },
//   { orderNumber: '129', customerId: '9', orderTotal: '$13.33', time: '12:00 PM' },
//   // Add more orders as needed
// ];

// const AnalyticsPage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollContainer}>
//         {orders.map((order, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.orderItem}
//             onPress={() => navigation.navigate('OrderDetails', { order })}
//           >
//             <Text style={styles.orderText}>Order Number: {order.orderNumber}</Text>
//             <Text style={styles.orderText}>Customer ID: {order.customerId}</Text>
//             <Text style={styles.orderText}>Order Total: {order.orderTotal}</Text>
//             <Text style={styles.orderText}>Time: {order.time}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4CAF50', // Green background for the whole screen
//   },
//   scrollContainer: {
//     flex: 1,
//   },
//   orderItem: {
//     backgroundColor: 'white', // Each order item is in a white bubble
//     borderRadius: 10, // Rounded corners for the bubble
//     padding: 20,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     shadowColor: '#000', // Shadow for the bubble
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5, // Elevation for Android
//   },
//   orderText: {
//     fontSize: 16,
//     color: 'black', // Text color
//     marginBottom: 5, // Space between text lines
//   },
//   // Add more styles as needed
// });

// export default AnalyticsPage;




import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
const AnalyticsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.bubble}
        onPress={() => navigation.navigate('OrderHistory')}>
        <Text style={styles.bubbleText}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bubble}
        onPress={() => navigation.navigate('SalesReporting')}>
        <Text style={styles.bubbleText}>Sales Reporting</Text>
      </TouchableOpacity>

      {/* Add more bubbles as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  bubble: {
    backgroundColor: '#4CAF50',
    borderRadius: 50, // Adjust to make it more circular
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bubbleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AnalyticsPage;
