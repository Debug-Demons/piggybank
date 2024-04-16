import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateItem = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = () => {
    // Here you would usually submit the item to your backend or state management solution
    console.log('Item Name:', itemName, 'Item Price:', itemPrice);
    // Navigate back or show a success message
    navigation.goBack();
  };

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

export default CreateItem;
