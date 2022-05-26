import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SubTitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    padding: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#ab8874'
  },
  text: {
    color: '#ab8874',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})
