import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Import LineChart
import { ScrollView } from 'react-native';
import { hours, salesData } from '../MockData';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const BusinessHome = ({navigation}) => {
    // Generate labels with dashes for intermediate hours
    const chartLabels = hours.map((hour, index) => index % 2 === 0 ? hour : '|');

    const chartData = {
        labels: chartLabels,
        datasets: [{
            data: salesData,
            strokeWidth: 2, // optional
        }],
    };

    const handleDataPointClick = (data) => {
        Alert.alert(
            `Sales at ${hours[data.index]}`,
            `Sales: $${data.value}`,
        );
    };

    // Configuration for the line chart
    const chartConfig = {
        backgroundColor: '#4CAF50',
        backgroundGradientFrom: '#4CAF50',
        backgroundGradientTo: '#4CAF50',
        decimalPlaces: 2, // specify the number of decimal places you want.
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue line
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // white text
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff',
        },
    };

    return (
    <ScrollView styles={styles.scrollView}>
        <View style={styles.container}>
            <View style={styles.salesBox}>
                <Text style={styles.salesText}>Today's Sales</Text>
                <LineChart
                    data={chartData}
                    width={Dimensions.get('window').width - 40} // from react-native
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    onDataPointClick={handleDataPointClick}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
                <Text style={styles.salesAmount}>$1,234.56</Text>
            </View>
            <View style={styles.infoBoxesContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Orders Today</Text>
                    <Text style={styles.infoAmount}>120</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Active Orders</Text>
                    <Text style={styles.infoAmount}>5</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Order Count</Text>
                    <Text style={styles.infoAmount}>8</Text>
                </View>
            </View>
            <View style={styles.infoBoxesContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>AVG Order Total</Text>
                    <Text style={styles.infoAmount}>$27.89</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Profit</Text>
                    <Text style={styles.infoAmount}>$643.73</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Orders Per Hour</Text>
                    <Text style={styles.infoAmount}>17</Text>
                </View>
            </View>
        </View>
        <Button onpress={() => {navigation.replace('Login')}}>Logout</Button>
     </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    salesBox: {
        padding: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center', // Center align the text and chart in the salesBox
    },
    salesText: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    salesAmount: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10, // Added margin for spacing
        alignItems: 'center',
        marginBottom: 10, // Added margin for spacing

    },
    infoBoxesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20, // Add spacing between rows of info boxes

    },
    
    infoBox: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2196F3',
        borderRadius: 10,
        //marginHorizontal: 5,
        marginHorizontal: 10, // Increase spacing between boxes
        alignItems: 'center', // Center the content horizontally
        justifyContent: 'center', // Center the content vertically
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
   
    infoAmount: {
        color: '#32CD32',  // Lime green color for visibility
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',  // Centers the text horizontally
        padding: 1,           // Adds space around the text inside the border
        minWidth: 150,        // Ensures the minimum width of the element is 100 units
        maxWidth: 220,        // Optional: Ensures the maximum width if needed
    },
    
});

export default BusinessHome;
