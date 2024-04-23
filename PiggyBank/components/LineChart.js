import React from 'react';
import { View, StyleSheet} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
const LineGraph = ({stocksData}) => {
  if (stocksData === undefined) {
    const chartConfig = {
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      fillShadowGradientFrom: '#fff',
      fillShadowGradientTo: '#fff',
      color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    };

    const data = {
      labels: labels,
      datasets: [
        {
          data: [0]
        }
        ],
      legend: ["Error Getting Data"],
    };

    return (
      <View style={styles.container}>
        <LineChart
          data={data}
          width={300}
          height={200}
          chartConfig={chartConfig}
        />
      </View>
    );
  }
  const highs = stocksData.results.map(item => item.h);
  const lows = stocksData.results.map(item => item.l);
  const averages = stocksData.results.map(item => item.vw);

  const labels = [];
  for (let i = stocksData.results.length; i > 0; i-=4) {
    labels.push((i).toString() + "hrs");
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: highs,
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: lows,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: averages,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      },
    ],
    legend: ["High", "Low", "Average"],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    fillShadowGradientFrom: '#fff',
    fillShadowGradientTo: '#fff',
    color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default LineGraph;