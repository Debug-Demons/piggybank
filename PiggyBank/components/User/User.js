import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState, useEffect, ActivityIndicator} from 'react';
import { getUserData } from '../storage';
import UserHome from './UserHome';
import UserAnalytics from './UserAnalytics';

const Tab = createBottomTabNavigator();

const User = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false)
    const [homeData, setHomeData] = useState([]);
    const [analyticsData, setAnalyticsData] = useState([]);

    const fetchData = async() => {
        setRefreshing(true);
        //User data
        try {
            const data = await getUserData();
            const stocks = await fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2024-01-01/2024-01-31?apiKey=SUQMpUp8MyE8Y0DLVlCZaBTrNBp0pDkk');
            console.error(stocks)
            if(stocks.status===200) {
                console.error(stocks)
                setHomeData(data);
                setAnalyticsData(stocks.json())
            } else {
                console.error("Error getting customer data");
            }
            setRefreshing(false);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }

        if (refreshing) {
            return <ActivityIndicator />;
          }


        // setHomeData({'username': "User123", 'email':"Email@test.com", 'phoneNumber':"123456789", 'balance':"112.00"});
        // setAnalyticsData([
        //     { id: '1', text: 'Apple', amount: '0.22', date:'11/30/23' },
        //     { id: '2', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
        //     { id: '3', text: 'Sony', amount: '0.57', date:'01/15/22' },
        //     { id: '4', text: 'Apple', amount: '0.22', date:'11/30/23' },
        //     { id: '5', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
        //     { id: '6', text: 'Sony', amount: '0.57', date:'01/15/22' },
        //     { id: '7', text: 'Apple', amount: '0.22', date:'11/30/23' },
        //     { id: '8', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
        //     { id: '9', text: 'Sony', amount: '0.57', date:'01/15/22' },
        //     { id: '10', text: 'Apple', amount: '0.22', date:'11/30/23' },
        //     { id: '11', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
        //     { id: '12', text: 'Sony', amount: '0.57', date:'01/15/22' },
        //     { id: '13', text: 'Apple', amount: '0.22', date:'11/30/23' },
        //     { id: '14', text: 'Tesla', amount: '-0.39', date:'07/20/23' },
        //     { id: '15', text: 'Sony', amount: '0.57', date:'01/15/22' },
        //     // Add more items as needed
        //     ]);
        // setSettingsData(newData);

        setRefreshing(false);
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home'>
                {() => <UserHome navigation={navigation} refreshing={refreshing} onRefresh={fetchData} data={homeData} />}
            </Tab.Screen>
            <Tab.Screen name='Analytics'>
                {() => <UserAnalytics refreshing={refreshing} onRefresh={fetchData} data={analyticsData} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default User;