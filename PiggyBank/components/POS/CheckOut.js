// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
// import { useCart } from './CartContext';
// import {
//   authorizeAsync,
//   AuthorizeErrorNoNetwork,
//   UsageError,
//   startCheckoutAsync,
//   CheckoutErrorCanceled,
//   CheckoutErrorSdkNotAuthorized,
//   startReaderSettingsAsync,
//   ReaderSettingsErrorSdkNotAuthorized,
// } from 'react-native-square-reader-sdk';
// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
// const AUTH_CODE = "sq0acp-xYL6Fiiu9jxAt0vYiHbwP4zsSMWCveLes4OaVyQmGMo";

// const Checkout = () => {
//   const { cart } = useCart();

//   const checkoutParams = {
//     amountMoney: {
//       amount: 100,
//       currencyCode: 'USD', // optional, use authorized location's currency code by default
//     }
//   };

//   const checkoutSquare = async (authCode, isCard) => {
//     try {
//       // authCode is a mobile authorization code from the Mobile Authorization API
//       const authorizedLocation = await authorizeAsync(authCode);
//       // Authorized and authorizedLocation is available
//     } catch(ex) {
//       switch(ex.code) {
//         case AuthorizeErrorNoNetwork:
//           // Remind connecting to network
//           break;
//         case UsageError:
//           let errorMessage = ex.message;
//           if (__DEV__) {
//             errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
//             console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`)
//           }
//           Alert.alert('Error', errorMessage);
//           break;
//       }
//     }

//     if (isCard) {
//       try {
//         await startReaderSettingsAsync();
//       } catch (ex) {
//         switch(ex.code) {
//           case ReaderSettingsErrorSdkNotAuthorized:
//             // Handle reader settings not authorized
//             break;
//           case UsageError:
//             let errorMessage = ex.message;
//             if (__DEV__) {
//               errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
//               console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`)
//             }
//             Alert.alert('Error', errorMessage);
//             break;
//         }
//       }
//     }

//     try {
//       const checkoutResult = await startCheckoutAsync(checkoutParams);
//       // checkout finished successfully and checkoutResult is available
//     } catch(ex) {
//       switch(ex.code) {
//         case CheckoutErrorCanceled:
//           // Handle canceled transaction here
//           break;
//         case CheckoutErrorSdkNotAuthorized:
//           // Handle sdk not authorized
//           break;
//         default:
//           let errorMessage = ex.message;
//           if (__DEV__) {
//             errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
//             console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`)
//           }
//           Alert.alert('Error', errorMessage);
//           break;
//       }
//     }
//   };

