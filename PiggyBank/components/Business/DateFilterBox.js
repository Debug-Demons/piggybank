// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const DateFilterBox = ({ onFetchData }) => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [showStartPicker, setShowStartPicker] = useState(false);
//   const [showEndPicker, setShowEndPicker] = useState(false);

//   const onChangeStart = (event, selectedDate) => {
//     setShowStartPicker(Platform.OS === 'ios');
//     if (selectedDate) {
//       setStartDate(selectedDate);
//     }
//   };

//   const onChangeEnd = (event, selectedDate) => {
//     setShowEndPicker(Platform.OS === 'ios');
//     if (selectedDate) {
//       setEndDate(selectedDate);
//     }
//   };

//   return (
//     <View style={styles.filterBox}>
//       <Text style={styles.filterText}>Select Date Range:</Text>
//       <Button title="Start Date" onPress={() => setShowStartPicker(true)} />
//       {showStartPicker && (
//         <DateTimePicker
//           value={startDate}
//           mode="date"
//           display="default"
//           onChange={onChangeStart}
//         />
//       )}
//       <Button title="End Date" onPress={() => setShowEndPicker(true)} />
//       {showEndPicker && (
//         <DateTimePicker
//           value={endDate}
//           mode="date"
//           display="default"
//           onChange={onChangeEnd}
//         />
//       )}
//       <Button
//         title="Fetch Data"
//         onPress={() => onFetchData(startDate, endDate)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   filterBox: {
//     padding: 20,
//     marginVertical: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//   },
//   filterText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   // Additional styles...
// });

// export default DateFilterBox;



// DateFilterBox.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const DateFilterBox = ({ onFetchData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndPicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <Text style={styles.label}>Start Date:</Text>
        <Button title="Choose" onPress={() => setShowStartPicker(true)} />
        {showStartPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode={'date'}
            display="default"
            onChange={onChangeStart}
          />
        )}
      </View>
      <View style={styles.datePickerContainer}>
        <Text style={styles.label}>End Date:</Text>
        <Button title="Choose" onPress={() => setShowEndPicker(true)} />
        {showEndPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={endDate}
            mode={'date'}
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </View>
      <Button
        title="Fetch Data"
        onPress={() => onFetchData(startDate, endDate)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 20,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default DateFilterBox;
