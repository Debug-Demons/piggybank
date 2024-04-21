import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BubbleButton from './BubbleButton'; // Make sure this path is correct

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const EditableTextBox = ({label, onSave}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('');

    const handleSave = () => {
        onSave(text);
        setIsEditing(false);
    };

    return (
        <View style={styles.textBoxContainer}>
            <Text style={styles.label}>{label}:</Text>
            {isEditing ? (
                <TextInput
                    style={styles.textInput}
                    onChangeText={setText}
                    value={text}
                    autoFocus
                />
            ) : (
                <Text>{text}</Text>
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => isEditing ? handleSave() : setIsEditing(true)}
            >
                <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const BusinessSettings = () => {
    // Example onSave function
    const onSave = (text) => {
        console.log('Saved: ', text);
        // Here you can handle the saving logic, e.g., update state or call an API
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            {/* Repeat EditableTextBox for each setting you want to allow editing for */}
            <EditableTextBox label="Username" onSave={onSave} />
            <EditableTextBox label="Password" onSave={onSave} />
            <EditableTextBox label="Email" onSave={onSave} />
            <EditableTextBox label="POS Code" onSave={onSave} />
            {/* Add more EditableTextBox components as needed */}


            {/* BubbleButton placed under the toggles */}
            <BubbleButton
            title="Create Item"
            onPress={() => navigation.navigate('CreateItem')}
            backgroundColor="#007bff" // Example background color
            
           />
            

        </View>

        
        
    );
 

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5', // Light grey background for better visibility
    },
    header: {
        fontSize: 22,
        marginBottom: 20,
    },
    textBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
        fontWeight: 'bold',
    },
    textInput: {
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#007bff', // Bootstrap primary color for the button
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff', // White color for the button text
    },
});

export default BusinessSettings;
