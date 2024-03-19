import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import UserHome from './UserHome';
import UserAnalytics from './UserAnalytics';
import UserSettings from './UserSettings';

const Tab = createBottomTabNavigator();

const User = () => {
    //Pass user state variable to UserHome to get data from firestore database.
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home'>
                {(props) => <UserHome {...props} user={user} />} 
            </Tab.Screen>
            <Tab.Screen name='Analytics' component={UserAnalytics} />
            <Tab.Screen name='Settings' component={UserSettings} />
        </Tab.Navigator>
    );
};

export default User;