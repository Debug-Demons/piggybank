


// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import CustomerData from './CustomerData';
// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const OrderHistoryPage = ({ navigation }) => {
  
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

//   const filteredOrders = CustomerData.filter(order => order.date === displayDate);

//   return (
//     <View style={styles.container}>
//       {showDatePicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <TouchableOpacity style={styles.dateBanner} onPress={() => setShowDatePicker(true)}>
//         <Text style={styles.dateBannerText}>Select Date: {displayDate}</Text>
//       </TouchableOpacity>
//       <ScrollView style={styles.scrollView}>
//         {filteredOrders.map((order, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.orderItem}
//             onPress={() => navigation.navigate('OrderDetails', { order })}
//           >
//             <Text style={styles.orderText}>Order ID: {order.orderNumber}</Text>
//             <Text style={styles.orderText}>Customer: {order.customerName}</Text>
//             <Text style={styles.orderText}>Total: {order.orderTotal}</Text>
//             <Text style={styles.orderText}>Date: {order.date}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     padding: 10,
//   },
//   dateBanner: {
//     padding: 10,
//     backgroundColor: '#ffa726', // Or any color that suits your theme
//     alignItems: 'center',
//   },
//   dateBannerText: {
//     color: '#fff',
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50',
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

// tried and failed 

// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const OrderHistoryPage = ({ navigation }) => {
  
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [orders, setOrders] = useState([]); // State to hold orders from the database

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//     fetchOrders(currentDate); // Fetch orders whenever the date changes
//   };

//   const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

//   // Function to fetch orders based on the selected date
//   const fetchOrders = async (selectedDate) => {
//     try {
//       const formattedDate = `${selectedDate.getFullYear()}-${('0' + (selectedDate.getMonth() + 1)).slice(-2)}-${('0' + selectedDate.getDate()).slice(-2)}`;
//       const response = await fetch(`${baseURL}/api/orders/getByDate?date=${formattedDate}`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch orders: ${response.status}`);
//       }
//       const data = await response.json();
//       setOrders(data); // Set fetched orders to state
//     } catch (error) {
//       console.error('Failed to fetch orders:', error);
//       Alert.alert("Error", "Failed to load orders. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchOrders(date); // Initial fetch for today's date
//   }, []);

//   return (
//     <View style={styles.container}>
//       {showDatePicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <TouchableOpacity style={styles.dateBanner} onPress={() => setShowDatePicker(true)}>
//         <Text style={styles.dateBannerText}>Select Date: {displayDate}</Text>
//       </TouchableOpacity>
//       <ScrollView style={styles.scrollView}>
//         {orders.map((order, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.orderItem}
//             onPress={() => navigation.navigate('OrderDetails', { order })}
//           >
//             <Text style={styles.orderText}>Order ID: {order.orderNumber}</Text>
//             <Text style={styles.orderText}>Customer: {order.customerName}</Text>
//             <Text style={styles.orderText}>Total: {order.orderTotal}</Text>
//             <Text style={styles.orderText}>Date: {order.date}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     padding: 10,
//   },
//   dateBanner: {
//     padding: 10,
//     backgroundColor: '#ffa726', // Or any color that suits your theme
//     alignItems: 'center',
//   },
//   dateBannerText: {
//     color: '#fff',
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50',
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






// worked for a sec and then stopped 

// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const OrderHistoryPage = ({ navigation }) => {
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [transactions, setTransactions] = useState([]);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/xUpS398uzrcDsRUQUDq5jtnf2cI2`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       const filteredData = data.filter(transaction => {
//         if (!transaction.dateOfpurchase || !transaction.dateOfpurchase._seconds) {
//           console.error('Transaction date is missing:', transaction);
//           return false; // Skip this transaction if date is missing
//         }
//         const transactionDate = new Date(transaction.dateOfpurchase._seconds * 1000);
//         return transactionDate.toDateString() === date.toDateString();
//       });
//       setTransactions(filteredData);
//     } catch (error) {
//       console.error('Failed to fetch transactions:', error);
//       Alert.alert("Error", "Failed to load transactions. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchTransactions(); // Fetch transactions on initial load and when date changes
//   }, [date]);

//   return (
//     <View style={styles.container}>
//       {showDatePicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <TouchableOpacity style={styles.dateBanner} onPress={() => setShowDatePicker(true)}>
//         <Text style={styles.dateBannerText}>Select Date: {displayDate}</Text>
//       </TouchableOpacity>
//       <ScrollView style={styles.scrollView}>
//         {transactions.map((transaction, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.orderItem}
//             onPress={() => navigation.navigate('OrderDetails', { transaction })}
//           >
//             <Text style={styles.orderText}>Transaction ID: {transaction.id}</Text>
//             <Text style={styles.orderText}>Customer: {transaction.customerName || 'N/A'}</Text>
//             <Text style={styles.orderText}>Total: ${transaction.orderTotal ? transaction.orderTotal.toFixed(2) : '0.00'}</Text>
//             <Text style={styles.orderText}>Date: {displayDate}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     padding: 10,
//   },
//   dateBanner: {
//     padding: 10,
//     backgroundColor: '#ffa726',
//     alignItems: 'center',
//   },
//   dateBannerText: {
//     color: '#fff',
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50',
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




// works great 

// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const OrderHistoryPage = ({ navigation }) => {
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [transactions, setTransactions] = useState([]);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//       const filteredData = data.filter(transaction => {
//         const transactionDate = transaction.dateofpurchase && transaction.dateofpurchase._seconds ? new Date(transaction.dateofpurchase._seconds * 1000) : null;
//         return transactionDate && transactionDate.toDateString() === date.toDateString();
//       });
//       console.log(filteredData);

//       setTransactions(filteredData);
//     } catch (error) {
//       console.error('Failed to fetch transactions:', error);
//       Alert.alert("Error", "Failed to load transactions. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [date]);

//   return (
//     <View style={styles.container}>
//       {showDatePicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <TouchableOpacity style={styles.dateBanner} onPress={() => setShowDatePicker(true)}>
//         <Text style={styles.dateBannerText}>Select Date: {displayDate}</Text>
//       </TouchableOpacity>
//       <ScrollView style={styles.scrollView}>
//         {transactions.map((transaction, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.orderItem}
//             onPress={() => navigation.navigate('OrderDetails', { transaction })}
//           >
//             <Text style={styles.orderText}>Transaction ID: {transaction.id}</Text>
//             <Text style={styles.orderText}>Customer: {transaction.customerName || 'N/A'}</Text>
//             <Text style={styles.orderText}>Total: ${transaction.orderTotal ? Number(transaction.orderTotal).toFixed(2) : '0.00'}</Text>
//             <Text style={styles.orderText}>Date: {displayDate}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     padding: 10,
//   },
//   dateBanner: {
//     padding: 10,
//     backgroundColor: '#ffa726',
//     alignItems: 'center',
//   },
//   dateBannerText: {
//     color: '#fff',
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50',
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


// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const OrderHistoryPage = ({ navigation }) => {
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [transactions, setTransactions] = useState([]);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//       const filteredData = data.filter(transaction => {
//         const transactionDate = transaction.dateofpurchase && transaction.dateofpurchase._seconds ? new Date(transaction.dateofpurchase._seconds * 1000) : null;
//         // Compare only date part
//         return transactionDate && transactionDate.toDateString() === date.toDateString();
//       });
//       console.log(filteredData);

//       setTransactions(filteredData);
//     } catch (error) {
//       console.error('Failed to fetch transactions:', error);
//       Alert.alert("Error", "Failed to load transactions. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [date]);

//   return (
//     <View style={styles.container}>
//       {showDatePicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <TouchableOpacity style={styles.dateBanner} onPress={() => setShowDatePicker(true)}>
//         <Text style={styles.dateBannerText}>Select Date: {displayDate}</Text>
//       </TouchableOpacity>
//       <ScrollView style={styles.scrollView}>
//         {transactions.map((transaction, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.orderItem}
//             onPress={() => navigation.navigate('OrderDetails', { transaction })}
//           >
//             <Text style={styles.orderText}>Transaction ID: {transaction.id}</Text>
//             <Text style={styles.orderText}>Customer: {transaction.customerName || 'N/A'}</Text>
//             <Text style={styles.orderText}>Total: ${transaction.orderTotal ? Number(transaction.orderTotal).toFixed(2) : '0.00'}</Text>
//             <Text style={styles.orderText}>Date: {displayDate}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     padding: 10,
//   },
//   dateBanner: {
//     padding: 10,
//     backgroundColor: '#ffa726',
//     alignItems: 'center',
//   },
//   dateBannerText: {
//     color: '#fff',
//   },
//   orderItem: {
//     backgroundColor: '#4CAF50',
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


import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const OrderHistoryPage = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const displayDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

  const fetchTransactions = async () => {
    try {
      const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('All transactions:', data);

      const filteredData = data.filter(transaction => {
        const transactionDate = transaction.dateOfpurchase ? new Date(transaction.dateOfpurchase._seconds * 1000) : null;
        return transactionDate && transactionDate.toDateString() === date.toDateString();
      });
      console.log('Filtered transactions:', filteredData);

      setTransactions(filteredData);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
      Alert.alert("Error", "Failed to load transactions. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [date]);

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
        {transactions.map((transaction, index) => (
          <TouchableOpacity
            key={index}
            style={styles.orderItem}
            onPress={() => navigation.navigate('OrderDetails', { transaction })}
          >
            <Text style={styles.orderText}>Transaction ID: {transaction.id}</Text>
            <Text style={styles.orderText}>Customer: {transaction.customerName || 'N/A'}</Text>
            <Text style={styles.orderText}>Total: ${transaction.orderTotal ? Number(transaction.orderTotal).toFixed(2) : '0.00'}</Text>
            <Text style={styles.orderText}>Date: {displayDate}</Text>
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
    backgroundColor: '#ffa726',
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
