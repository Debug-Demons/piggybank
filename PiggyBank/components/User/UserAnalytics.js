import React from "react";
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import LineChart from '../LineChart'

const UserAnalytics = () => {
    // Sample data for the list
    const data = [
    { id: '1', text: 'Apple', amount: '0.22', date:'11/30/23' },
    { id: '2', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
    { id: '3', text: 'Sony', amount: '0.57', date:'01/15/22' },
    { id: '4', text: 'Apple', amount: '0.22', date:'11/30/23' },
    { id: '5', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
    { id: '6', text: 'Sony', amount: '0.57', date:'01/15/22' },
    { id: '7', text: 'Apple', amount: '0.22', date:'11/30/23' },
    { id: '8', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
    { id: '9', text: 'Sony', amount: '0.57', date:'01/15/22' },
    { id: '10', text: 'Apple', amount: '0.22', date:'11/30/23' },
    { id: '11', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
    { id: '12', text: 'Sony', amount: '0.57', date:'01/15/22' },
    { id: '13', text: 'Apple', amount: '0.22', date:'11/30/23' },
    { id: '14', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
    { id: '15', text: 'Sony', amount: '0.57', date:'01/15/22' },
    // Add more items as needed
    ];

    return (
        <View style={styles.container}>
            <LineChart></LineChart>
            <Text style={styles.headerText}>Investments</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {data.map((item) => (
                    <View key={item.id} style={styles.listItem}>
                        <Text style={styles.itemText}>{item.text}</Text>
                        <Text style={styles.itemText}>{item.date}</Text>
                        <Text style={[styles.amountText, {color: item.amount.includes('-') ? 'red' : 'green' }, ]}>{item.amount}</Text>
                    </View>
                ))}
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '60%',
    marginBottom: 16,
  },
  scrollContainer: {
    width: '100%',
    alignItems: 'center',
  },
  listItem: {
    width: '100%',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserAnalytics;