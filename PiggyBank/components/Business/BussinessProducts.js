import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { products as initialProducts } from '../MockData'; // Adjust path as needed

const BusinessProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = () => {
    // Simulate adding item to "database"
    const newItem = { id: products.length + 1, name: itemName, price: parseFloat(itemPrice) };
    setProducts(currentProducts => [...currentProducts, newItem]);

    // Optionally, clear input fields or handle navigation
    setItemName('');
    setItemPrice('');
  };

  const handleEditItem = (id, newName, newPrice) => {
    setProducts(currentProducts => currentProducts.map(item =>
      item.id === id ? { ...item, name: newName, price: newPrice } : item
    ));
  };

  // Sample usage of editing an item (you'll need to adjust this for real scenarios, e.g., input fields)
  // This is just an example; in a real app, you'd likely have a separate edit form.
  // handleEditItem(1, 'Updated Name', 1.99);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
      />
      <Text style={styles.label}>Item Price:</Text>
      <TextInput
        style={styles.input}
        value={itemPrice}
        onChangeText={setItemPrice}
        placeholder="Enter item price"
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default BusinessProducts;
