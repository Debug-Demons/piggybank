


// works for last resort 

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { LinearGradient } from 'expo-linear-gradient';
// import DateFilterBox from './DateFilterBox';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const SalesReportingPage = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch transactions');
//       }
//       const data = await response.json();
//       const processedData = data.map(transaction => ({
//         ...transaction,
//         dateOfpurchase: new Date(transaction.dateOfpurchase._seconds * 1000)
//       }));
//       setTransactions(processedData);
//     } catch (error) {
//       console.error('Error fetching transaction data:', error);
//       Alert.alert('Error', 'Unable to fetch transaction data.');
//     }
//   };

//   const processData = () => {
//     const filteredTransactions = transactions.filter(transaction => 
//       transaction.dateOfpurchase >= startDate && transaction.dateOfpurchase <= endDate
//     );

//     const values = filteredTransactions.map(transaction => transaction.orderTotal).filter(total => typeof total === 'number' && !isNaN(total));

//     const total = values.reduce((acc, cur) => acc + cur, 0);

//     console.log('Filtered Transactions:', filteredTransactions);
//     console.log('Values:', values);
//     console.log('Total:', total);

//     return {
//       labels: [],
//       datasets: [{
//         data: values,
//         strokeWidth: 2,
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Optional
//       }],
//       total: total.toFixed(2),
//     };
//   };

//   const data = processData();

