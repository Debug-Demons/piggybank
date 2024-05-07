import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView} from 'react-native';
import { useCart } from './CartContext';
import { useFocusEffect } from '@react-navigation/native';
import  PaymentModal from './PaymentModal';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [total, setTotal] = useState(0);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [typeCheckout, setTypeCheckout] = useState('CASH');
  const [roundUpActive, setRoundUpActive] = useState(false);
  const [roundUpDifference, setRoundUpDifference] = useState(0);

  const calculateTotal = () => {
    var totalcost = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)

    if (roundUpActive) {
      const roundedTotal = Math.ceil(totalcost) + 1;  // Adding 1 dollar after rounding up to the nearest whole number
      setRoundUpDifference((roundedTotal - totalcost).toFixed(2));  // calculate round-up difference including the extra dollar
      setTotal(roundedTotal.toFixed(2));
    } else {
      setRoundUpDifference(0);  // reset round-up difference if not active
      setTotal(totalcost);
    }
  };

  const toggleRoundUp = () => {
    setRoundUpActive(!roundUpActive);
  };

  const checkoutOpen = (type) => {
    if (total - roundUpDifference > 0) {
      setTypeCheckout(type)
    } else {
      setTypeCheckout('INVALID')
    }
    setPaymentModalVisible(true);
  };

  const checkoutClose = () => {
    if(paymentModalVisible) {
      sendStockTrade(roundUpDifference)
      setPaymentModalVisible(false)
      clearCart();
    }
  };

  const clearTransaction = () => {
    setTotal(0);
    setTypeCheckout('CASH');
    clearCart();
  };

  const sendStockTrade = (amount) => {
    // fetch('http://localhost:3000/buy-stocks', {
     fetch(`${baseURL}/buy-stocks`, {
 
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({ amount })
     })
     .then(response => {
         if (!response.ok) {
             throw new Error(`Network response was not ok, status: ${response.status} ${response.statusText}`);
         }
         return response.text();  // getting the response as text first to check if it's valid JSON
     })
     .then(text => {
         try {
             const data = JSON.parse(text);  // parsing text to JSON
             console.log('Success', `Successful Invest: ${data.message || 'Completed'}`);
         } catch (error) {
             console.log('Success', `Successful Invest: ${text}`);  // directly show text if JSON parsing fails
         }
     })
     .catch(error => {
         console.error('Error Investing round-up:', error);
         console.log('Error', `Investment failed: ${error.toString()}`);
     });
   };

  useFocusEffect(() => {
    calculateTotal()
  });

  return (
    <View style={styles.container}>
      <View style={{height:'75%'}}>
        <Text style={styles.title}>Total: ${total}</Text>
        <ScrollView>
          {cart.map((item, index) => (
            <Text key={index} style={styles.item}>{item.name} - ${item.price.toFixed(2)}</Text>
          ))}
        </ScrollView>
        <View style={styles.roundUpContainer}>
          <Text style={styles.roundupText}>Round Up Total</Text>
          <Switch style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} onValueChange={toggleRoundUp} value={roundUpActive} />
        </View>
      </View>
      <PaymentModal
          visible={paymentModalVisible}
          total={total}
          type={typeCheckout}
          onClose={() => checkoutClose()}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.cashButton]} onPress={() => checkoutOpen('CASH')} >
          <Text style={styles.buttonText}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cardButton]} onPress={() => checkoutOpen('CARD')}>
          <Text style={styles.buttonText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loyaltyButton]}>
          <Text style={styles.buttonText}>Loyalty</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => clearTransaction()}>
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
  roundUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  roundupText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Checkout;
