import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native';
import { DetailsMeal } from './DetailsMeal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.35,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 8
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  }
})

export const MealItem = ({ title, imageUrl, duration, complexity, affordability, handlePress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => pressed && {opacity: 0.75}}
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
          <DetailsMeal
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};
