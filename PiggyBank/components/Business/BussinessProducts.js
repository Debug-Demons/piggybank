

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { products as initialProducts } from '../MockData'; // Adjust path as needed

// const BusinessProducts = ({ navigation }) => {
//   const [products, setProducts] = useState(initialProducts);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleNavigateToCreateItem = () => {
//     navigation.navigate('CreateItem');
//   };

//   const handleNavigateToItemEdit = (item) => {
//     navigation.navigate('ItemEdit', { item });
//   };

//   const filteredProducts = products.filter(product => 
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
      
//       <TextInput
//         style={styles.searchBar}
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//         placeholder="Search Products..."
//       />
//       <ScrollView>
//         {filteredProducts.map((product, index) => (
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
//       <Button title="Add Item" onPress={handleNavigateToCreateItem} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   searchBar: {
//     height: 40,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     fontSize: 16,
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
//     fontSize: 24,
//   },
// });

// export default BusinessProducts;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API; // Ensure this is correctly set in your environment variables

// const BusinessProducts = ({ navigation }) => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`${baseURL}api/products/getProductData/xUpS398uzrcDsRUQUDq5jtnf2cI2`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products: ' + response.status);
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Failed to fetch products:', error);
//         setError('Failed to load products');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleNavigateToCreateItem = () => {
//     navigation.navigate('CreateItem');
//   };

//   const handleNavigateToItemEdit = (item) => {
//     navigation.navigate('ItemEdit', { item });
//   };

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//         placeholder="Search Products..."
//       />
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : error ? (
//         <Text>Error: {error}</Text>
//       ) : (
//         <ScrollView>
//           {filteredProducts.map((product, index) => (
//             <View key={index} style={styles.productContainer}>
//               <Text style={styles.productText}>{product.name} - ${product.price.toFixed(2)}</Text>
//               <TouchableOpacity 
//                 style={styles.optionsButton} 
//                 onPress={() => handleNavigateToItemEdit(product)}>
//                 <Text style={styles.optionsText}>...</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       )}
//       <Button title="Add Item" onPress={handleNavigateToCreateItem} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   searchBar: {
//     height: 40,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     fontSize: 16,
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
//     fontSize: 24,
//   },
// });

// export default BusinessProducts;

// best code so farrrrr

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API; // Ensure this is correctly set in your environment variables

// const BusinessProducts = ({ navigation }) => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`${baseURL}/api/products/getProductData/xUpS398uzrcDsRUQUDq5jtnf2cI2`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch products: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Failed to fetch products:', error);
//         setError('Failed to load products');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleNavigateToCreateItem = () => {
//     navigation.navigate('CreateItem');
//   };

//   const handleNavigateToItemEdit = (item) => {
//     navigation.navigate('ItemEdit', { item });
//   };

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//         placeholder="Search Products..."
//       />
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : error ? (
//         <Text>Error: {error}</Text>
//       ) : (
//         <ScrollView>
//           {filteredProducts.map((product, index) => (
//             <View key={index} style={styles.productContainer}>
//               <Text style={styles.productText}>{product.name} - ${product.price.toFixed(2)}</Text>
//               <TouchableOpacity 
//                 style={styles.optionsButton} 
//                 onPress={() => handleNavigateToItemEdit(product)}>
//                 <Text style={styles.optionsText}>...</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       )}
//       <Button title="Add Item" onPress={handleNavigateToCreateItem} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   searchBar: {
//     height: 40,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     fontSize: 16,
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
//     fontSize: 24,
//   },
// });

// export default BusinessProducts;



import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API; // Ensure this is correctly set in your environment variables

const BusinessProducts = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/products/getProductData/xUpS398uzrcDsRUQUDq5jtnf2cI2`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setError('Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch products whenever the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

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
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
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
      )}
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
