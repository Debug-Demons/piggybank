import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import CustomerData from './CustomerData';

const OrderHistoryPage = ({ navigation }) => {
  const displayDate = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
  const filteredOrders = CustomerData.filter(order => order.date === displayDate);

  return (
    <View style={styles.container}>
      <Text style={styles.dateBannerText}>Date: {displayDate}</Text>
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
  dateBannerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#ffa726',
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
