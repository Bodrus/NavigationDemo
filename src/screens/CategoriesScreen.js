import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';

export const CategoriesScreen = ({ navigation }) => {

  const renderCategoryItem = (itemData) => {
    const item = itemData.item;
    const handlePress = () => {
      navigation.navigate('MealsOverview', {
        categoryIds: item.id
      })
    }
    return <CategoryGridTile title={item.title} color={item.color} handlePress={handlePress} />
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
