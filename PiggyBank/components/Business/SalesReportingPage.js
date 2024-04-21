import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import BubbleButton from './BubbleButton'; // Import the BubbleButton component
import DateFilterBox from './DateFilterBox'; // Import the DateFilterBox component
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;


const SalesReportingPage = () => {
  const [filter, setFilter] = useState('day');

  const [salesData, setSalesData] = useState({ sales: 0, tax: 0, tips: 0 });

  const onFetchData = (start, end) => {
    // Placeholder for fetching data based on start and end dates
    // This example uses static data for demonstration
    setSalesData({
      sales: 1000, // Total sales in the selected period
      tax: 100, // Total tax collected in the selected period
      tips: 200, // Total tips collected in the selected period
    });
  };

  // Adjust these data sources as needed
  const dataSources = {
    day: {
      labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
      datasets: [{ data: [5, 10, 5, 15, 10, 15], strokeWidth: 2 }],
      total: "60", // Example total for the day
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{ data: [20, 45, 28, 80, 99, 43, 50], strokeWidth: 2 }],
      total: "365", // Example total for the week
    },
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [{ data: [100, 200, 150, 250], strokeWidth: 2 }],
      total: "700", // Example total for the month
    },
    year: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{ data: [120, 155, 130, 160, 190, 205, 170, 180, 210, 200, 195, 230], strokeWidth: 2 }],
      total: "2045", // Example total for the year
    },
  };


//   const SalesReportingPage = () => {
//     const [salesData, setSalesData] = useState({ sales: 0, tax: 0, tips: 0 });
  
//     const onFetchData = (start, end) => {
//       // Placeholder for fetching data based on start and end dates
//       // This example uses static data for demonstration
//       setSalesData({
//         sales: 1000, // Total sales in the selected period
//         tax: 100, // Total tax collected in the selected period
//         tips: 200, // Total tips collected in the selected period
//       });
//     };
  

  const handleSetFilter = (newFilter) => {
    setFilter(newFilter);
  };

//   const chartConfig = {
//     backgroundColor: '#1cc910',
//     backgroundGradientFrom: '#eff3ff',
//     backgroundGradientTo: '#efefef',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   };

// test back 
const chartConfig = {
  backgroundColor: '#ffffff', // Consider using a light color for the background
  backgroundGradientFrom: '#fb8c00', // Start of gradient (use a vibrant color)
  backgroundGradientTo: '#baf8ba', // End of gradient (make it a bit lighter than the start)
  decimalPlaces: 2, // Number of decimal places for values, adjust as needed
  color: (opacity = 1) => `rgba(23, 14, 9, ${opacity})`, // Line color (white for contrast)
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color (black for readability)
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6', // Radius of the dots on the line
    strokeWidth: '2', // Width of the stroke around the dots
    stroke: '#ffa726', // Color of the stroke around the dots
  },
  propsForLabels: {
    fontSize: '12', // Adjust the font size of labels as needed
  },
  // You can add more styling props as needed
};


  // Handler for data point clicks
  const handleDataPointClick = (data) => {
    const label = dataSources[filter].labels[data.index];
    const value = data.value;

    Alert.alert(
      `Sales Detail`,
      `When: ${label}\nSales: $${value}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sales Overview</Text>
      <View style={styles.filterContainer}>
        {/* <Button title="Day" onPress={() => handleSetFilter('day')} />
        <Button title="Week" onPress={() => handleSetFilter('week')} />
        <Button title="Month" onPress={() => handleSetFilter('month')} />
        <Button title="Year" onPress={() => handleSetFilter('year')} /> */}
        <BubbleButton title="Day" onPress={() => handleSetFilter('day')} />
        <BubbleButton title="Week" onPress={() => handleSetFilter('week')} />
        <BubbleButton title="Month" onPress={() => handleSetFilter('month')} />
        <BubbleButton title="Year" onPress={() => handleSetFilter('year')} />
      </View>
      <LineChart
        data={dataSources[filter]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={chartConfig}
        style={styles.chartStyle}
        onDataPointClick={handleDataPointClick}
      />
       {/* Gradient Bubble for Total */}
      <LinearGradient
        colors={['#fb8c00', '#baf8ba']} // Use similar gradient colors as your graph
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.totalBubble}>
        <Text style={styles.totalText}>Total for {filter}: ${dataSources[filter].total}</Text>
      </LinearGradient>


      <DateFilterBox onFetchData={onFetchData} />
      <Text style={styles.dataText}>Sales: ${salesData.sales}</Text>
      <Text style={styles.dataText}>Tax Collected: ${salesData.tax}</Text>
      <Text style={styles.dataText}>Tips: ${salesData.tips}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  totalBubble: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 0, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  totalText: {
    fontSize: 18,
    color: 'black', // Text color that stands out against the gradient
    fontFamily: "Arial Rounded MT Bold",

  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 1, // Reduced margin
  },
  container: {
    flex: 1,
    padding: 10,
  },
  dataText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default SalesReportingPage;


