import React, {useState} from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
const baseURL = process.env.EXPO_PUBLIC_BASE_URL_API;

const LoyaltyModal = ({ visible, onClose }) => {
    const [email, setEmail] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [balance, setBalance] = useState(0);

    const handleInputChange = (text) => {
        setEmail(text);
    };

    const getBalance = () => {
        fetch(`${baseURL}/customer/${email}/loyalty` , {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(data => {
            if (data.loyalty >= 0) {
                setBalance(data.loyalty);
                setConfirmed(true);
                return;
            }
        })
        .catch(error => {
            console.error(error);
        });
    };

    const clear = () => {
        setEmail('');
        setConfirmed(false);
        setBalance(0);
    };

    const handleCloseModal = () => {
        onClose(email, confirmed, balance, false);
    };

    const handleUseLoyalty = () => {
        onClose(email, confirmed, balance, true);
    };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      >
      <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.totalText}>Loyalty</Text>
        <Text>Enter Customer Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={email}
        autoCapitalize='none'
        />
        {confirmed && <Text style={{color:"green"}}>Confirmed</Text>}
        {confirmed && <Text>Loyalty Balance: ${balance}</Text>}
        {confirmed && <TouchableOpacity style={[styles.button, {marginBottom:20}]} onPress={clear}>
            <Text style={styles.buttonText}>Clear Entry</Text>
        </TouchableOpacity>}
        {confirmed && (<View style={{marginBottom:20}}>
            <TouchableOpacity style={styles.button} onPress={handleUseLoyalty}>
                <Text style={styles.buttonText}>Use Loyalty</Text>
            </TouchableOpacity>
        </View>)}
        {!confirmed && <TouchableOpacity style={[styles.button, {marginBottom:20}]} onPress={getBalance}>
            <Text style={styles.buttonText}>Confirm Email</Text>
        </TouchableOpacity>}
        <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
            <Text style={styles.buttonText}>{confirmed ? "Skip Loyalty" : "Return"}</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 70,
    borderRadius: 10,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20, 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    width: 150,
    color: 'black',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default LoyaltyModal;
