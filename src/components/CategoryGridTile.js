import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Platform } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 150,
    margin: 16,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden'
  },
  innerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  button: {
    flex: 1
  },
  textItem: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const renderCategoryItem = ({ item }) => {
  return (
    <View style={[styles.item]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed && {opacity: 0.75}
        ]}>
        <View style={[styles.innerItem, { backgroundColor: item.color }]}>
          <Text style={styles.textItem}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}
export const CategoryGridTile = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