//   const chartConfig = {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: { borderRadius: 16 },
//     propsForDots: {
//       r: '3',
//       strokeWidth: '1',
//       stroke: '#ffa726',
//     },
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <DateFilterBox onFetchData={(start, end) => {
//           setStartDate(new Date(start));
//           setEndDate(new Date(end));
//           console.log('Date Range Set:', new Date(start), new Date(end));
//         }} />

//         <LineChart
//           data={data}
//           width={Dimensions.get('window').width - 16}
//           height={300}
//           chartConfig={chartConfig}
//           style={styles.chartStyle}
//           bezier
//         />

//         <LinearGradient
//           colors={['#fb8c00', '#ffa726']}
//           style={styles.totalBubble}>
//           <Text style={styles.totalText}>Total Sales: ${data.total}</Text>
//         </LinearGradient>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//   },
//   chartStyle: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   totalBubble: {
//     borderRadius: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   totalText: {
//     fontSize: 18,
//     color: 'black',
//   },
// });

// export default SalesReportingPage



// looks good but dont work


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { LinearGradient } from 'expo-linear-gradient';
// import DateFilterBox from './DateFilterBox';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const SalesReportingPage = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     fetchTransactions();
//   }, [startDate, endDate]); // Rerun when dates change

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(`${baseURL}/api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
//       if (!response.ok) throw new Error('Failed to fetch transactions');
//       const data = await response.json();
//       const processedData = data.map(transaction => ({
//         ...transaction,
//         dateOfpurchase: new Date(transaction.dateOfpurchase._seconds * 1000)
//       }));
//       setTransactions(processedData);
//     } catch (error) {
//       Alert.alert('Error', 'Unable to fetch transaction data.');
//     }
//   };

//   const processData = () => {
//     let intervalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
//     let interval = Math.max(1, Math.floor(intervalDays / 5)); // Calculate interval for more than 5 days range

//     const filteredTransactions = transactions.filter(transaction =>
//       transaction.dateOfpurchase >= startDate && transaction.dateOfpurchase <= endDate
//     );

//     const values = [];
//     const labels = [];

//     for (let i = 0; i <= intervalDays; i += interval) {
//       const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
//       const dailyTotal = filteredTransactions.reduce((sum, transaction) => {
//         return currentDate.toDateString() === transaction.dateOfpurchase.toDateString() ? sum + transaction.orderTotal : sum;
//       }, 0);
//       values.push(dailyTotal);
//       labels.push(`${currentDate.getMonth() + 1}/${currentDate.getDate()}`);
//     }

//     const total = values.reduce((acc, cur) => acc + cur, 0);

//     return {
//       labels,
//       datasets: [{
//         data: values,
//         strokeWidth: 2,
//       }],
//       total: total.toFixed(2),
//     };
//   };

//   const data = processData();

//   const chartConfig = {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: { borderRadius: 16 },
//     propsForDots: {
//       r: '3',
//       strokeWidth: '1',
//       stroke: '#ffa726',
//     },
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <DateFilterBox onFetchData={(start, end) => {
//           setStartDate(new Date(start));
//           setEndDate(new Date(end));
//         }} />
//         <LineChart
//           data={data}
//           width={Dimensions.get('window').width - 16}
//           height={300}
//           chartConfig={chartConfig}
//           style={styles.chartStyle}
//           bezier
//         />
//         <LinearGradient
//           colors={['#fb8c00', '#ffa726']}
//           style={styles.totalBubble}>
//           <Text style={styles.totalText}>Total Sales: ${data.total}</Text>
//         </LinearGradient>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//   },
//   chartStyle: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   totalBubble: {
//     borderRadius: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   totalText: {
//     fontSize: 18,
//     color: 'black',
//   },
// });

// export default SalesReportingPage;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { LinearGradient } from 'expo-linear-gradient';
// import DateFilterBox from './DateFilterBox';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const SalesReportingPage = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTransactions();
//   }, [startDate, endDate]);

//   const fetchTransactions = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       const processedData = data.map(transaction => ({
//         ...transaction,
//         dateOfpurchase: new Date(transaction.dateOfpurchase._seconds * 1000)
//       }));
//       setTransactions(processedData);
//     } catch (error) {
//       setError('Failed to fetch transaction data. Please try again later.');
//       console.error('Error fetching transaction data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const processData = () => {
//     if (!transactions.length) {
//       return { labels: [], datasets: [{ data: [] }], total: '0.00' };
//     }

//     const filteredTransactions = transactions.filter(transaction => 
//       transaction.dateOfpurchase >= startDate && transaction.dateOfpurchase <= endDate
//     );

//     const values = filteredTransactions.map(transaction => transaction.orderTotal).filter(total => typeof total === 'number' && !isNaN(total));
//     const total = values.reduce((acc, cur) => acc + cur, 0);

//     // Determine interval based on the number of days in the date range
//     const totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
//     const interval = Math.max(1, Math.floor(totalDays / 5)); // Calculate interval for grid layout

//     const labels = Array.from({ length: Math.ceil(totalDays / interval) + 1 }, (_, i) => {
//       const currentDate = new Date(startDate.getTime() + (i * interval * 1000 * 3600 * 24));
//       return `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
//     });

//     return {
//       labels,
//       datasets: [{
//         data: values,
//         strokeWidth: 2,
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`
//       }],
//       total: total.toFixed(2),
//     };
//   };

//   const data = processData();

//   const chartConfig = {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: { borderRadius: 16 },
//     propsForDots: {
//       r: '3',
//       strokeWidth: '1',
//       stroke: '#ffa726',
//     },
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <DateFilterBox onFetchData={(start, end) => {
//           setStartDate(new Date(start));
//           setEndDate(new Date(end));
//         }} />
//         {isLoading ? (
//           <Text>Loading data...</Text>
//         ) : error ? (
//           <Text>{error}</Text>
//         ) : (
//           <View>
//             <LineChart
//               data={data}
//               width={Dimensions.get('window').width - 16}
//               height={300}
//               chartConfig={chartConfig}
//               style={styles.chartStyle}
//               bezier
//             />
//             <LinearGradient
//               colors={['#fb8c00', '#ffa726']}
//               style={styles.totalBubble}>
//               <Text style={styles.totalText}>Total Sales: ${data.total}</Text>
//             </LinearGradient>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//   },
//   chartStyle: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   totalBubble: {
//     borderRadius: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   totalText: {
//     fontSize: 18,
//     color: 'black',
//   },
// });

// export default SalesReportingPage;





import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import DateFilterBox from './DateFilterBox';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const SalesReportingPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, [startDate, endDate]);

  const fetchTransactions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}api/transactions/getTransactionDataBusiness/coffeeHouse@gmail.com`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length === 0) {
        setError("No transactions found for the selected date range.");
        setTransactions([]);
      } else {
        const processedData = data.map(transaction => ({
          ...transaction,
          dateOfpurchase: new Date(transaction.dateOfpurchase._seconds * 1000),
          orderTotal: parseFloat(transaction.orderTotal) // Ensure orderTotal is a number
        }));
        setTransactions(processedData);
      }
    } catch (error) {
      setError('Failed to fetch transaction data. Please try again later.');
      console.error('Error fetching transaction data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const processData = () => {
    if (!transactions.length) {
      return { labels: [], datasets: [{ data: [] }], total: '0.00' };
    }

    const filteredTransactions = transactions.filter(transaction => 
      transaction.dateOfpurchase >= startDate && transaction.dateOfpurchase <= endDate
    );

    const values = filteredTransactions.map(transaction => transaction.orderTotal).filter(total => typeof total === 'number' && !isNaN(total));
    const total = values.reduce((acc, cur) => acc + cur, 0);

    const totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
    if (totalDays === 0 || values.length === 0) {
      return { labels: ['No data'], datasets: [{ data: [0] }], total: '0.00' };
    }

    const labels = filteredTransactions.map(transaction => `${transaction.dateOfpurchase.getMonth()+1}/${transaction.dateOfpurchase.getDate()}`);

    return {
      labels,
      datasets: [{
        data: values,
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`
      }],
      total: total.toFixed(2),
    };
  };

  const data = processData();

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: {
      r: '3',
      strokeWidth: '1',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <DateFilterBox onFetchData={(start, end) => {
          setStartDate(new Date(start));
          setEndDate(new Date(end));
        }} />
        {isLoading ? (
          <Text>Loading data...</Text>
        ) : error || !data.datasets[0].data.length ? (
          <Text>{error || 'No data available'}</Text>
        ) : (
          <View>
            <LineChart
              data={data}
              width={Dimensions.get('window').width - 16}
              height={300}
              chartConfig={chartConfig}
              style={styles.chartStyle}
              bezier
            />
            <LinearGradient
              colors={['#fb8c00', '#ffa726']}
              style={styles.totalBubble}>
              <Text style={styles.totalText}>Total Sales: ${data.total}</Text>
            </LinearGradient>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  totalBubble: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 18,
    color: 'black',
  },
});

export default SalesReportingPage;


