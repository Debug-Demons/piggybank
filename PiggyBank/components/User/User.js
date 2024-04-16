import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState, useEffect, useCallback} from 'react';
import {Alert, RefreshControl} from 'react-native'
import UserHome from './UserHome';
import UserAnalytics from './UserAnalytics';
import UserSettings from './UserSettings';

const Tab = createBottomTabNavigator();

const User = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [homeData, setHomeData] = useState([]);
    const [analyticsData, setAnalyticsData] = useState([]);
    const [settingsData, setSettingsData] = useState([]);

    const fetchData = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            const newData = [];
            setHomeData({'username': "User123", 'email':"Email@test.com", 'phoneNumber':"123456789", 'balance':"112.00"});
            setAnalyticsData([
                { id: '1', text: 'Apple', amount: '0.22', date:'11/30/23' },
                { id: '2', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
                { id: '3', text: 'Sony', amount: '0.57', date:'01/15/22' },
                { id: '4', text: 'Apple', amount: '0.22', date:'11/30/23' },
                { id: '5', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
                { id: '6', text: 'Sony', amount: '0.57', date:'01/15/22' },
                { id: '7', text: 'Apple', amount: '0.22', date:'11/30/23' },
                { id: '8', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
                { id: '9', text: 'Sony', amount: '0.57', date:'01/15/22' },
                { id: '10', text: 'Apple', amount: '0.22', date:'11/30/23' },
                { id: '11', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
                { id: '12', text: 'Sony', amount: '0.57', date:'01/15/22' },
                { id: '13', text: 'Apple', amount: '0.22', date:'11/30/23' },
                { id: '14', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
                { id: '15', text: 'Sony', amount: '0.57', date:'01/15/22' },
                // Add more items as needed
                ]);
            setSettingsData(newData);
            setRefreshing(false);
            Alert.alert("Data fetch")
        }, 2000);
    }, []);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home'>
                {() => <UserHome refreshing={refreshing} onRefresh={fetchData} data={homeData} />}
            </Tab.Screen>
            <Tab.Screen name='Analytics'>
                {() => <UserAnalytics refreshing={refreshing} onRefresh={fetchData} data={analyticsData} />}
            </Tab.Screen>
            <Tab.Screen name='Settings'>
                {() => <UserSettings refreshing={refreshing} onRefresh={fetchData} data={settingsData} />}
            </Tab.Screen>

        </Tab.Navigator>
    );
};

export default User;