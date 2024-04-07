import React from "react";
import {View, Text, ScrollView, StyleSheet, RefreshControl} from 'react-native'
import LineChart from '../LineChart'

const UserAnalytics = React.memo(({refreshing, onRefresh, data}) => {
    return (
        <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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
    </ScrollView>
    );
});

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