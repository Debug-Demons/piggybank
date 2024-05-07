import React, { useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Animated, Easing } from 'react-native';

const MockPaymentProcess = () => {
  const [processing, setProcessing] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const spinValue = new Animated.Value(0);

  // Function to simulate payment processing
  const processPayment = () => {
    setProcessing(true);
    // Simulate payment processing for a few seconds
    setTimeout(() => {
      // Set payment success
      setProcessing(false);
      setPaymentSuccess(true);
    }, 3000); // Change this value to simulate different processing times
  };

  // Function to start the payment process
  const startPayment = () => {
    // Simulate API call or payment initiation
    processPayment();
  };

  // Start payment process when component mounts
  React.useEffect(() => {
    startPayment();
  }, []);

  // Start spinning animation
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    )
  ).start();

  // Interpolate rotation angle
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.container}>
      {processing ? (
        <View style={styles.processingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.processingText}>Processing Payment...</Text>
        </View>
      ) : (
        <View style={styles.successContainer}>
          <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]}>
            {paymentSuccess && <Text style={styles.checkMark}>✓</Text>}
          </Animated.View>
          <Text style={styles.successText}>Payment Successful!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  processingContainer: {
    alignItems: 'center',
  },
  processingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#34495e',
  },
  successContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    fontSize: 40,
    color: '#2ecc71',
  },
  successText: {
    marginTop: 10,
    fontSize: 16,
    color: '#2ecc71',
  },
});

export default MockPaymentProcess;
