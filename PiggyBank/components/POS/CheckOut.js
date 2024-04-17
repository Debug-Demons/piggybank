// Checkout.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useCart } from './CartContext';

// const Checkout = () => {
//   const { cart } = useCart();

//   const calculateTotal = () => {
//     return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Checkout</Text>                                 
//       {cart.map((item, index) => (
//         <Text key={index}>{item.name} - ${item.price}</Text>
//       ))}
//       <Text style={styles.total}>Total: ${calculateTotal()}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   total: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Checkout;






import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import { useCart } from './CartContext';
 import { useCart } from './CartContext';


 const Checkout = () => {
//const Checkout = ({ useCart }) => {
  //const { cart } = useCart();
     const { cart } = useCart();


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
        <TouchableOpacity style={[styles.button, styles.cashButton]}>
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
