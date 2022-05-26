import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const RenderList = ({ data }) => {
  return data.map(el => {
    return (
      <View key={el} style={styles.container}>
        <Text style={styles.text}>{el}</Text>
      </View>
    );
  })
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eed1bf',
    marginTop: 5,
    borderRadius: 8
  },
  text: {
    color: '#816756',
    textAlign: 'center'
  }
})
