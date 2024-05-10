import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, Alert } from 'react-native';
import { useCart } from './CartContext';
import { getUserData } from '../storage';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const PosHome = ({navigation}) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputPrice, setInputPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseURL}api/products/getProductData/xUpS398uzrcDsRUQUDq5jtnf2cI2`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to load products');
      }
      setIsLoading(false);
    };
  
    fetchProducts();
  }, []);
  
  const handleLogout = async() =>{
    try{
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
        navigation.replace('Login');
    }
  }

  const addMiscItem = () => {
    if (inputPrice) {
      addToCart({ name: 'Misc Item', price: parseFloat(inputPrice) });
      setInputPrice('');
    }
  };

  const clearInput = () => {
    setInputPrice('');
  };

  const addProductToCart = (product) => {
    addToCart(product);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
    <ScrollView>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <View style={styles.productListContainer}>
          <ScrollView horizontal style={styles.productList}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productButton}
                onPress={() => addProductToCart(product)}
              >
                <Text>{product.name} - ${product.price.toFixed(2)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      <View style={styles.keypad}>
        {Array.from({ length: 10 }, (_, i) => (
          <TouchableOpacity
            key={i}
            style={styles.button}
            onPress={() => setInputPrice(prev => prev + i.toString())}
          >
            <Text style={styles.buttonText}>{i}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, inputPrice.includes('.') && styles.buttonDisabled]}
          onPress={() => {
            if (!inputPrice.includes('.')) {
              setInputPrice(prev => prev + '.');
            }
          }}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInputPrice(prev => prev.slice(0, -1) || '0')}
        >
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={clearInput}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={addMiscItem}>
          <Text>Add Misc Item ($ {inputPrice})</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Button title="Logout" onPress={handleLogout}/>
      </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window'); // Get the device width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBar: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: width - 40,
  },
  productListContainer: {
    height: 100,
    width: width,
  },
  productList: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  productButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    margin: 5,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  buttonDisabled: {
    backgroundColor: '#f8d7da',
  },
  buttonText: {
    fontSize: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#f8d7da',
    padding: 10,
    margin: 5,
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
  },
});

export default PosHome;
