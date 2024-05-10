

// best 


// import React from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const OrderDetails = ({ route, navigation }) => {
//   const { order } = route.params;

//   // Example layout for the updated OrderDetails component
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.detailBox}>
//         <Text style={styles.detailText}>Order Number: {order.orderNumber}</Text>
//         <Text style={styles.detailText}>Customer ID: {order.customerId}</Text>
//         <Text style={styles.detailText}>Order Total: {order.orderTotal}</Text>
//         <Text style={styles.detailText}>Time: {order.time}</Text>
//         <Text style={styles.detailText}>Payment Method: {order.paymentMethod}</Text>
//         <Text style={styles.detailText}>Date: {order.date}</Text>
//         <Text style={styles.detailText}>Items Purchased:</Text>
//         {order.items.map((item, index) => (
//           <Text key={index} style={styles.itemText}>
//             {item.name} - Quantity: {item.quantity} - Price: ${item.price}
//           </Text>
//         ))}
//       </View>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   detailBox: {
//     backgroundColor: '#f0f0f0', // Light grey background
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   detailText: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   itemText: {
//     fontSize: 16,
//     marginLeft: 20, // Indent item lines for better readability
//     marginBottom: 5,
//   },
//   // Adjust or add more styles as needed
// });

// export default OrderDetails;



// import React from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// const OrderDetails = ({ route, navigation }) => {
//   const { transaction } = route.params;

//   const formatDate = (dateSeconds) => {
//     const date = new Date(dateSeconds * 1000);
//     return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
//   };

//   // Ensuring every property is safely accessed
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.detailBox}>
//         <Text style={styles.detailText}>Transaction ID: {transaction.id}</Text>
//         <Text style={styles.detailText}>Customer Name: {transaction.customerName || 'N/A'}</Text>
//         <Text style={styles.detailText}>Order Total: ${transaction.orderTotal ? transaction.orderTotal.toFixed(2) : '0.00'}</Text>
//         <Text style={styles.detailText}>Time: {transaction.time || 'N/A'}</Text>
//         <Text style={styles.detailText}>Payment Method: {transaction.paymentMethod || 'N/A'}</Text>
//         <Text style={styles.detailText}>Date: {transaction.dateofpurchase ? formatDate(transaction.dateofpurchase._seconds) : 'N/A'}</Text>
//         <Text style={styles.detailText}>Items Purchased:</Text>
//         {transaction.items && transaction.items.map((item, index) => (
//           <Text key={index} style={styles.itemText}>
//             {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
//           </Text>
//         ))}
//       </View>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   detailBox: {
//     backgroundColor: '#f0f0f0', // Light grey background
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   detailText: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   itemText: {
//     fontSize: 16,
//     marginLeft: 20, // Indent item lines for better readability
//     marginBottom: 5,
//   },
//   // Adjust or add more styles as needed
// });

// export default OrderDetails;



// best so far but no time or date 

// import React from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// const OrderDetails = ({ route, navigation }) => {
//   const { transaction } = route.params;

//   const formatDate = (dateSeconds) => {
//     const date = new Date(dateSeconds * 1000);
//     return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.detailBox}>
//         <Text style={styles.detailText}>Transaction ID: {transaction.id}</Text>
//         <Text style={styles.detailText}>Customer Name: {transaction.customerName || 'N/A'}</Text>
//         <Text style={styles.detailText}>Order Total: ${transaction.orderTotal ? transaction.orderTotal.toFixed(2) : '0.00'}</Text>
//         <Text style={styles.detailText}>Time: {transaction.time || 'N/A'}</Text>
//         <Text style={styles.detailText}>Payment Method: {transaction.paymentMethod || 'N/A'}</Text>
//         <Text style={styles.detailText}>Date: {transaction.dateOfpurchase ? formatDate(transaction.dateOfpurchase._seconds) : 'N/A'}</Text>
//         <Text style={styles.detailText}>Items Purchased:</Text>
//         {transaction.items && transaction.items.map((item, index) => (
//           <Text key={index} style={styles.itemText}>
//             {item.name} - Quantity: {item.quantity} - Price: ${item.price ? Number(item.price).toFixed(2) : '0.00'}
//           </Text>
//         ))}
//       </View>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   detailBox: {
//     backgroundColor: '#f0f0f0', // Light grey background
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   detailText: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   itemText: {
//     fontSize: 16,
//     marginLeft: 20, // Indent item lines for better readability
//     marginBottom: 5,
//   },
// });

// export default OrderDetails;


// works bestttt


// import React from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// const OrderDetails = ({ route, navigation }) => {
//   const { transaction } = route.params;

//   // Function to format date from timestamp
//   const formatDate = (timestamp) => {
//     if (!timestamp || !timestamp._seconds) return 'N/A';  // Safety check
//     const date = new Date(timestamp._seconds * 1000);
//     return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
//   };

//   // Function to format time from timestamp
//   const formatTime = (timestamp) => {
//     if (!timestamp || !timestamp._seconds) return 'N/A';  // Safety check
//     const date = new Date(timestamp._seconds * 1000);
//     return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.detailBox}>
//         <Text style={styles.detailText}>Transaction ID: <Text style={styles.valueText}>{transaction.id}</Text></Text>
//         <Text style={styles.detailText}>Customer Name: <Text style={styles.valueText}>{transaction.customerName || 'N/A'}</Text></Text>
//         <Text style={styles.detailText}>Order Total: <Text style={styles.valueText}>${transaction.orderTotal ? transaction.orderTotal.toFixed(2) : '0.00'}</Text></Text>
//         <Text style={styles.detailText}>Time: <Text style={styles.valueText}>{formatTime(transaction.dateOfpurchase)}</Text></Text>
//         <Text style={styles.detailText}>Payment Method: <Text style={styles.valueText}>{transaction.paymentMethod || 'N/A'}</Text></Text>
//         <Text style={styles.detailText}>Date: <Text style={styles.valueText}>{formatDate(transaction.dateOfpurchase)}</Text></Text>
//         <Text style={styles.detailText}>Items Purchased:</Text>
//         {transaction.items && transaction.items.map((item, index) => (
//           <Text key={index} style={styles.itemText}>
//             {item.name} - Quantity: {item.quantity} - Price: ${item.price ? Number(item.price).toFixed(2) : '0.00'}
//           </Text>
//         ))}
//       </View>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#ffffff',  // Light background for the whole page
//   },
//   detailBox: {
//     backgroundColor: '#e8eaf6',  // Mild blue background
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   detailText: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//     color: '#3f51b5',  // Blue color for text labels
//   },
//   valueText: {
//     fontWeight: 'normal',
//     color: '#000000',  // Black color for values
//   },
//   itemText: {
//     fontSize: 16,
//     marginLeft: 20,  // Indent item lines for better readability
//     marginBottom: 5,
//     color: '#333333',  // Dark grey color for items
//   },
// });

// export default OrderDetails;







// works best 


// import React from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// const OrderDetails = ({ route, navigation }) => {
//   const { transaction } = route.params;

//   // Function to format date and time
//   const formatDateTime = (timestamp) => {
//     if (!timestamp || !timestamp._seconds) return { date: 'N/A', time: 'N/A' };

//     const date = new Date(timestamp._seconds * 1000);
//     const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
//     const formattedTime = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;

//     return { date: formattedDate, time: formattedTime };
//   };

//   const dateTime = formatDateTime(transaction.dateofpurchase);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.detailBox}>
//         <Text style={styles.detailText}>Transaction ID: <Text style={styles.valueText}>{transaction.id}</Text></Text>
//         <Text style={styles.detailText}>Customer Name: <Text style={styles.valueText}>{transaction.customerName || 'N/A'}</Text></Text>
//         <Text style={styles.detailText}>Order Total: <Text style={styles.valueText}>${transaction.orderTotal ? transaction.orderTotal.toFixed(2) : '0.00'}</Text></Text>
//         <Text style={styles.detailText}>Time: <Text style={styles.valueText}>{dateTime.time}</Text></Text>
//         <Text style={styles.detailText}>Payment Method: <Text style={styles.valueText}>{transaction.paymentMethod || 'N/A'}</Text></Text>
//         <Text style={styles.detailText}>Date: <Text style={styles.valueText}>{dateTime.date}</Text></Text>
//         <Text style={styles.detailText}>Items Purchased:</Text>
//         {transaction.items && transaction.items.map((item, index) => (
//           <Text key={index} style={styles.itemText}>
//             {item.name} - Quantity: {item.quantity} - Price: ${item.price ? Number(item.price).toFixed(2) : '0.00'}
//           </Text>
//         ))}
//       </View>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   detailBox: {
//     backgroundColor: '#e8eaf6',  // Mild blue background
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   detailText: {
//     fontSize: 18,
//     marginBottom: 10,
//     fontWeight: 'bold',
//     color: '#3f51b5',  // Blue color for text labels
//   },
//   valueText: {
//     fontWeight: 'normal',
//     color: '#000000',  // Black color for values
//   },
//   itemText: {
//     fontSize: 16,
//     marginLeft: 20,  // Indent item lines for better readability
//     marginBottom: 5,
//     color: '#333333',  // Dark grey color for items
//   },
// });

// export default OrderDetails;



import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const OrderDetails = ({ route, navigation }) => {
  const { transaction } = route.params;

  // Function to format date and time
  const formatDateTime = (timestamp) => {
    if (!timestamp || !timestamp._seconds) return { date: 'N/A', time: 'N/A' };

    const date = new Date(timestamp._seconds * 1000);
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    const formattedTime = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;

    return { date: formattedDate, time: formattedTime };
  };

  const dateTime = formatDateTime(transaction.dateOfpurchase); // Corrected here

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.detailText}>Transaction ID: <Text style={styles.valueText}>{transaction.id}</Text></Text>
        <Text style={styles.detailText}>Customer Name: <Text style={styles.valueText}>{transaction.customerName || 'N/A'}</Text></Text>
        <Text style={styles.detailText}>Order Total: <Text style={styles.valueText}>${transaction.orderTotal ? transaction.orderTotal.toFixed(2) : '0.00'}</Text></Text>
        <Text style={styles.detailText}>Time: <Text style={styles.valueText}>{dateTime.time}</Text></Text>
        <Text style={styles.detailText}>Payment Method: <Text style={styles.valueText}>{transaction.paymentMethod || 'N/A'}</Text></Text>
        <Text style={styles.detailText}>Date: <Text style={styles.valueText}>{dateTime.date}</Text></Text>
        <Text style={styles.detailText}>Items Purchased:</Text>
        {transaction.items && transaction.items.map((item, index) => (
          <Text key={index} style={styles.itemText}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price ? Number(item.price).toFixed(2) : '0.00'}
          </Text>
        ))}
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailBox: {
    backgroundColor: '#e8eaf6',  // Mild blue background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#3f51b5',  // Blue color for text labels
  },
  valueText: {
    fontWeight: 'normal',
    color: '#000000',  // Black color for values
  },
  itemText: {
    fontSize: 16,
    marginLeft: 20,  // Indent item lines for better readability
    marginBottom: 5,
    color: '#333333',  // Dark grey color for items
  },
});

export default OrderDetails;
