import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { useCart } from './CartContext';
import {
  authorizeAsync,
  AuthorizeErrorNoNetwork,
  UsageError,
  startCheckoutAsync,
  CheckoutErrorCanceled,
  CheckoutErrorSdkNotAuthorized,
  startReaderSettingsAsync,
  ReaderSettingsErrorSdkNotAuthorized,
} from 'react-native-square-reader-sdk';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
const AUTH_CODE = "sq0acp-xYL6Fiiu9jxAt0vYiHbwP4zsSMWCveLes4OaVyQmGMo";

const Checkout = () => {
  const { cart } = useCart();

  const checkoutParams = {
    amountMoney: {
      amount: 100,
      currencyCode: 'USD', // optional, use authorized location's currency code by default
    }
  };

  const checkoutSquare = async (authCode, isCard) => {
    try {
      // authCode is a mobile authorization code from the Mobile Authorization API
      const authorizedLocation = await authorizeAsync(authCode);
      // Authorized and authorizedLocation is available
    } catch(ex) {
      switch(ex.code) {
        case AuthorizeErrorNoNetwork:
          // Remind connecting to network
          break;
        case UsageError:
          let errorMessage = ex.message;
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`)
          }
          Alert.alert('Error', errorMessage);
          break;
      }
    }

    if (isCard) {
      try {
        await startReaderSettingsAsync();
      } catch (ex) {
        switch(ex.code) {
          case ReaderSettingsErrorSdkNotAuthorized:
            // Handle reader settings not authorized
            break;
          case UsageError:
            let errorMessage = ex.message;
            if (__DEV__) {
              errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
              console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`)
            }
            Alert.alert('Error', errorMessage);
            break;
        }
      }
    }

    try {
      const checkoutResult = await startCheckoutAsync(checkoutParams);
      // checkout finished successfully and checkoutResult is available
    } catch(ex) {
      switch(ex.code) {
        case CheckoutErrorCanceled:
          // Handle canceled transaction here
          break;
        case CheckoutErrorSdkNotAuthorized:
          // Handle sdk not authorized
          break;
        default:
          let errorMessage = ex.message;
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`)
          }
          Alert.alert('Error', errorMessage);
          break;
      }
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.title}>Checkout</Text>
        {cart.map((item, index) => (
          <Text key={index} style={styles.item}>{item.name} - ${item.price.toFixed(2)}</Text>
        ))}
        <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.cashButton]} onPress={() => checkoutSquare(AUTH_CODE, false)} >
          <Text style={styles.buttonText}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cardButton]} onPress={() => checkoutSquare(AUTH_CODE, true)}>
          <Text style={styles.buttonText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loyaltyButton]}>
          <Text style={styles.buttonText}>Loyalty</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel Transaction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between', // Adjusted for better layout management
  },
  orderInfo: {
    // Additional styling can be added here
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18, // Adjusted font size for better readability
    marginVertical: 5, // Adds spacing between items
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distributes buttons evenly
    alignItems: 'center',
  },
  button: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45, // Makes the buttons circular
    elevation: 3, // Adds a slight shadow for depth
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cashButton: {
    backgroundColor: '#4CAF50', // Example color, adjust as needed
  },
  cardButton: {
    backgroundColor: '#2196F3', // Example color, adjust as needed
  },
  loyaltyButton: {
    backgroundColor: '#FFC107', // Example color, adjust as needed
  },
  cancelButton: {
    backgroundColor: '#F44336', // Example color, adjust as needed
  },
});

export default Checkout;
