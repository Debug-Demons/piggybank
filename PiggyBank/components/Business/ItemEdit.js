// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const ItemEdit = ({ route, navigation }) => {
//   const { item } = route.params; // Get the passed item
//   const [name, setName] = useState(item.name);
//   const [price, setPrice] = useState(item.price.toString());

//   const handleSaveChanges = () => {
//     console.log('Save Changes', name, price);
//     // Here you would typically update the backend or state


//     navigation.goBack();
//   };

//   const handleDelete = () => {
//     console.log('Delete Item', item.id);
//     // Here you would typically update the backend or state
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Edit Item Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Enter item name"
//       />
//       <Text style={styles.label}>Edit Item Price:</Text>
//       <TextInput
//         style={styles.input}
//         value={price}
//         onChangeText={setPrice}
//         placeholder="Enter item price"
//         keyboardType="numeric"
//       />
//       <Button title="Save Changes" onPress={handleSaveChanges} />
//       <Button title="Delete Item" onPress={handleDelete} color="red" />
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

// export default ItemEdit;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API; // Ensure this is correctly set in your environment variables

const ItemEdit = ({ route, navigation }) => {
  const { item } = route.params; // Get the passed item
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price.toString());

  const handleSaveChanges = async () => {
    // API call to update the item
    try {
      const response = await fetch(`${baseURL}api/products/updateProductRecord/xUpS398uzrcDsRUQUDq5jtnf2cI2/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          price: parseFloat(price),
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
      Alert.alert("Update Successful", "Item has been updated.");
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save changes:', error);
      Alert.alert("Update Error", "Failed to update item.");
    }
  };

  const handleDelete = async () => {
    // API call to delete the item
    try {
      const response = await fetch(`${baseURL}api/products/deleteProductRecord/xUpS398uzrcDsRUQUDq5jtnf2cI2/${item.id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      Alert.alert("Delete Successful", "Item has been deleted.");
      navigation.goBack();
    } catch (error) {
      console.error('Delete Item Error:', error);
      Alert.alert("Delete Error", "Failed to delete item.");
    }
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



