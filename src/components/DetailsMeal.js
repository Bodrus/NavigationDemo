import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  },
  detailsText: {
    paddingHorizontal: 2,
    fontWeight: '400',
    fontSize: 14
  }
})

export const DetailsMeal = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailsText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsText, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsText, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
