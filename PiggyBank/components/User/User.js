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
    const currentDate = new Date();
    const twentyFourHoursAgo = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = (currentDate.getDate()).toString().padStart(2, '0');
    const year2 = twentyFourHoursAgo.getFullYear();
    const month2 = (twentyFourHoursAgo.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day2 = twentyFourHoursAgo.getDate().toString().padStart(2, '0');
    const range1 = `${year}-${month}-${day}`;
    const range2 = `${year2}-${month2}-${day2}`;

    const fetchData = async() => {
        setRefreshing(true);
        //User data
        try {
            const data = await getUserData();
            if(data) {
                setHomeData(data);
            } else {
                console.error("Error getting customer data");
            }
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }

        //stock data
        try {
            const aaplStocksResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/hour/${range2}/${range1}?apiKey=SUQMpUp8MyE8Y0DLVlCZaBTrNBp0pDkk`);
            const googlStocksResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/GOOGL/range/1/hour/${range2}/${range1}?apiKey=SUQMpUp8MyE8Y0DLVlCZaBTrNBp0pDkk`);
            const msftStocksResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/MSFT/range/1/hour/${range2}/${range1}?apiKey=SUQMpUp8MyE8Y0DLVlCZaBTrNBp0pDkk`);
            const aaplStocks = await aaplStocksResponse.json();
            const googlStocks = await googlStocksResponse.json();
            const msftStocks = await msftStocksResponse.json();

            if (aaplStocks.results && googlStocks.results && msftStocks.results) {
                const stocksData = {"apple":aaplStocks, "google": googlStocks, "microsoft":msftStocks};
                setAnalyticsData(stocksData);
            }
        } catch(error) {
            console.error("Error retrieving stock info");
        } finally {
            setRefreshing(false);
        }

        if (refreshing) {
            return <ActivityIndicator />;
        }
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