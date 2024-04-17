// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

// const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

// const BubbleButton = ({ title, onPress, backgroundColor }) => {
//   const [scale] = useState(new Animated.Value(1));

//   const animateIn = () => {
//     Animated.spring(scale, {
//       toValue: 0.95,
//       useNativeDriver: true,
//     }).start();
//   };

//   const animateOut = () => {
//     Animated.spring(scale, {
//       toValue: 1,
//       friction: 3,
//       tension: 100,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <AnimatedTouchable
//       onPressIn={animateIn}
//       onPressOut={animateOut}
//       onPress={onPress}
//       style={[
//         styles.bubble,
//         { backgroundColor, transform: [{ scale }] },
//       ]}
//     >
//       <Text style={styles.bubbleText}>{title}</Text>
//     </AnimatedTouchable>
//   );
// };

// const styles = StyleSheet.create({
//   bubble: {
//     borderRadius: 25,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     margin: 10,
//     elevation: 3,
//     shadowOffset: { width: 1, height: 1 },
//     shadowColor: '#333',
//     shadowOpacity: 1.2,
//     shadowRadius: 2,
//     alignItems: 'center',
//   },
//   bubbleText: {
//     color: '#af1',
//     textAlign: 'center',
//     fontSize: 19,
//   },
// });

// export default BubbleButton;



import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const BubbleButton = ({ title, onPress, backgroundColor }) => {
  const navigation = useNavigation();
  // Initialize animation value
  const scale = new Animated.Value(1);

  // Function to handle press in animation
  const animatePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  // Function to handle press out animation
  const animatePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedTouchable
      onPress={onPress}
      onPressIn={animatePressIn}
      onPressOut={animatePressOut}
      style={[
        styles.bubble,
        { 
          backgroundColor: backgroundColor || '#4CAF50', // Default color if none provided
          transform: [{ scale }]
        }
      ]}
    >
      <Text style={styles.bubbleText}>{title}</Text>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3, // Adjusted for better visibility; 1.2 is beyond the valid range [0,1]
    shadowRadius: 2,
    alignItems: 'center',
  },
  bubbleText: {
    color: '#fff', // Adjusted for better contrast with most backgrounds
    textAlign: 'center',
    fontSize: 16, // Adjusted for consistency; feel free to use 19 if it suits your design better
  },
});

export default BubbleButton;
