// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { products as initialProducts } from '../MockData'; // Adjust path as needed
// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

// const BusinessProducts = () => {
//   const [products, setProducts] = useState(initialProducts);
//   const [itemName, setItemName] = useState('');
//   const [itemPrice, setItemPrice] = useState('');

//   const handleSubmit = () => {
//     // Simulate adding item to "database"
//     const newItem = { id: products.length + 1, name: itemName, price: parseFloat(itemPrice) };
//     setProducts(currentProducts => [...currentProducts, newItem]);

//     // Optionally, clear input fields or handle navigation
//     setItemName('');
//     setItemPrice('');
//   };

//   const handleEditItem = (id, newName, newPrice) => {
//     setProducts(currentProducts => currentProducts.map(item =>
//       item.id === id ? { ...item, name: newName, price: newPrice } : item
//     ));
//   };

//   // Sample usage of editing an item (you'll need to adjust this for real scenarios, e.g., input fields)
//   // This is just an example; in a real app, you'd likely have a separate edit form.
//   // handleEditItem(1, 'Updated Name', 1.99);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Item Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={itemName}
//         onChangeText={setItemName}
//         placeholder="Enter item name"
//       />
//       <Text style={styles.label}>Item Price:</Text>
//       <TextInput
//         style={styles.input}
//         value={itemPrice}
//         onChangeText={setItemPrice}
//         placeholder="Enter item price"
//         keyboardType="numeric"
//       />
//       <Button title="Add Item" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   label: {
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//   },
// });

// export default BusinessProducts;


// best so far 

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
// import { products as initialProducts } from '../MockData'; // Adjust path as needed

// const BusinessProducts = ({ navigation }) => {
//   const [products, setProducts] = useState(initialProducts);

//   const handleNavigateToCreateItem = () => {
//     navigation.navigate('CreateItem'); // Make sure 'CreateItem' is the name used in your Stack.Navigator
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Add Item" onPress={handleNavigateToCreateItem} />
//       <ScrollView>
//         {products.map((product, index) => (
//           <View key={index} style={styles.productContainer}>
//             <Text style={styles.productText}>{product.name} - ${product.price.toFixed(2)}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   productContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   productText: {
//     fontSize: 16,
//   },
// });

// export default BusinessProducts;





// best best so far 

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { products as initialProducts } from '../MockData'; // Adjust path as needed

// const BusinessProducts = ({ navigation }) => {
//   const [products, setProducts] = useState(initialProducts);

//   const handleNavigateToCreateItem = () => {
//     navigation.navigate('CreateItem');
//   };

//   const handleNavigateToItemEdit = (item) => {
//     navigation.navigate('ItemEdit', { item }); // Pass the item to be edited to the ItemEdit screen
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Add Item" onPress={handleNavigateToCreateItem} />
//       <ScrollView>
//         {products.map((product, index) => (
//           <View key={index} style={styles.productContainer}>
//             <Text style={styles.productText}>{product.name} - ${product.price.toFixed(2)}</Text>
//             <TouchableOpacity 
//               style={styles.optionsButton} 
//               onPress={() => handleNavigateToItemEdit(product)}>
//               <Text style={styles.optionsText}>...</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   productContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   productText: {
//     fontSize: 16,
//   },
//   optionsButton: {
//     padding: 10,
//   },
//   optionsText: {
//     fontSize: 24, // Make the dots bigger to emphasize clickable area
//   },
// });

// export default BusinessProducts;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { products as initialProducts } from '../MockData'; // Adjust path as needed

const BusinessProducts = ({ navigation }) => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavigateToCreateItem = () => {
    navigation.navigate('CreateItem');
  };

  const handleNavigateToItemEdit = (item) => {
    navigation.navigate('ItemEdit', { item });
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.searchBar}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search Products..."
      />
      <ScrollView>
        {filteredProducts.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Text style={styles.productText}>{product.name} - ${product.price.toFixed(2)}</Text>
            <TouchableOpacity 
              style={styles.optionsButton} 
              onPress={() => handleNavigateToItemEdit(product)}>
              <Text style={styles.optionsText}>...</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Button title="Add Item" onPress={handleNavigateToCreateItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  productText: {
    fontSize: 16,
  },
  optionsButton: {
    padding: 10,
  },
  optionsText: {
    fontSize: 24,
  },
});

export default BusinessProducts;
