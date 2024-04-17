// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import CustomerData from  './CustomerData';



// const orderHistory = CustomerData;

// const OrderHistoryPage = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {orderHistory.map((order, index) => (
//         <TouchableOpacity 
//           key={index} 
//           style={styles.orderItem} 
//           onPress={() => navigation.navigate('OrderDetails', { order })} // Assuming you have an OrderDetails page set up
//         >
//           <Text style={styles.orderText}>Order ID: {order.orderNumber}</Text>
//           <Text style={styles.orderText}>Customer: {order.customerName}</Text>
//           <Text style={styles.orderText}>Total: {order.orderTotal}</Text>
//           <Text style={styles.orderText}>Date: {order.date}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50', // Green background
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   orderText: {
//     color: '#fff',
//     marginBottom: 5,
//   },
// });

// export default OrderHistoryPage;





import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomerData from './CustomerData';

const OrderHistoryPage = ({ navigation }) => {
  
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

  const filteredOrders = CustomerData.filter(order => order.date === displayDate);

  return (
    <View style={styles.container}>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity style={styles.dateBanner} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateBannerText}>Select Date: {displayDate}</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        {filteredOrders.map((order, index) => (
          <TouchableOpacity
            key={index}
            style={styles.orderItem}
            onPress={() => navigation.navigate('OrderDetails', { order })}
          >
            <Text style={styles.orderText}>Order ID: {order.orderNumber}</Text>
            <Text style={styles.orderText}>Customer: {order.customerName}</Text>
            <Text style={styles.orderText}>Total: {order.orderTotal}</Text>
            <Text style={styles.orderText}>Date: {order.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  dateBanner: {
    padding: 10,
    backgroundColor: '#ffa726', // Or any color that suits your theme
    alignItems: 'center',
  },
  dateBannerText: {
    color: '#fff',
  },
  orderItem: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderText: {
    color: '#fff',
    marginBottom: 5,
  },
});

export default OrderHistoryPage;

