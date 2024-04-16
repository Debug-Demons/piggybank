// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import PosHome from './PosHome';
// import CheckOut from './CheckOut';


// const Tab = createBottomTabNavigator();

// const POS = () => {

//     return (
//     <Tab.Navigator initialRouteName='Home'>
//         <Tab.Screen name='POS' component={PosHome} />
//         <Tab.Screen name='CheckOut' component={CheckOut} />
//     </Tab.Navigator>
//     );
// }

// export default POS;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import PosHome from './PosHome';
import CheckOut from './CheckOut';
import { CartProvider } from './CartContext';

const Tab = createBottomTabNavigator();

const POS = () => {
  return (
    <CartProvider>
      <Tab.Navigator>
        <Tab.Screen name="POS Home" component={PosHome} />
        <Tab.Screen name="Checkout" component={CheckOut} />
      </Tab.Navigator>
    </CartProvider>
  );
};

export default POS;





