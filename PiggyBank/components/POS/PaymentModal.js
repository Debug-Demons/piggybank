import React, { useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import MockPaymentProcess from './MockPaymentProcess';

const PaymentModal = ({ visible, total, onClose, type }) => {
  const CASH_INSTRUCT = "Please accept cash and deposit into register.";
  const CARD_INSTRUCT = "Please insert or tap card."

  if(type === 'CARD') {
    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 5000);
    });
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.totalText}>{type === 'INVALID' ? "Invalid Transaction" : "Total Payment"}</Text>
          <Text style={styles.totalText}>{type === 'INVALID' ? "Enter items to purchase." : `$${total}`}</Text>
          {(type === 'CASH' || type === 'CARD') && (<Text style={styles.instructionText}>
            {type === 'CASH' ? CASH_INSTRUCT : CARD_INSTRUCT}
          </Text>)}
          {type === 'CARD' && (<MockPaymentProcess/>)}
          {(type === 'CASH' || type === 'INVALID') && (
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          )}
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
});

export default PaymentModal;