//   const calculateTotal = () => {
//     return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.orderInfo}>
//         <Text style={styles.title}>Checkout</Text>
//         {cart.map((item, index) => (
//           <Text key={index} style={styles.item}>{item.name} - ${item.price.toFixed(2)}</Text>
//         ))}
//         <Text style={styles.total}>Total: ${calculateTotal()}</Text>
//       </View>
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={[styles.button, styles.cashButton]} onPress={() => checkoutSquare(AUTH_CODE, false)} >
//           <Text style={styles.buttonText}>Cash</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.cardButton]} onPress={() => checkoutSquare(AUTH_CODE, true)}>
//           <Text style={styles.buttonText}>Card</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.loyaltyButton]}>
//           <Text style={styles.buttonText}>Loyalty</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.cancelButton]}>
//           <Text style={styles.buttonText}>Cancel Transaction</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'space-between', // Adjusted for better layout management
//   },
//   orderInfo: {
//     // Additional styling can be added here
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   item: {
//     fontSize: 18, // Adjusted font size for better readability
//     marginVertical: 5, // Adds spacing between items
//   },
//   total: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around', // Distributes buttons evenly
//     alignItems: 'center',
//   },
//   button: {
//     width: 90,
//     height: 90,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 45, // Makes the buttons circular
//     elevation: 3, // Adds a slight shadow for depth
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   cashButton: {
//     backgroundColor: '#4CAF50', // Example color, adjust as needed
//   },
//   cardButton: {
//     backgroundColor: '#2196F3', // Example color, adjust as needed
//   },
//   loyaltyButton: {
//     backgroundColor: '#FFC107', // Example color, adjust as needed
//   },
//   cancelButton: {
//     backgroundColor: '#F44336', // Example color, adjust as needed
//   },
// });

// export default Checkout;

// best so far

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Switch, Alert } from 'react-native';
// import { useCart } from './CartContext';
// import { authorizeAsync, startCheckoutAsync, startReaderSettingsAsync } from 'react-native-square-reader-sdk';

// const AUTH_CODE = "sq0acp-xYL6Fiiu9jxAt0vYiHbwP4zsSMWCveLes4OaVyQmGMo";

// const Checkout = () => {
//   const { cart } = useCart();
//   const [roundUpActive, setRoundUpActive] = useState(false);

//   const checkoutParams = {
//     amountMoney: {
//       amount: 100, // This will be dynamically calculated
//       currencyCode: 'USD',
//     }
//   };

//   const toggleRoundUp = () => setRoundUpActive(previousState => !previousState);

//   const calculateTotal = () => {
//     let total = cart.reduce((acc, curr) => acc + curr.price, 0);
//     if (roundUpActive) {
//       total = Math.ceil(total); // Rounds up to the nearest whole number
//     }
//     return total.toFixed(2);
//   };

//   const handleCheckout = async (isCard) => {
//     try {
//       await authorizeAsync(AUTH_CODE);
//       if (isCard) {
//         await startReaderSettingsAsync();
//       }
//       const totalAmount = parseInt(calculateTotal() * 100); // Convert dollars to cents
//       checkoutParams.amountMoney.amount = totalAmount;
//       await startCheckoutAsync(checkoutParams);
//     } catch (error) {
//       Alert.alert('Checkout Failed', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.orderInfo}>
//         <Text style={styles.title}>Checkout</Text>
//         {cart.map((item, index) => (
//           <Text key={index} style={styles.item}>{item.name} - ${item.price.toFixed(2)}</Text>
//         ))}
//         <Text style={styles.total}>Total: ${calculateTotal()}</Text>
//         <View style={styles.roundUpContainer}>
//           <Text>Round Up Total</Text>
//           <Switch onValueChange={toggleRoundUp} value={roundUpActive} />
//         </View>
//       </View>
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={[styles.button, styles.cashButton]} onPress={() => handleCheckout(false)}>
//           <Text style={styles.buttonText}>Cash</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.cardButton]} onPress={() => handleCheckout(true)}>
//           <Text style={styles.buttonText}>Card</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.loyaltyButton]}>
//           <Text style={styles.buttonText}>Loyalty</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.cancelButton]}>
//           <Text style={styles.buttonText}>Cancel Transaction</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'space-between',
//   },
//   orderInfo: {},
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   item: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
//   total: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   roundUpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   button: {
//     width: 90,
//     height: 90,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 45,
//     elevation: 3,
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   cashButton: {
//     backgroundColor: '#4CAF50',
//   },
//   cardButton: {
//     backgroundColor: '#2196F3',
//   },
//   loyaltyButton: {
//     backgroundColor: '#FFC107',
//   },
//   cancelButton: {
//     backgroundColor: '#F44336',
//   },
// });

// export default Checkout;

// almost best
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Switch, Alert } from 'react-native';
// import { useCart } from './CartContext';

// const Checkout = () => {
//   const { cart } = useCart();
//   const [roundUpActive, setRoundUpActive] = useState(false);
//   const [total, setTotal] = useState(0);
//   const [roundUpDifference, setRoundUpDifference] = useState('0.00');

//   useEffect(() => {
//     const newTotal = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
//     setTotal(newTotal);
//     // Calculate round-up difference only if round up is active
//     if (roundUpActive) {
//       const roundedTotal = Math.ceil(newTotal);
//       const difference = (roundedTotal - parseFloat(newTotal)).toFixed(2);
//       setRoundUpDifference(difference);
//     } else {
//       setRoundUpDifference('0.00');
//     }
//   }, [cart, roundUpActive]);

//   const toggleRoundUp = () => {
//     setRoundUpActive(!roundUpActive);
//     if (!roundUpActive) { // If it's about to be turned on
//       const roundedTotal = Math.ceil(total);
//       const difference = (roundedTotal - parseFloat(total)).toFixed(2);
//       setRoundUpDifference(difference);
//     } else { // If it's about to be turned off
//       setRoundUpDifference('0.00');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.orderInfo}>
//         <Text style={styles.title}>Checkout</Text>
//         {cart.map((item, index) => (
//           <Text key={index} style={styles.item}>{item.name} - ${item.price.toFixed(2)}</Text>
//         ))}
//         <Text style={styles.total}>Total: ${total}</Text>
//         <Text style={styles.difference}>Round Up Difference: ${roundUpDifference}</Text>
//         <View style={styles.roundUpContainer}>
//           <Text>Round Up Total</Text>
//           <Switch onValueChange={toggleRoundUp} value={roundUpActive} />
//         </View>
//       </View>
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={[styles.button, styles.cashButton]}>
//           <Text style={styles.buttonText}>Cash</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.cardButton]}>
//           <Text style={styles.buttonText}>Card</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.loyaltyButton]}>
//           <Text style={styles.buttonText}>Loyalty</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.cancelButton]}>
//           <Text style={styles.buttonText}>Cancel Transaction</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'space-between', // Adjusted for better layout management
//   },
//   orderInfo: {},
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   item: {
//     fontSize: 18, // Adjusted font size for better readability
//     marginVertical: 5, // Adds spacing between items
//   },
//   total: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   difference: {
//     fontSize: 16,
//     color: 'green',
//     marginBottom: 10,
//   },
//   roundUpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   button: {
//     width: 90,
//     height: 90,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 45, // Makes the buttons circular
//     elevation: 3, // Adds a slight shadow for depth
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   cashButton: {
//     backgroundColor: '#4CAF50', // Example color, adjust as needed
//   },
//   cardButton: {
//     backgroundColor: '#2196F3', // Example color, adjust as needed
//   },
//   loyaltyButton: {
//     backgroundColor: '#FFC107', // Example color, adjust as needed
//   },
//   cancelButton: {
//     backgroundColor: '#F44336', // Example color, adjust as needed
//   },
// });

// export default Checkout;


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Alert } from 'react-native';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const [exactTotal, setExactTotal] = useState(0);
  const [roundUpActive, setRoundUpActive] = useState(false);
  const [roundUpDifference, setRoundUpDifference] = useState(0);

  useEffect(() => {
    // Calculate the exact total from the cart
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setExactTotal(total);

    // If round-up is active, adjust the rounded total and the difference
    if (roundUpActive) {
      const roundedTotal = Math.ceil(total);
      setRoundUpDifference((roundedTotal - total).toFixed(2));  // calculate round-up difference
    } else {
      setRoundUpDifference(0);  // reset round-up difference if not active
    }
  }, [cart, roundUpActive]);

  const toggleRoundUp = () => {
    setRoundUpActive(!roundUpActive);
  };

  // This will now either return the exact total or the rounded total depending on the toggle
  const displayTotal = () => {
    if (roundUpActive) {
      return (Math.ceil(exactTotal)).toFixed(2);
    }
    return exactTotal.toFixed(2);
  };


  // const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
  // const sendStockTrade = (amount) => {
  //   fetch(`${baseURL}/buy-stocks`, {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ amount })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //       Alert.alert('Success', 'Donation successful: ' + data.message);
  //   })
  //   .catch(error => {
  //       console.error('Error donating round-up:', error);
  //       Alert.alert('Error', 'Donation failed: ' + error.message);
  //   });
  // };


  const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;
// best so far

// const sendStockTrade = (amount) => {
//     fetch(`${baseURL}/buy-stocks`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount })
//     })
//     .then(response => {
//         // Check if the response is ok (status in the range 200-299)
//         if (!response.ok) {
//             // If not OK, throw an error with the status
//             throw new Error('Network response was not ok, status: ' + response.status);
//         }else {
//           Alert.alert('Maybe', 'Maybe Invest: ' + data.message);
//         }
//         return response.json();
//     })
//     .then(data => {
//         Alert.alert('Success', 'Successful Invest: ' + data.message);
//     })
//     .catch(error => {
//         console.error('Error Investing round-up:', error);
//         // Extract more meaningful message if the error is due to network response
//         const message = error.message.includes('status') 
//             ? "There was a problem with your request. Please try again."
//             : 'Donation failed: ' + error.message;
//         Alert.alert('Error', message);
//     });
// };

const sendStockTrade = (amount) => {
  fetch(`${baseURL}buy-stocks`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount })
  })
  .then(response => {
      // Always check the response status first
      if (!response.ok) {
          // If not OK, throw an error including the status text
          throw new Error(`Network response was not ok, status: ${response.status} ${response.statusText}`);
      }
      return response.json();  // Convert the response to JSON
  })
  .then(data => {
      // Assuming 'data' contains 'message' key
      Alert.alert('Success', `Successful Invest: ${data.message || 'Completed'}`);
  })
  .catch(error => {
      console.error('Error Investing round-up:', error);
      // Provide a more user-friendly message or use error.message to see more details
      Alert.alert('Error', `Investment failed: ${error.toString()}`);
  });
};




  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.title}>Checkout</Text>
        {cart.map((item, index) => (
          <Text key={index} style={styles.item}>{item.name} - ${item.price.toFixed(2)}</Text>
        ))}
        <Text style={styles.total}>Total: ${displayTotal()}</Text>
        {roundUpActive && <Text style={styles.difference}>Round Up Difference: ${roundUpDifference}</Text>}
        <View style={styles.roundUpContainer}>
          <Text>Round Up Total</Text>
          <Switch onValueChange={toggleRoundUp} value={roundUpActive} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.cashButton]}
          onPress={() => sendStockTrade(roundUpDifference+1)}  // Cash button now sends the donation when pressed
        >
          <Text style={styles.buttonText}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cardButton]}>
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
    justifyContent: 'space-between',
  },
  orderInfo: {},
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  difference: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  roundUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    elevation: 3,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cashButton: {
    backgroundColor: '#4CAF50',
  },
  cardButton: {
    backgroundColor: '#2196F3',
  },
  loyaltyButton: {
    backgroundColor: '#FFC107',
  },
  cancelButton: {
    backgroundColor: '#F44336',
  },
});

export default Checkout;

