import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ItemEdit = ({ route, navigation }) => {
  const { item } = route.params; // Get the passed item
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price.toString());

  const handleSaveChanges = () => {
    console.log('Save Changes', name, price);
    // Here you would typically update the backend or state
    navigation.goBack();
  };

  const handleDelete = () => {
    console.log('Delete Item', item.id);
    // Here you would typically update the backend or state
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Item Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter item name"
      />
      <Text style={styles.label}>Edit Item Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter item price"
        keyboardType="numeric"
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
      <Button title="Delete Item" onPress={handleDelete} color="red" />
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

export default ItemEdit;
