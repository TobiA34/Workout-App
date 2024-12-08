import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const SquareCards = () => {
  return (
    <View style={styles.card}>
      {/* "+" Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Description Text */}
      <Text style={styles.text}>Unlock the power of wellbeing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 150,
    backgroundColor: 'red',
    borderRadius: 10,  
    padding: 10,  
    justifyContent: 'space-between', 
    alignItems: 'flex-start',  
    margin: 10, 
  },
  buttonContainer: {
    alignSelf: 'flex-end', 
  },
  button: {
    backgroundColor: '#fff', 
    width: 40,
    height: 40,
    borderRadius: '50%',  
    justifyContent: 'center',  
    alignItems: 'center',  
    elevation: 2,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'red', 
    fontSize: 18,  
    fontWeight: 'bold',
  },
  text: {
    color: '#fff', 
    fontSize: 14, 
   },
});

export default SquareCards;