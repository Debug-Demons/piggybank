// Import necessary components from React Native
import React, { useState } from 'react';
import { View, ScrollView, Text, Button, Switch, StyleSheet, RefreshControl } from 'react-native';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase authentication functions
import { getUserData } from '../storage';

// Create a functional component for the Settings page
const UserSettings = React.memo(({navigation, refreshing, onRefresh, data}) => {
  // State variables for settings
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  //logout logic 
  const handleLogout = async() =>{
    try{
      const auth = getAuth();
      await signOut(auth);
      navigation.replace('Login');
    } catch(error){
      console.error('Error during logout:', error);
      Alert.alert('Logout failed', 'An error occured when logging out. Please Try Again.');
    }
  }


  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={notificationEnabled}
          onValueChange={(value) => setNotificationEnabled(value)}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={(value) => setDarkModeEnabled(value)}
        />
      </View>
      <Button title="Logout" onPress={ () => navigation.replace('Login')}/>
    </ScrollView>

  );
});

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
  },
});

// Export the SettingsPage component
export default UserSettings;
