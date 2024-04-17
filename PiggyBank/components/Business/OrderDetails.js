// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const OrderDetails = ({ route, navigation }) => {
//   const { order } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text>Order Number: {order.orderNumber}</Text>
//       <Text>Customer ID: {order.customerId}</Text>
//       <Text>Order Total: {order.orderTotal}</Text>
//       <Text>Time: {order.time}</Text>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // Add more styles as needed
// });

// export default OrderDetails;



// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// const OrderDetails = ({ route, navigation }) => {
//   const { order } = route.params;

//   // Dummy sales data for the customer
//   const salesData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         data: [
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100,
//           Math.random() * 100
//         ]
//       }
//     ]
//   };

//   const chartConfig = {
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false // optional
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.detailBox}>
//         <Text style={styles.detailText}>Order Number: {order.orderNumber}</Text>
//         <Text style={styles.detailText}>Customer ID: {order.customerId}</Text>
//         <Text style={styles.detailText}>Order Total: {order.orderTotal}</Text>
//         <Text style={styles.detailText}>Time: {order.time}</Text>
//       </View>
//       <LineChart
//         data={salesData}
//         width={Dimensions.get("window").width - 40} // from react-native
//         height={220}
//         yAxisLabel="$"
//         chartConfig={chartConfig}
//         bezier
//         style={styles.chart}
//       />
//       <Button title="Go Back" onPress={() => navigation.goBack()} style={styles.goBackButton} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   detailBox: {
//     marginBottom: 20,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   detailText: {
//     fontSize: 16,
//     marginVertical: 2,
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   goBackButton: {
//     marginTop: 20,
//   },
//   // Add more styles as needed
// });

// export default OrderDetails;





import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const OrderDetails = ({ route, navigation }) => {
  const { order } = route.params;

  // Example layout for the updated OrderDetails component
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.detailText}>Order Number: {order.orderNumber}</Text>
        <Text style={styles.detailText}>Customer ID: {order.customerId}</Text>
        <Text style={styles.detailText}>Order Total: {order.orderTotal}</Text>
        <Text style={styles.detailText}>Time: {order.time}</Text>
        <Text style={styles.detailText}>Payment Method: {order.paymentMethod}</Text>
        <Text style={styles.detailText}>Date: {order.date}</Text>
        <Text style={styles.detailText}>Items Purchased:</Text>
        {order.items.map((item, index) => (
          <Text key={index} style={styles.itemText}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price}
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
    backgroundColor: '#f0f0f0', // Light grey background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 20, // Indent item lines for better readability
    marginBottom: 5,
  },
  // Adjust or add more styles as needed
});

export default OrderDetails;
